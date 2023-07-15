import React, {useState, useEffect, useContext} from 'react';
import Header from '../../../layouts/Trade/Header/Header';
import Sidebar from '../../../layouts/Trade/Sidebar';
import TokenHeader from './TokenHeader';
import TokenChart from './TokenChart/Main';
import TokenOrders from './TokenOrders';
import TokenBuy from './TokenBuy/Main';
import useWebSocket from 'react-use-websocket';
import { groupByTicketSize, addTotalSums, addDepths, getMaxTotalSum, BACKEND_URL, groupByTicketSizeAsks, groupByTicketSizeBids} from '../../../../helpers';
import axios from 'axios';
import Positions from './Positions';
import jwtInterceptor from '../../../../shared/jwtInterceptor';
import AuthContext from '../../../../shared/AuthContext';

function getKlines(setKlines, setIsLoading, time){
  const apiUrl = BACKEND_URL + '/exchange/history/btcusdt/' + time + "/";
    axios.get(apiUrl).then((resp) => {
      setKlines(resp.data.data.map((element) => {
        return {
          close: parseFloat(element.close),
          high: parseFloat(element.high),
          low: parseFloat(element.low),
          open: parseFloat(element.open),
          time: element.time
        }
      }))
      setIsLoading(false);
            // let markPrice = parseFloat(resp.data.markPrice).toFixed(2);
            // // console.log(price)
            // setMarkTokenPrice(markPrice);
            
            // let indexPrice = parseFloat(resp.data.indexPrice).toFixed(2);
          //  console.log(resp.data.data)
            // setIndexTokenPrice(indexPrice);
    })
}
function processDepth(depth){
  depth.asks = addTotalSums(depth.asks.map((each_el) => {
  
    return [Number(each_el[0]), Number(each_el[1])]
  })).reverse().map((each_el) => {
      return [Number(each_el[0]), Number(each_el[1]), parseFloat(Number(each_el[2]).toFixed(3))]
  });


  let totalSum = getMaxTotalSum(depth.asks);
  depth.asks = addDepths(depth.asks, totalSum);


  // console.log(all_orders.asks)
  depth.bids.reverse();
  depth.bids =  addTotalSums(depth.bids.map((each_el) => {
      return [Number(each_el[0]), Number(each_el[1])]
  })).map((each_el) => {
      return [Number(each_el[0]), Number(each_el[1]), parseFloat(Number(each_el[2]).toFixed(3))]
  });
  // console.log(all_orders)
  totalSum = getMaxTotalSum(depth.bids);
  depth.bids = addDepths(depth.bids, totalSum);
  // console.log(depth);
  
  return depth;
}

function checkLimit(limits, indexPrice, openPos){
  const data = []
  limits.forEach(element => {
    // console.log(limits)
    if (element.type_of_pos == 'LONG' && parseFloat(element.open_price) >= parseFloat(indexPrice)){

      openPos(element)
    } else if  ((element.type_of_pos) == 'SHORT' && parseFloat(element.open_price) <= parseFloat(indexPrice)) {
      openPos(element)
    } else {
      data.push(element)
    }
  
  });

  limits = limits.filter(item => !data.includes(item));
  // console.log(limits)
  return limits;
}
function Home() {
  const [socketUrl, setSocketUrl] = useState("wss://fstream.binance.com:443/stream?streams=");
  const [indexPrice, setIndexPrice] = useState('--');
  const [markPrice, setMarkPrice] = useState('--');
  const [flagStateLong, setFlagStateLong] = useState(true);
  const [depth, setDepth] = useState({asks: [], bids: []});
  const [kline, setKline] = useState([]);
  let [lastCandlestick, setLastCandlestick] = useState([]);
  const [myPos, setMyPos] = useState([]);
  const ticker = 'btcusdt';
  const [balance, setBalance] = useState(0);
  const [limitOrders, setLimitOrders] = useState([]);
  const [worked, setWorked] = useState([]);
  const [stepVal, setStepVal] = useState("10");
  const [highPrice, setHighPrice] = useState('--');
  const [lowPrice, setLowPrice] = useState('--');
  const [isLoading, setIsLoading] = useState(true);
  const [posTpSl, setPosTpSl] = useState([]);
  const [deleteChart, setDeleteChart] = useState(false);
  const [tickerUrl, setTickerUrl] = useState("btcusdt@kline_1h")
  // const [deleteChart, setDeleteChart] = useState(false);
  const {user}= useContext(AuthContext)
  // const [limitOrders, setMyLimitOrders] = useState([]);
  // const [balance, setLowPrice] = useState('--');

// useWebSocket(WS_URL + "btcusdt@depth", {
//  onOpen: () => {
//     console.log('WebSocket connection established.');
//    }
//  }); 
useWebSocket(socketUrl + "!markPrice@arr@1s/btcusdt@ticker/btcusdt@depth@500ms", {
    onOpen: () => {
      
       console.log('WebSocket connection established.');
      },
      onClose: () => console.log('WebSocket connection closed.'),
      shouldReconnect: (closeEvent) => true,
      onMessage: (event) =>  processMessages(event),
    
    });


    useWebSocket(socketUrl + tickerUrl, {
      onOpen: () => {
        
         console.log('WebSocket connection klines established.');
        },
        onClose: () => console.log('WebSocket connection klines closed.'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) =>  processMessages(event),
      
      });




    const { sendMessage} = useWebSocket("ws://localhost:8000" + "/ws/gays/", {
      onOpen: () => {
        
         
         sendMessage(user.user_id);
         console.log('WebSocket connection 2 established.');
        },
        onClose: () => console.log('WebSocket connection 2 closed.'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) =>  processMessages1(event),
      
      });

      

  function processMessages1(event){
    const response = JSON.parse(event.data)['data'];
    setLimitOrders(response)
    updatePos()
    getBalance()
    updateTp(response)
  }


    const processMessages = (event) => {
      const response = JSON.parse(event.data)['data'];
      if (response.e === "24hrTicker") {
      
      const data = parseFloat(response.c).toFixed(2);
      if (data > indexPrice){
          setFlagStateLong(true);
      } else if (data < indexPrice) {
        setFlagStateLong(false);
      }
                
       setIndexPrice(data)
      }
       else if (response && response[0] !== undefined && response[0].e === 'markPriceUpdate') {
        //  console.log(response);
        const mark_price = response.find(item => item.s === "BTCUSDT")
        // console.log(mark_price)
        setMarkPrice(parseFloat(mark_price.p).toFixed(2))
       } else if (response.e === "depthUpdate") {
        setDepth(processDepth(
          {asks: (groupByTicketSizeAsks(response.a.sort((a, b) => a[0] - b[0]).map(data => 
          [parseFloat(data[0]), parseFloat(data[1])]), 1, stepVal)),
        bids: (groupByTicketSizeBids(response.b.sort((a, b) => a[0] - b[0]).map(data => 
          [parseFloat(data[0]), parseFloat(data[1])]), 1, stepVal))}))
          // setDepth();
       }  else if (response.e === "kline") {
        const candlestick = response.k;
        const new_data = {
          time: (candlestick.t) / 1000,
          open: parseFloat(candlestick.o),
          high: parseFloat(candlestick.h),
          low: parseFloat(candlestick.l),
          close: parseFloat(candlestick.c)
        }
        const high_price = parseFloat(new_data.high).toFixed(2);
        const low_price = parseFloat(new_data.low).toFixed(2);
        setHighPrice(high_price);
        setLowPrice(low_price);
        // console.log(new_data)
        if (kline.length> 0){
          setLastCandlestick(new_data);
          
        }

        // console.log(new_data);
      
        // setKline([...kline, new_data]);
       
        //  setKline([...kline, new_data]);
        //  console.log(kline);
          //  processKline(response.k);
              // console.log(response.k)
              // 
              // kline.update({
              //  x: candlestick.t,
              //  y: [candlestick.h, candlestick.o, candlestick.c, candlestick.l]
              // })
          // setDepth();
       }
      
      // console.log(response['data'])
    };

    function updateChart(time){
      console.log(time)
      setIsLoading(true)
      setTickerUrl("btcusdt@kline_" + time)
      // setDeleteChart(true)
      getKlines(setKline, setIsLoading, time)

    }

    useEffect(() => {
        getBalance()
        getKlines(setKline, setIsLoading, "1h")
        updatePos()
        closeMarketPos()
        updateLimits()
          // getIndexPrice(setTokenIndexPrice)
      // }, 100);
      
      // getTickerData(setTickerData)
    // let interval24 = setInterval(() => {
    //   (checkLimit(limitOrders, indexPrice, openPos))
    //  }, 1000);

      // getFundingRate(setFundingRate)
      // let interval1 = setInterval(() => {
      //     getFundingRate(setFundingRate)
      // }, 1000);
      

      return () => {
          // clearInterval(interval);
          // clearInterval(interval24);
          // clearInterval(interval1);
      };
  }, []);

    // const processMessages1 = (event) => {
    //   const response = JSON.parse(event.data)['data'];
    //   setIndexPrice(parseFloat(response.p).toFixed(2))
    //   // setMarkPrice(parseFloat(response.p).toFixed(2))
    //   // console.log(response['data'])
    // };

  function openPos(newPos) {
    if (indexPrice != "--") {
      const payload = {
        type_of_pos: newPos.type_of_pos,
        leverage: newPos.leverage,
        quantity_usdt: newPos.quantity_usdt,
        ticker: "BTCUSDT",
      }
    // console.log('pushed', payload)
      jwtInterceptor
      .post(BACKEND_URL + "/exchange/open_order/", payload).then((response) => {
        updatePos()
        getBalance()
      }
          
      )
      
    }
      
  }



  
  function openLimitPos(newPos) {
    const payload = {
      type_of_pos: newPos.type_of_pos,
      leverage: newPos.leverage,
      quantity_usdt: newPos.quantity_usdt,
      price: newPos.limit_price,
      ticker: "BTCUSDT",
    }
    // console.log(payload)

    jwtInterceptor
    .post(BACKEND_URL + "/exchange/open_limit_order/", payload).then((response) => {
      updateLimits()
      updatePos()
      getBalance()
    })
    
}

function setTpSl(data){

  if (data && data.tp) {
    
    const payload = {
      position: Number(data.id),
      position_size: Number(data.size),
      price: Number(data.tp)
  }

  jwtInterceptor
  .post(
  BACKEND_URL + "/exchange/create_tp/", payload).then((response) => {
    updateLimits()
  })
}  
if (data && data.sl) {
  const payload = {
    position: Number(data.id),
    position_size: Number(data.size),
    price: Number(data.sl)
}

jwtInterceptor
.post(
BACKEND_URL + "/exchange/create_sl/", payload).then((response) => {
  updateLimits()
})
}
}
function closeLimitPos(position){
 
  if (position){
    const payload = {
      position: Number(position.id),
      position_size: Number(position.size),
      price: Number(position.price)
  }
    console.log(payload)
  
  jwtInterceptor
.post(
BACKEND_URL + "/exchange/close_limit_position/",
  payload

).then(
(response) => {
  updatePos()
  getBalance()
  updateLimits()
  // setBalance(response.data['balance'])
  // console.log("b", response)
})
}
}


function updateTp(a){
  jwtInterceptor
    .get(BACKEND_URL + "/exchange/closing_limit_orders/")
      .then((response) => {
        // console.log(response.data)
        const b =  (response.data).map((item) => {
          return {
            created: item.created,
            limit_id: item.id,
            is_active: true,
            position_size: item.position_size,
            price: item.price,
            ticker: item.position.ticker,
            type_of_pos:  item.position.type_of_pos,
            type_of_order: item.type_of_order,
            positionId: item.position.id
          }
        })

        let tpSl = {}
        b.forEach((item) => {
          if (item.type_of_order === "TAKE-PROFIT"){
            tpSl[item.positionId] = { ...tpSl[item.positionId],
              tp: item.price
            }  
          } else if (item.type_of_order === "STOP-LOSS") {
            tpSl[item.positionId] = { ...tpSl[item.positionId],
              sl: item.price

            }  
          }
          
        })
        console.log(tpSl);

        setPosTpSl(tpSl);
        const limits = [...new Set([...a, ...b])];
        

        setLimitOrders(limits);
      });
}


function updateLimits(){
  jwtInterceptor
  .get(BACKEND_URL + "/exchange/limit_orders/")
    .then((response) => {
      
      // setLimitOrders(response.data);
      // setMyPos(response.data);
      let limits = (response.data);
      setLimitOrders(limits);
      // console.log(limits)
      updateTp(limits)
      
    });
}


  function updatePos(){
    jwtInterceptor
    .get(BACKEND_URL + "/exchange/orders/")
      .then((response) => {
        // console.log(response.data);
        setMyPos(response.data);
        // console.log(myPos);
      });
  }


  function cancelLimitOrder(order){
    if(order.limit_id){
        console.log("a", order)
        jwtInterceptor
        .post(BACKEND_URL + "/exchange/cancel_closing_limit_orders/", {id: order.limit_id})
          .then((response) => {
            // // console.log(response.data);
            // setMyPos(response.data);
            // console.log(response);
            updateLimits()
          });
    } else {
      jwtInterceptor
      .post(BACKEND_URL + "/exchange/cancel_limit_order/", {id: order.id})
        .then((response) => {
          // // console.log(response.data);
          // setMyPos(response.data);
          // console.log(response);
          updateLimits()
          getBalance()
        });
    }
   
  }


  function closeMarketPos(position){
    console.log(position)
    if (position){
      const payload = {
        id: position.positionId,
        ticker: position.ticker,
        position_size: position.size
    }
    
    jwtInterceptor
  .post(
  BACKEND_URL + "/exchange/close_market_position/",
    payload
  
  ).then(
  (response) => {
    updatePos()
    getBalance()
    updateLimits()
    // setBalance(response.data['balance'])
    // console.log("b", response)
  })


    }
    
  }

  const getBalance = () => {
    // invoke the logout API call, for our NestJS API no logout API
   jwtInterceptor
    .get(
      BACKEND_URL + "/api/balance/",
        
      
    ).then(
      (response) => {
        setBalance(response.data['balance'])
       console.log("b", response)
      }
    )
   
  };


  return (
   
    <div className="wrap">
        <Header tokenPrice={indexPrice} balance={balance}></Header>
        <div className="main">
            <Sidebar balance={balance} posTpSl={posTpSl} setTpSl={setTpSl} closeLimitPos={closeLimitPos} cancelLimitOrder={cancelLimitOrder} limitOrders={limitOrders} closeMarketPos={closeMarketPos} active_pos={myPos} tokenPrice={markPrice}></Sidebar>
            <div className="main_row">
            
                <TokenHeader></TokenHeader>
                <div className="token_wrap sidebar_active">
                    <TokenChart deleteChart={deleteChart} updateChart={updateChart} isLoading={isLoading} highPrice={highPrice} lowPrice={lowPrice}
                    newData={lastCandlestick} kline={kline}></TokenChart>
                    <TokenOrders stepVal={stepVal} setStepVal={setStepVal} depth={depth} flagStateLong={flagStateLong}tokenMarkPrice={markPrice}  tokenIndexPrice={indexPrice} ></TokenOrders>
                    <TokenBuy openLimitPos={openLimitPos} indexPrice={indexPrice} balance={balance} openPos={openPos}></TokenBuy>
                </div>
            </div>
      
        </div>
        {/* <Positions deletePos={deletePos} tokenPrice={indexPrice} pos={myPos}></Positions> */}
    </div>
  );

}
export default Home;
