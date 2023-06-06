import React, {useState} from 'react';
import CloseAll from '../../../modals/Trade/History/CloseAll';
import Tpsl from '../../../modals/Trade/History/Tpsl';
import CloseWith from '../../../modals/Trade/History/CloseWith';
// import Pnl from 'C:\Users\Home\Desktop\papka\byfal\byfalio_exchange-master\src\components\modals\Trade\History\Pnl.jsx';
import Pnl from '../../../modals/Trade/History/Pnl';
function ActiveOrders({tradeHistoryActiveOrdersShow}){

    const [cancelAllShow, setCancelAllShow] = useState(false);
    const [tpslShow, setTpslShow] = useState(false);
    const [closeWithShow, setCloseWithShow] = useState(false);
    const [pnlShow, setPnlShow] = useState(false);
    return (
        <div className={tradeHistoryActiveOrdersShow ? "sidebar_menu_main_history_active_order " : "sidebar_menu_main_history_active_order hidden"}>

        <div className="history_main_row_w overflow_full">
            <div className="history_main_row_w_blur"></div>
            <div className="history_main_row">
                <div className="history_main_row_column df">
                    <div>
                        <div className="history_main_row_name">
                            <span>XRPUSDT</span>
                            <div className="history_main_row_name_status bg_green">
                                Long
                            </div>
                        </div>
                        <div className="history_main_row_margin">
                            <span>Кросс 19.00х</span>
                        </div>
                    </div>
                    <div className="active_order_pnl_wrap">
                        <div className="active_order_pnl_row" onClick={() => setPnlShow(true)}>
                            <span>Поделиться</span>
                            <img src="img/export.svg" alt=""/>
                        </div>
                        <div className="active_order_pnl color_red">
                            -0.18(-0.36%)
                        </div>
                    </div>
                </div>
                <div className="active_order_info">
                    <div className="active_order_info_column">
                        <span>Размер позиции</span>
                        <p>1.861</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Цена входа</span>
                        <p>0.522</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Mark Price</span>
                        <p>0.5217</p>
                    </div>
                    <div className="active_order_info_column active_order_info_column_liquidation">
                        <span>Ориент. цена ликвидации</span>
                        <p>0.3663</p>
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
            </div>
            <div className="history_main_row">
                <div className="history_main_row_column df">
                    <div>
                        <div className="history_main_row_name">
                            <span>XRPUSDT</span>
                            <div className="history_main_row_name_status bg_green">
                                Long
                            </div>
                        </div>
                        <div className="history_main_row_margin">
                            <span>Кросс 19.00х</span>
                        </div>
                    </div>
                    <div className="active_order_pnl_wrap">
                    <div className="active_order_pnl_row" onClick={() => setPnlShow(true)}>
                            <span>Поделиться</span>
                            <img src="img/export.svg" alt=""/>
                        </div>
                        <div className="active_order_pnl color_green">
                            0.18(+0.36%)
                        </div>
                    </div>
                </div>
                <div className="active_order_info">
                    <div className="active_order_info_column">
                        <span>Размер позиции</span>
                        <p>1.861</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Цена входа</span>
                        <p>0.522</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Mark Price</span>
                        <p>0.5217</p>
                    </div>
                    <div className="active_order_info_column active_order_info_column_liquidation">
                        <span>Ориент. цена ликвидации</span>
                        <p>0.3663</p>
                    </div>
                </div>
                <div className="active_order_btns">
                    <div className="active_order_btn active_order_tpsl">
                        <span className='color_green'>0.09255</span>
                    </div>
                    <div className="active_order_btn active_order_close">
                        Закрыть с помощью
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_column df">
                    <div>
                        <div className="history_main_row_name">
                            <span>XRPUSDT</span>
                            <div className="history_main_row_name_status bg_green">
                                Long
                            </div>
                        </div>
                        <div className="history_main_row_margin">
                            <span>Кросс 19.00х</span>
                        </div>
                    </div>
                    <div className="active_order_pnl_wrap">
                        <div className="active_order_pnl_row" onClick={() => setPnlShow(true)}>
                            <span>Поделиться</span>
                            <img src="img/export.svg" alt=""/>
                        </div>
                        <div className="active_order_pnl color_green">
                            0.18(+0.36%)
                        </div>
                    </div>
                </div>
                <div className="active_order_info">
                    <div className="active_order_info_column">
                        <span>Размер позиции</span>
                        <p>1.861</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Цена входа</span>
                        <p>0.522</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Mark Price</span>
                        <p>0.5217</p>
                    </div>
                    <div className="active_order_info_column active_order_info_column_liquidation">
                        <span>Ориент. цена ликвидации</span>
                        <p>0.3663</p>
                    </div>
                </div>
                <div className="active_order_btns">
                    <div className="active_order_btn active_order_tpsl">
                        <span className='color_green'>0.09255</span>
                    </div>
                    <div className="active_order_btn active_order_close">
                        Закрыть с помощью
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_column df">
                    <div>
                        <div className="history_main_row_name">
                            <span>XRPUSDT</span>
                            <div className="history_main_row_name_status bg_green">
                                Long
                            </div>
                        </div>
                        <div className="history_main_row_margin">
                            <span>Кросс 19.00х</span>
                        </div>
                    </div>
                    <div className="active_order_pnl_wrap">
                    <div className="active_order_pnl_row" onClick={() => setPnlShow(true)}>
                            <span>Поделиться</span>
                            <img src="img/export.svg" alt=""/>
                        </div>
                        <div className="active_order_pnl color_green">
                            0.18(+0.36%)
                        </div>
                    </div>
                </div>
                <div className="active_order_info">
                    <div className="active_order_info_column">
                        <span>Размер позиции</span>
                        <p>1.861</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Цена входа</span>
                        <p>0.522</p>
                    </div>
                    <div className="active_order_info_column">
                        <span>Mark Price</span>
                        <p>0.5217</p>
                    </div>
                    <div className="active_order_info_column active_order_info_column_liquidation">
                        <span>Ориент. цена ликвидации</span>
                        <p>0.3663</p>
                    </div>
                </div>
                <div className="active_order_btns">
                    <div className="active_order_btn active_order_tpsl">
                        <span className='color_green'>0.09255</span>
                    </div>
                    <div className="active_order_btn active_order_close">
                        Закрыть с помощью
                    </div>
                </div>
            </div>
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