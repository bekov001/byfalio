import React,{useState} from 'react';
function TokenOrders(props){
    const [linkActive, setLinkActive] = useState(1);
    const [viewType, setViewType] = useState(1);
    const [selectStepShow, setSelectStepShow] = useState(false);
    const handleSelectStepToggle = () => setSelectStepShow(!selectStepShow);
    const [selectStepVal, setSelectStepVal] = useState("0,001");
    const {tokenMarkPrice, tokenIndexPrice, flagStateLong, depth} = props;
    return (
        <div className="token_orders">
        <div className="token_orders_title">
            <div className="token_orders_title_btns">
                <div onClick={()=>{setLinkActive(1)}} className={linkActive == 1 ? "token_orders_title_btn token_orders_title_btn_active" : "token_orders_title_btn"}>
                    Книга ордеров
                </div>
                <div onClick={()=>{setLinkActive(2)}} className={linkActive == 2 ? "token_orders_title_btn token_orders_title_btn_active" : "token_orders_title_btn"}>
                    Сделки
                </div>
            </div>
            <div className="token_orders_title_full">
                <img src="img/full.svg" alt=""/>
            </div>
        </div>
        <div className="token_orders_view_types">
            <div className="token_orders_view_types_wrap">
                <div onClick={()=>{setViewType(1)}} className={viewType == 1 ? "token_orders_view_type token_orders_view_type_active" : "token_orders_view_type"}>
                    <img src="img/view_type1.svg" alt=""/>
                </div>
                <div onClick={()=>{setViewType(2)}} className={viewType == 2 ? "token_orders_view_type token_orders_view_type_active" : "token_orders_view_type"}>
                    <img src="img/view_type2.svg" alt=""/>
                </div>
                <div onClick={()=>{setViewType(3)}} className={viewType == 3 ? "token_orders_view_type token_orders_view_type_active" : "token_orders_view_type"}>
                    <img src="img/view_type3.svg" alt=""/>
                </div>
                <div onClick={()=>{setViewType(4)}} className={viewType == 4 ? "token_orders_view_type token_orders_view_type_active" : "token_orders_view_type"}>
                    <img src="img/view_type4.svg" alt=""/>
                </div>
            </div>
        <div className="token_orders_view_count_w">
           <div onClick={handleSelectStepToggle} className="token_orders_view_count border_gradient">
                <span>{selectStepVal}</span>
                <img src="img/select2.svg" alt=""/>
            </div> 
            <div onClick={handleSelectStepToggle} className={selectStepShow ? "token_orders_view_count_list " : "token_orders_view_count_list hidden"}>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.1")}>
                    0.1
                </div>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.01")}>
                    0.01
                </div>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.001")} >
                    0.001
                </div>
            </div>
            </div>
        </div>
        <div className="token_orders_sell">
            <div className="token_orders_sell_title">
                <div className="token_orders_sell_title_price">
                    Цена(USDT)
                </div>
                <div className="token_orders_sell_title_quantity">
                    Размер(CTK)
                </div>
                <div className="token_orders_sell_title_total">
                    Сумма(CTK)
                </div>
            </div>
            <div className="token_orders_sell_main">
                {
                            depth.asks.map((order) =>
                            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 1) ' + (100 - order[3]) + '%, rgba(69,41,44, 1) 1%)'}} className="row" key={order[0]}>
                                <div className="token_orders_sell_price">
                                    {parseFloat(order[0]).toFixed(2)}
                                </ div>

                                <div className="token_orders_sell_quantity">
                                {parseFloat(order[1]).toFixed(3)}
                                </div>
                                <div className="token_orders_sell_total">
                        {order[2]}
                    </div>
                            </div>
                            )
                    
                        }
            
                    </div>
         </div>
        <div className="token_orders_price">
            <div className="token_orders_price_actual">
                
                {flagStateLong ? ( 
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <span class='buy_price'>{tokenIndexPrice}</span>
                        <img src="img/order_up.svg" alt=""/>
                    </div>
                    
      ) : (
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <span class='sell_price'>{tokenIndexPrice}</span>
        <img src="img/order_down.svg" alt=""/>
    </div>
      )}
                
            </div>
            <div className="token_orders_price_for_sell">
                <img src="img/order_flag.svg" alt=""/>
                <span>{tokenMarkPrice}</span>
            </div>
        </div>
        <div className="token_orders_buy_main">
        {
                            depth.bids.map((order) =>
                            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) ' + (100 - order[3]) + '%, rgba(30,63,50, 1) 1%)'}} className="row" key={order[0]}>
                                <div className="token_orders_buy_price">
                                    {parseFloat(order[0]).toFixed(2)}
                                </ div>

                                <div className="token_orders_buy_quantity">
                                {parseFloat(order[1]).toFixed(3)}
                                </div>
                                <div className="token_orders_buy_total">
                        {order[2]}
                    </div>
                            </div>
                            )
                    
                        }
            
            {/* <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 7%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 64%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 53%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 45%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 67%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 31%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 47%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 21%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 90%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div style={{background: 'linear-gradient(90deg, rgba(28,30,34, 0.01) 70%, rgba(30,63,50, 1) 1%)'}} className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div className="token_orders_buy_total">
                    7.815
                </div> */}
            {/* </div> */}
        </div>
    </div>
    );
}
export default TokenOrders