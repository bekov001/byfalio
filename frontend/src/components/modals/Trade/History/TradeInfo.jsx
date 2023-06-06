import React,{useState} from 'react';
function TradeInfo({tpslShow,setTpslShow}){

    const setTpslShowSet = () => {
        setTpslShow(false);
    }
    return (
        <div className="trade_info_modal hidden">
            <div className="trade_modal_filter"></div>
            <div className="trade_info_w">
                <div className="trade_modal_header">
                    <img src="img/modal_close4.svg" alt=""/>
                </div>
                <div className="trade_info_main">
                    <div className="trade_info_main_row_w">
                            <div className="trade_info_main_row">
                                <div className="trade_info_main_row_name">
                                    <h4>XRPUSDT</h4>
                                    <div className="trade_info_main_row_name_w trade_info_main_row_name_type">
                                         Long
                                    </div>
                                    <div className="trade_info_main_row_name_w trade_info_main_row_name_margin">
                                        Кросс 20.00х
                                    </div>
                                </div>
                            
                                <img src="img/target.svg" alt="" />
                            </div>
                            <div className="trade_info_main_row">
                                <span>Размер позиции</span>
                                <p className="color_red">0.306</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Цена входа</span>
                                <p>29,209.89</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Mark Price</span>
                                <p>28,896.43</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span className="decoration_underline">Ориент. цена ликвидации</span>
                                <p className='color_orange'>28,896.43</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Цена</span>
                                <p>8,938.2292</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Нереализ. P&L (%)</span>
                                <p className='color_green'>96.6011 USDT (21.34%) = 96.60 USD </p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Приоритет ADL</span>
                                <div className="trade_info_main_row_priority">
                                    <img src="img/priority1.svg" alt="" />
                                    <img src="img/priority2.svg" alt="" />
                                    <img src="img/priority0.svg" alt="" />
                                    <img src="img/priority0.svg" alt="" />
                                    <img src="img/priority0.svg" alt="" />
                                </div>         
                            </div>
                    </div>
                    <div className="trade_info_main_row_w trade_info_main_row_border">
                            <div className="trade_info_main_row">
                                <span>Маржа</span>
                                <p>452.5425 USDT</p>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Маржа</span>
                                <div className="trade_info_main_row_price">
                                <span className="color_green">_ _</span> <div>/</div> <span className="color_red"> _ _ </span><p>{'>'}</p>                                 </div>
                            </div>
                            <div className="trade_info_main_row">
                                <span>Trailing Stop</span>
                                <div className="trade_info_main_row_price">
                                    <span className="color_green">_ _</span> <div>/</div> <span className="color_red"> _ _ </span><p>{'>'}</p> 
                                </div>
                            </div>
                    </div>

                    <div className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Закрыть с помощью
                        </div>
                </div>
            </div>
        </div>
    );
}
export default TradeInfo