import React, { useState} from 'react';
function TokenHeader(){
    const [tokenActive, setTokenActive] = useState(1); 
    return (
        <div className="token_header">
            <div className="token_header_menu">
                <div className="token_header_menu_btn_w">
                    <img className="token_header_menu_btn" src="img/menu.svg" alt=""/>
                </div>
            </div>
           <div className="token_header_menu_items">
                <div onClick={()=>{setTokenActive(1)}} className={tokenActive == 1 ? "token_header_menu_item token_header_menu_item_active" : "token_header_menu_item"}>
                    <img className="token_header_menu_item_logo" src="img/coins/btc.svg" alt="" />
                    <div className="token_header_menu_item_name">
                        <span>Bitcoin</span>
                        <p>BTC/USDT</p>
                    </div>
                    <div className="token_header_menu_item_close">
                        <img src="img/close.svg" alt="" />
                    </div>
                </div>
                <div onClick={()=>{setTokenActive(2)}} className={tokenActive == 2 ? "token_header_menu_item token_header_menu_item_active" : "token_header_menu_item"}>
                    <img className="token_header_menu_item_logo"  src="img/coins/eth.svg" alt="" />
                    <div className="token_header_menu_item_name">
                        <span>Ethereum</span>
                        <p>ETH/USDT</p>
                    </div>
                    <div className="token_header_menu_item_close">
                        <img src="img/close.svg" alt="" />
                    </div>
                </div>
                <div onClick={()=>{setTokenActive(3)}} className={tokenActive == 3 ? "token_header_menu_item token_header_menu_item_active" : "token_header_menu_item"}>
                    <img className="token_header_menu_item_logo"  src="img/coins/doge.svg" alt="" />
                    <div className="token_header_menu_item_name">
                        <span>Dogecoin</span>
                        <p>DOGE/USDT</p>
                    </div>
                    <div className="token_header_menu_item_close">
                        <img src="img/close.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="token_header_menu_items_add">
                <img src="img/plus.svg" alt="" />
            </div>
    </div>
    );
}
export default TokenHeader