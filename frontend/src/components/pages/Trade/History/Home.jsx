import React, { useState} from 'react';
import ClosedOrders from "./ClosedOrders";
import ActiveOrders from './ActiveOrders';
import Limit from '../Room/TokenBuy/Limit';
import ActiveOrdersV2 from './ActiveOrdersV2';
import LimitOrder from './LimitOrder';


function Home({balance, posTpSl, setTpSl, closeLimitPos, cancelLimitOrder, limitOrders, closeMarketPos, tradeHistoryShow,handleTradeHistoryClose, pos, tokenPrice}){

    const [tradeHistoryActiveOrdersShow, setTradeHistoryActiveOrdersShow] = useState(true);
    const [tradeHistoryClosedShow, setTradeHistoryClosedShow] = useState(false);
    const [tradeLimitOrderShow, setTradeLimitOrderShow] = useState(false);

    const handleTradeHistoryActiveOrdersShow = () => {
        setTradeHistoryActiveOrdersShow(true);
        setTradeHistoryClosedShow(false);
        setTradeLimitOrderShow(false);
    }
    const handleTradeHistoryClosedShow = () => {
        setTradeHistoryActiveOrdersShow(false);
        setTradeHistoryClosedShow(true);
        setTradeLimitOrderShow(false);
    }
    const handleTradeLimitOrderShow = () => {
        setTradeHistoryActiveOrdersShow(false);
        setTradeHistoryClosedShow(false);
        setTradeLimitOrderShow(true);
    }
    return (
        <div className={tradeHistoryShow ? "sidebar_menu_main " : "sidebar_menu_main hidden"} >

            <div className="sidebar_menu_main_history">
                <div  className="sidebar_menu_main_history_head">
                    <span>История торговли</span>
                    <img className='sidebar_menu_main_history_head_btn' onClick={handleTradeHistoryClose} src="img/close.svg" alt=""/>
                </div>
                <div className="sidebar_menu_main_history_menu">
                    <div onClick={handleTradeHistoryActiveOrdersShow} className={tradeHistoryActiveOrdersShow ? "sidebar_menu_main_history_menu_btn sidebar_menu_main_history_menu_btn_active" : "sidebar_menu_main_history_menu_btn"} >
                        Открытые
                    </div>
                    <div onClick={handleTradeLimitOrderShow} className={tradeLimitOrderShow ? "sidebar_menu_main_history_menu_btn sidebar_menu_main_history_menu_btn_active" : "sidebar_menu_main_history_menu_btn"}>
                        Лимитные
                    </div>
                    {/* <div onClick={handleTradeHistoryClosedShow} className={tradeHistoryClosedShow ? "sidebar_menu_main_history_menu_btn sidebar_menu_main_history_menu_btn_active" : "sidebar_menu_main_history_menu_btn"}>
                        Закрытые
                    </div> */}
                </div>

                <ClosedOrders tradeHistoryClosedShow={tradeHistoryClosedShow}></ClosedOrders>
                <LimitOrder cancelLimitOrder={cancelLimitOrder} limitOrders={limitOrders} tradeHistoryLimitOrderShow={tradeLimitOrderShow}></LimitOrder>
                <ActiveOrders  balance={balance}  posTpSl={posTpSl} setTpSl={setTpSl} closeLimitPos={closeLimitPos} closeMarketPos={closeMarketPos}tokenPrice={tokenPrice} pos={pos} tradeHistoryActiveOrdersShow={tradeHistoryActiveOrdersShow}></ActiveOrders>
                {/* <ActiveOrdersV2  tradeHistoryActiveOrdersShow={tradeLimitOrderShow}></ActiveOrdersV2> */}
            </div>
        </div>
    );
}
export default Home