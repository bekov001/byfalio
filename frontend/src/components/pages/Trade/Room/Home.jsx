import React, {useState, useEffect} from 'react';
import Header from '../../../layouts/Trade/Header/Header';
import Sidebar from '../../../layouts/Trade/Sidebar';
import TokenHeader from './TokenHeader';
import TokenChart from './TokenChart/Main';
import TokenOrders from './TokenOrders';
import TokenBuy from './TokenBuy/Main';
import useWebSocket from 'react-use-websocket';
import { groupByTicketSize, addTotalSums, addDepths, getMaxTotalSum, BACKEND_URL} from '../../../../helpers';
import axios from 'axios';
import Positions from './Positions';
import jwtInterceptor from '../../../../shared/jwtInterceptor';
// import {  jwtInterceptor } from '../../../shared/jwtInterceptor'

function processKline(kline){
  console.log(kline)
}

function getKlines(setKlines){
  const apiUrl = 'http://127.0.0.1:8000/exchange/history/btcusdt/1h/';
    axios.get(apiUrl).then((resp) => {
      setKlines(resp.data.data)
            // let markPrice = parseFloat(resp.data.markPrice).toFixed(2);
            // // console.log(price)
            // setMarkTokenPrice(markPrice);
            
            // let indexPrice = parseFloat(resp.data.indexPrice).toFixed(2);
           console.log(resp.data.data)
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
    console.log(limits)
    if (element.type_of_pos == 'LONG' && parseFloat(element.open_price) >= parseFloat(indexPrice)){

      openPos(element)
    } else if  ((element.type_of_pos) == 'SHORT' && parseFloat(element.open_price) <= parseFloat(indexPrice)) {
      openPos(element)
    } else {
      data.push(element)
    }
  
  });

  limits = limits.filter(item => !data.includes(item));
  console.log(limits)
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
  const [balance, setBalance] = useState(100);
  const [limitOrders, setLimitOrders] = useState([]);
  const [worked, setWorked] = useState([]);
  
// useWebSocket(WS_URL + "btcusdt@depth", {
//  onOpen: () => {
//     console.log('WebSocket connection established.');
//    }
//  }); 
useWebSocket(socketUrl + "btcusdt@markPrice@1s/btcusdt@ticker/btcusdt@depth@500ms/btcusdt@kline_1h", {
    onOpen: () => {
      
       console.log('WebSocket connection established.');
      },
      onClose: () => console.log('WebSocket connection closed.'),
      shouldReconnect: (closeEvent) => true,
      onMessage: (event) =>  processMessages(event),
    
    });


    const processMessages = (event) => {
      const response = JSON.parse(event.data)['data'];
      if (response.e === "24hrTicker") {
      // console.log(response);
      const data = parseFloat(response.c).toFixed(2);
      if (data > indexPrice){
          setFlagStateLong(true);
      } else if (data < indexPrice) {
        setFlagStateLong(false);
      }
       setIndexPrice(data)
      }
       else if (response.e === 'markPriceUpdate') {
        setMarkPrice(parseFloat(response.p).toFixed(2))
       } else if (response.e === "depthUpdate") {
        setDepth(processDepth(
          {asks: (groupByTicketSize(response.a.sort((a, b) => a[0] - b[0]).map(data => 
          [parseFloat(data[0]), parseFloat(data[1])]), 1)),
        bids: (groupByTicketSize(response.b.sort((a, b) => a[0] - b[0]).map(data => 
          [parseFloat(data[0]), parseFloat(data[1])]), 1))}))
          // setDepth();
       }  else if (response.e === "kline") {
        const candlestick = response.k;
        const new_data = {
          time: candlestick.t / 1000,
          open: candlestick.o,
          high: candlestick.h,
          low: candlestick.l,
          close: candlestick.c
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

    // useEffect
    useEffect(() => {
      // let interval = setInterval(() => {
        getKlines(setKline)
        updatePos()
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
        open_price: indexPrice,
        ticker: "BTCUSDT",
      }
    console.log('pushed', payload)
      jwtInterceptor
      .post(BACKEND_URL + "/exchange/open_order/", payload).then((response) =>
          updatePos()
      )
      
    }
      
  }

  
  function openLimitPos(newPos) {
    const payload = {
      type_of_pos: newPos.type_of_pos,
      leverage: newPos.leverage,
      quantity_usdt: newPos.quantity_usdt,
      open_price: newPos.limit_price,
      ticker: "BTCUSDT",
    }
    console.log(limitOrders)

    setLimitOrders([...limitOrders, payload])
    // co
    // jwtInterceptor
    // .post("http://localhost:8000/exchange/open_order/", payload)
    // updatePos()
}

  function updatePos(){
    jwtInterceptor
    .get(BACKEND_URL + "/exchange/orders/")
      .then((response) => {
        // console.log(response.data);
        setMyPos(response.data);
        console.log(myPos);
      });
  }


  function deletePos(id){
    jwtInterceptor
    .post(BACKEND_URL + "/exchange/order/" + id)
      .then((response) => {
        // // console.log(response.data);
        // setMyPos(response.data);
        console.log(response);
        updatePos()
      });
  }



  return (
   
    <div className="wrap">
        <Header tokenPrice={indexPrice}></Header>
        <div className="main">
            <Sidebar></Sidebar>
            <div className="main_row">
            
                <TokenHeader></TokenHeader>
                <div className="token_wrap sidebar_active">
                    <TokenChart newData={lastCandlestick} kline={kline}></TokenChart>
                    <TokenOrders depth={depth} flagStateLong={flagStateLong}tokenMarkPrice={markPrice}  tokenIndexPrice={indexPrice} ></TokenOrders>
                    <TokenBuy openLimitPos={openLimitPos} indexPrice={indexPrice} balance={balance} openPos={openPos} setLimitOrders={setLimitOrders}></TokenBuy>
                </div>
            </div>
      
        </div>
        <Positions deletePos={deletePos} tokenPrice={indexPrice} pos={myPos}></Positions>
    </div>
  );

}
export default Home;
