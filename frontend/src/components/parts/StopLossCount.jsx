import React,{useState} from 'react';

export default function StopLossCount({classN, changeValue}) {
    const [fillProcent, setFillProcent] = useState(4);
    const data = [-25, -50, -75, -100]

    function setData(n){
        setFillProcent(n)
        changeValue(data[n - 1])
    }
    return (

      <div className={`token_buy_price_option ${classN}`}>
          <div onClick={()=>{setData(1)}}  className={fillProcent == 1 ? "token_buy_price_option_item token_buy_price_option_item_active" : "token_buy_price_option_item"} >
              -25%
          </div>
          <div onClick={()=>{setData(2)}}  className={fillProcent == 2 ? "token_buy_price_option_item token_buy_price_option_item_active" : "token_buy_price_option_item"} >
              -50%
          </div>
          <div onClick={()=>{setData(3)}}  className={fillProcent == 3 ? "token_buy_price_option_item token_buy_price_option_item_active" : "token_buy_price_option_item"} >
              -75%
          </div>
          <div onClick={()=>{setData(4)}}  className={fillProcent == 4 ? "token_buy_price_option_item token_buy_price_option_item_active" : "token_buy_price_option_item"} >
              -100%
          </div>
      </div>
    );
}
