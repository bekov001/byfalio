
function ActiveOrdersV2({tradeHistoryActiveOrdersShow}){
    return (
        <div className={tradeHistoryActiveOrdersShow ? "sidebar_menu_main_history_active_orders " : "sidebar_menu_main_history_active_orders hidden"}>
        <div className="history_main_row">
            <div className="history_main_row_name">
                <span>XRPUSDT</span>
                <div className="history_main_row_name_status bg_red">
                    Продать
                </div>
            </div>
            <div className="history_main_row_margin">
                <span>Кросс 19.00х</span>
            </div>
            <div className="history_main_row_order_info">
                <div className="history_main_row_order_info_column">
                    <span>Тип ордера</span>
                    <p>Активные</p>
                </div>
                <div className="history_main_row_order_info_column">
                    <span>Всего исполнено</span>
                    <p>0.522</p>
                </div>
                <div className="history_main_row_order_info_column">
                    <span>Цена ордера</span>
                    <p>0.75</p>
                </div>
            </div>
            <div className="history_main_row_order_btns">
                <div className="history_main_row_order_btn history_main_row_order_btn_change">
                    Изменить
                </div>
                <div className="history_main_row_order_btn history_main_row_order_cancel">
                    Отменить
                </div>
            </div>
        </div>
        <div className="history_main_row">
            <div className="history_main_row_name">
                <span>XRPUSDT</span>
                <div className="history_main_row_name_status bg_green">
                    Купить
                </div>
            </div>
            <div className="history_main_row_margin">
                <span>Кросс 19.00х</span>
            </div>
            <div className="history_main_row_order_info">
                <div className="history_main_row_order_info_column">
                    <span>Тип ордера</span>
                    <p>Активные</p>
                </div>
                <div className="history_main_row_order_info_column">
                    <span>Всего исполнено</span>
                    <p>0.522</p>
                </div>
                <div className="history_main_row_order_info_column">
                    <span>Цена ордера</span>
                    <p>0.75</p>
                </div>
            </div>
            <div className="history_main_row_order_btns">
                <div className="history_main_row_order_btn history_main_row_order_btn_change">
                    Изменить
                </div>
                <div className="history_main_row_order_btn history_main_row_order_cancel">
                    Отменить
                </div>
            </div>
        </div>

        <div className="history_main_row_close_all_btn">
            Закрыть все сделки
        </div>
    </div>
    );
}
export default ActiveOrdersV2