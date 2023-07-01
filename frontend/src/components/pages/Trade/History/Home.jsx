import React, { useState} from 'react';
import ClosedOrders from "./ClosedOrders";
import ActiveOrders from './ActiveOrders';


function Home({tradeHistoryShow,handleTradeHistoryClose, pos, tokenPrice}){

    const [tradeHistoryActiveOrdersShow, setTradeHistoryActiveOrdersShow] = useState(false);
    const [tradeHistoryClosedShow, setTradeHistoryClosedShow] = useState(true);

    const handleTradeHistoryActiveOrdersShow = () => {
        setTradeHistoryActiveOrdersShow(true);
        setTradeHistoryClosedShow(false);
    }
    const handleTradeHistoryClosedShow = () => {
        setTradeHistoryActiveOrdersShow(false);
        setTradeHistoryClosedShow(true);
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
                    <div onClick={handleTradeHistoryClosedShow} className={tradeHistoryClosedShow ? "sidebar_menu_main_history_menu_btn sidebar_menu_main_history_menu_btn_active" : "sidebar_menu_main_history_menu_btn"}>
                        Закрытые
                    </div>
                </div>

                <ClosedOrders tradeHistoryClosedShow={tradeHistoryClosedShow}></ClosedOrders>

                <ActiveOrders tokenPrice={tokenPrice} pos={pos} tradeHistoryActiveOrdersShow={tradeHistoryActiveOrdersShow}></ActiveOrders>

            </div>
        </div>
    );
}
export default Home