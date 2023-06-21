import React, {useState} from 'react';
import CloseAll from '../../../modals/Trade/History/CloseAll';
import Tpsl from '../../../modals/Trade/History/Tpsl';
import CloseWith from '../../../modals/Trade/History/CloseWith';
// import Pnl from 'C:\Users\Home\Desktop\papka\byfal\byfalio_exchange-master\src\components\modals\Trade\History\Pnl.jsx';
import Pnl from '../../../modals/Trade/History/Pnl';
function ActiveOrders({tradeHistoryActiveOrdersShow, pos, tokenPrice}){

    const [cancelAllShow, setCancelAllShow] = useState(false);
    const [tpslShow, setTpslShow] = useState(false);
    const [closeWithShow, setCloseWithShow] = useState(false);
    const [pnlShow, setPnlShow] = useState(false);
    if (!pos){
        pos = []
    }
    function getPnl(quantity_usdt, leverage, open_price, tokenPrice){
        return ((quantity_usdt * leverage / open_price) * ((tokenPrice - open_price))).toFixed(2)
    }

    function getROE(quantity_usdt, leverage, open_price, tokenPrice){
        return (getPnl(quantity_usdt, leverage, open_price, tokenPrice) / ((quantity_usdt / open_price) * tokenPrice)) * leverage
    }
    return (
        <div className={tradeHistoryActiveOrdersShow ? "sidebar_menu_main_history_active_order " : "sidebar_menu_main_history_active_order hidden"}>

        <div className="history_main_row_w overflow_full">
            <div className="history_main_row_w_blur"></div>
            {pos.map(position => position.is_active ? <div className="history_main_row" key={position.id}>
                <div className="history_main_row_column df">
                    <div>
                        <div className="history_main_row_name">
                            <span>BTCUSDT</span>
                            <div className={position.type_of_pos === "LONG"? "history_main_row_name_status bg_green" : "history_main_row_name_status bg_red"}>
                                {position.type_of_pos}
                            </div>
                        </div>
                        <div className="history_main_row_margin">
                            <span>Кросс {position.leverage}х</span>
                        </div>
                    </div>
                    <div className="active_order_pnl_wrap">
                        <div className="active_order_pnl_row" onClick={() => setPnlShow(true)}>
                            <span>Поделиться</span>
                            <img src="img/export.svg" alt=""/>
                        </div>
                        <div className={(getPnl((position.type_of_pos === "SHORT" ? -1 : 1) * position.quantity_usdt, position.leverage, position.open_price, tokenPrice) < 0 ? "active_order_pnl color_red" : "active_order_pnl color_green")}>
                        {/* {position.type_of_pos == 'LONG' && (((tokenPrice - position.open_price) / position.open_price) * position.leverage * position.quantity_usdt).toFixed(2)}
                            ({(((tokenPrice - position.open_price) / position.open_price)).toFixed(2)}%) */}
                            {position.type_of_pos === 'LONG' ? getPnl(position.quantity_usdt, position.leverage, position.open_price, tokenPrice) : getPnl(-1 * position.quantity_usdt, position.leverage, position.open_price, tokenPrice)}
                            ({position.type_of_pos === 'LONG' ? (getROE(position.quantity_usdt, position.leverage, position.open_price, tokenPrice)).toFixed(2) : (-1 * getROE(position.quantity_usdt, position.leverage, position.open_price, tokenPrice)).toFixed(2)}%)

                        
                        </div>
                    </div>
                </div>
                <div className="active_order_info">
                    <div className="active_order_info_column">
                        <span>Размер позиции</span>
                        <p>{(position.quantity_usdt * position.leverage / position.open_price).toFixed(2)}</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Цена входа</span>
                        <p>{position.open_price}</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Mark Price</span>
                        <p>{tokenPrice}</p>
                    </div>
                    <div className="active_order_info_column active_order_info_column_liquidation">
                        <span>Ориент. цена ликвидации</span>
                        <p>--</p>
                    </div>
                </div>
                <div className="active_order_btns">
                    <div onClick={() => setTpslShow(true)} className="active_order_btn active_order_tpsl">
                        Установить TP/SL
                    </div>
                    <div onClick={() => setCloseWithShow(true)}  className="active_order_btn active_order_close">
                        Закрыть с помощью
                    </div>
                </div>
            </div> : "")}
           
        </div>

    
            <div onClick={() => setCancelAllShow(true)} className="history_main_deep_btn btn_yellow">
                Закрыть все сделки
            </div>
    
        
        <CloseAll cancelAllShow={cancelAllShow} setCancelAllShow={setCancelAllShow}></CloseAll>
        <Tpsl tpslShow={tpslShow} setTpslShow={setTpslShow}></Tpsl>
        <CloseWith closeWithShow={closeWithShow} setCloseWithShow={setCloseWithShow}></CloseWith>
        <Pnl pnlShow={pnlShow} setPnlShow={setPnlShow}></Pnl>
        </div>
    );
}
export default ActiveOrders