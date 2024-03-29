import React, {useState} from 'react'

export default function LimitOrder({cancelLimitOrder, limitOrders, tradeHistoryLimitOrderShow}) {
    const [pnlShow, setPnlShow] = useState(false);
    return (
        <div className={tradeHistoryLimitOrderShow ? "sidebar_menu_main_history_closed " : "sidebar_menu_main_history_closed hidden"}>
        <div className="history_main_row_w overflow_full">
            <div className="history_main_row_w_blur"></div>
            

                {limitOrders ? limitOrders.map((order, index) => order.is_active ? <div className="history_main_row" key={index}> <div className="history_main_row_name">
                    <div className="df">
                        <span>{order.ticker}</span>
                        <div className="history_main_row_name_status bg_red">
                            {!order.limit_id ? "Открыть": "Закрыть"} {order.type_of_pos}
                        </div>
                    </div>
                    {/* <div className="history_main_row_name_export" onClick={() => setPnlShow(true)} >
                        <span>Поделиться</span>
                        <img src="img/export.svg" alt="" />
                    </div> */}
                </div>
                <div className="history_main_row_date">
                    <span>{new Date(order.created).toLocaleString()}</span>
                    {/* <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div> */}
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>{order.type_of_order}</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Сумма({order.ticker})</span>
                        <p>{order.position_size}</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена</span>
                        <p>{order.price}</p>
                    </div>
                    {/* <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div> */}
                </div>

                <div className="active_order_btns">
                    <div onClick={() => cancelLimitOrder(order)} className="active_order_btn active_order_close">
                        Отменить
                    </div>
                </div> </div>
                  : '') : "Nothing"}
                
            
            
        </div>
        {/* <div className="history_main_deep_btn btn_yellow">
            Закрыть все сделки
        </div> */}

        {/* <Pnl pnlShow={pnlShow} setPnlShow={setPnlShow}></Pnl> */}
    </div>)
}
