
import React, {useState} from 'react';
// import Pnl from '../../../components/modals/Trade/History/Pnl';
// import Pnl from '../modals/TradeHistory/Pnl'
// import Pnl from 'C:\Users\Home\Desktop\papka\byfal\byfalio_exchange-master\src\components\modals\Trade\History\Pnl.jsx';
import Pnl from '../../../modals/Trade/History/Pnl';

function ClosedOrders({tradeHistoryClosedShow}){
    const [pnlShow, setPnlShow] = useState(false);
    return (
        <div className={tradeHistoryClosedShow ? "sidebar_menu_main_history_closed " : "sidebar_menu_main_history_closed hidden"}>
        <div className="history_main_row_w overflow_full">
            <div className="history_main_row_w_blur"></div>
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <div className="df">
                        <span>XRPUSDT</span>
                        <div className="history_main_row_name_status bg_red">
                            Закрыть Long
                        </div>
                    </div>
                    <div className="history_main_row_name_export" onClick={() => setPnlShow(true)} >
                        <span>Поделиться</span>
                        <img src="img/export.svg" alt="" />
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <div className="df">
                        <span>XRPUSDT</span>
                        <div className="history_main_row_name_status bg_red">
                            Закрыть Long
                        </div>
                    </div>
                    <div className="history_main_row_name_export" onClick={() => setPnlShow(true)}>
                        <span>Поделиться</span>
                        <img src="img/export.svg" alt="" />
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <div className="df">
                        <span>XRPUSDT</span>
                        <div className="history_main_row_name_status bg_green">
                            Закрыть Long
                        </div>
                    </div>
                    <div className="history_main_row_name_export" onClick={() => setPnlShow(true)}>
                        <span>Поделиться</span>
                        <img src="img/export.svg" alt="" />
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <div className="df">
                        <span>XRPUSDT</span>
                        <div className="history_main_row_name_status bg_green">
                            Закрыть Long
                        </div>
                    </div>
                    <div className="history_main_row_name_export" onClick={() => setPnlShow(true)}>
                        <span>Поделиться</span>
                        <img src="img/export.svg" alt="" />
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="history_main_deep_btn btn_yellow">
            Закрыть все сделки
        </div>

        <Pnl pnlShow={pnlShow} setPnlShow={setPnlShow}></Pnl>
    </div>
    
    );
}
export default ClosedOrders