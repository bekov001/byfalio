
function ActiveOrder({tradeHistoryActiveOrderShow}){
    return (
        <div className={tradeHistoryActiveOrderShow ? "sidebar_menu_main_history_active_order " : "sidebar_menu_main_history_active_order hidden"}>

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
                    <div className="active_order_pnl_row">
                        <span>Нереализ. P&L</span>
                        <img src="img/link.svg" alt=""/>
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
                <div className="active_order_btn active_order_tpsl">
                    Установить TP/SL
                </div>
                <div className="active_order_btn active_order_close">
                    Закрыть с помощью
                </div>
            </div>
        </div>

        <div className="active_order_close_w">
            <div className="history_main_row_close_all_btn btn_yellow">
                Закрыть все сделки
            </div>
        </div>

    </div>
    );
}
export default ActiveOrder