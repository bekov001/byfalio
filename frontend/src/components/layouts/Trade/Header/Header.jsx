import TokenSearch from "./TokenSearch";
import React, {useState} from 'react';
import NotificationList from "./Notification/NotificationList";
import { Link } from "react-router-dom";
import useWebSocket from 'react-use-websocket';


function Header(props){
    const [tokenSearch, setTokenSearch] = useState(false);
    const [notificationShow, setNotificationShow] = useState(false);
    const {balance} = props;

    const [socketUrl, setSocketUrl] = useState("wss://fstream.binance.com:443/stream?streams=");
    const [tokenPrice, setTokenPrice] = useState('--');
    const [priceChange, setPriceChange] = useState('--');
    const [highPrice, setHighPrice] = useState('--');
    const [lowPrice, setLowPrice] = useState('--');


    useWebSocket(socketUrl + "btcusdt@ticker/", {
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
                const last_price = parseFloat(response.c).toFixed(2);
                const price_change = parseFloat(response.P).toFixed(2);
                const high_price = parseFloat(response.h).toFixed(2);
                const low_price = parseFloat(response.l).toFixed(2);
                setTokenPrice(last_price);
                setPriceChange(price_change);
                setHighPrice(high_price);
                setLowPrice(low_price);
            }
          };
      

    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="img/logo.svg" alt=""/></Link>
            </div>
            <div className="header_coin">
                <div className="header_coin_change_w">
                    <div className={tokenSearch==true ? "header_coin_change header_coin_change_active" : "header_coin_change"} onClick={()=>setTokenSearch(!tokenSearch)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 14.99L15.49 20.01" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 14.99H20.5" stroke="white" stroke-width="1.5" strokeiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 9.00999L8.51 3.98999" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5 9.01001H3.5" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    {tokenSearch ? <TokenSearch tokenSearch={tokenSearch} setTokenSearch={setTokenSearch}/> : ""}
                 </div>
                <div className="header_coin_name">
                    <span>BTC / USDT</span>
                    <p>Бессрочный USDT</p>
                </div>
                <div className="header_coin_price">
                    <span>{tokenPrice ?  tokenPrice : "--"}</span>
                    <p>≈{tokenPrice} USDT</p>
                </div>
                <div className="header_coin_price_row">
                    <div className="header_coin_price_item">
                        <p>Изм. за 24 ч</p>
                        <span className={parseFloat(priceChange) > 0 ? "color_green" : "color_red"}>{parseFloat(priceChange) > 0 ? "+" : ""}{priceChange}%</span>
                    </div>
                    <div className="header_coin_price_item">
                        <p>Макс. за 24 ч</p>
                        <span>{highPrice}</span>
                    </div>
                    <div className="header_coin_price_item">
                        <p>Мин. за 24 ч</p>
                        <span>{lowPrice}</span>
                    </div>
                </div>
            </div>
            <div className="btn_add_balance">
                Пополнить баланс
            </div>
            <div className="overview_active">
                <div className="overview_active_balance">
                    <div className="overview_active_balance_usdt">
                    {balance ? balance.toFixed(2) : 0} USDT
                    </div>
                    <div className="overview_active_balance_btc">
                    ≈{balance ? (balance / tokenPrice).toFixed(6): 0 } BTC
                    </div>
                </div>
            </div>
            <div className="header_btns">
                <div className="hbp header_btn_profile">
                    <img className="hbp_btn" src="img/profile.svg" alt=""/>
                </div>
                <div className="hbp header_btn_notice" onClick={()=>setNotificationShow(!notificationShow)}>
                    <svg className={(notificationShow) ? "hbp_btn hbp_btn_active" : "hbp_btn"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_216_731)">
                        <path d="M17.7701 17.6701C18.9001 17.6701 19.8201 16.7701 19.8301 15.6601C19.8301 15.1001 19.6001 14.5601 19.1901 14.1601L18.6401 13.62C18.1201 13.11 17.8301 12.43 17.8301 11.71V9.00005C17.8301 8.18005 17.7001 7.36006 17.3701 6.60006C16.3901 4.34006 14.1701 2.98005 11.8201 2.99005C8.51008 2.99005 5.83008 5.62004 5.83008 8.86004V11.7001C5.83008 12.4201 5.54008 13.1 5.02008 13.61L4.47008 14.15C4.06008 14.55 3.83008 15.09 3.83008 15.65C3.83008 16.76 4.75008 17.6601 5.89008 17.6601H17.7801L17.7701 17.6701Z" stroke="#5E6367" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.2598 21H13.3898" stroke="#5E6367" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_216_731">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className="notice_new">
                        2
                    </div>
                    {(notificationShow) ? <div className="header_btn_notice_border"></div> : ""}
                </div>
                <div className="hbp header_btn_lang">
                    <img className="hbp_btn" src="byfalio/img/lang.svg" alt=""/>
                </div>
                <div className="hbp header_btn_change_theme">
                    <img className="hbp_btn" src="byfalio/img/change_theme_sun.svg" alt=""/>
                </div>
            </div>

            <NotificationList notificationShow={notificationShow} setNotificationShow={setNotificationShow}></NotificationList>

        </header>
    );
}
export default Header