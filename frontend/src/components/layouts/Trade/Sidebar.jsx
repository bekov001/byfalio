import News from "../../pages/Trade/News/News";
import TradeHistory from "../../pages/Trade/History/Home";
import LeadersTable from "../../pages/Trade/LeadersTable/LeadersTable";

import React, { useState} from 'react';
import { Link } from "react-router-dom";
function Sidebar({cancelLimitOrder, closeMarketPos, active_pos, tokenPrice, limitOrders}){

    const [menuLinkId, setMenuLinkId] = useState(4); 
    const hideAll = () => {
        handleTradeHistoryClose();
        handleNewsClose();
        handleLeadersClose();
    } 

    const [tradeHistoryShow, setTradeHistoryShow] = useState(false);

    const handleTradeHistoryShow = (e) => {
        hideAll();
         e.preventDefault();
        setMenuLinkId(2);
        setTradeHistoryShow(true);
    }

    const handleTradeHistoryClose = () => {
        setTradeHistoryShow(false);
        setMenuLinkId(4);
    }

    const [newsShow, setNewsShow] = useState(false);

    const handleNewsShow = (e) => {
     hideAll();
        e.preventDefault();
         setMenuLinkId(3);
        setNewsShow(true);
    }

    const handleNewsClose = () => {
        setNewsShow(false);
        setMenuLinkId(4);
    }

    const handleProfile= (e) => {
    //     hideAll();
    //     e.preventDefault();
    //  setMenuLinkId(1);
    }


    const handleTradeRoomShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(4);
    }

    const [leadersShow, setLeadersShow] = useState(false);

    const handleLeadersShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(5);
        setLeadersShow(true);
    }

    const handleLeadersClose = () => {
        setLeadersShow(false);
        setMenuLinkId(4);
    }
    return (
        <div className={menuLinkId!=4 ? "sidebar_menu sidebar_menu_active" : "sidebar_menu"} >
        <div className="sidebar_menu_links">
        {menuLinkId!=4 ? <div className='trade_modal_filter' ></div> : ""}   
            <div className="sidebar_menu_link tables_hidden">
                    <Link to='/profile' onClick={handleProfile}>
                    <img src={menuLinkId==1 ? "img/sidebar/link1_active.svg" : "img/sidebar/link1.svg"} alt="" />
                    <span>Профиль</span>
                    </Link>
            </div>
            <div className={menuLinkId==2 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"}>
                <div className="border_active"></div>
                <a href="" onClick={handleTradeHistoryShow}>
                    <img src={menuLinkId==2 ? "img/sidebar/link2_active.svg" : "img/sidebar/link2.svg"} alt="" />
                    <span>История <br/> торговли</span>
                </a>
            </div>
            <div className={menuLinkId==3 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"} >
                <div className="border_active"></div>
                <a href="" onClick={handleNewsShow} >
                    <img src={menuLinkId==3 ? "img/sidebar/link3_active.svg" : "img/sidebar/link3.svg"} alt="" />
                    <span>Новости <br/> рынка</span>
                </a>
            </div>
            <div className={menuLinkId==4 ? "sidebar_menu_link menu_link_active trade_room_link" : "sidebar_menu_link trade_room_link"}>
            <div className="border_active"></div>
                <a onClick={handleTradeRoomShow}  href="">
                <Link to="/trade">
                    <img src={menuLinkId==4 ? "img/sidebar/link4_active.svg" : "img/sidebar/link4.svg"} alt="" />
                    <span>Trade room</span>
                    </Link>
                </a>
            </div>
            <div className={menuLinkId==5 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"} >
            <div className="border_active"></div>
                <a onClick={handleLeadersShow} href="">
                    <img src={menuLinkId==5 ? "img/sidebar/link5_active.svg" : "img/sidebar/link5.svg"} alt="" />
                    <span>Таблица <br/> лидеров</span>
                </a>
            </div>
            <div className="sidebar_menu_link">
                <a href="">
                    <img src={menuLinkId==6 ? "img/sidebar/link6_active.svg" : "img/sidebar/link6.svg"} alt="" />
                    <span>Статистика</span>
                </a>
            </div>
        </div>
            <TradeHistory cancelLimitOrder={cancelLimitOrder} limitOrders={limitOrders} closeMarketPos={closeMarketPos} tokenPrice={tokenPrice} pos={active_pos} tradeHistoryShow={tradeHistoryShow} handleTradeHistoryClose={handleTradeHistoryClose}></TradeHistory>
            <News newsShow={newsShow} handleNewsClose={handleNewsClose}></News>
            <LeadersTable leadersShow={leadersShow} handleLeadersClose={handleLeadersClose} ></LeadersTable>
    </div>
    );
}
export default Sidebar