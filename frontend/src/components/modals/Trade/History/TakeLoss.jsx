import React,{useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';
function TakeLoss({takeLossShow,setTakeLossShow}){
    const [tp, setTp] = useState();
    const [pl, setPl] = useState(); 
    const setTakeLossShowSet = () => {
        setTakeLossShow(false);
    }
    return (
        <div className={takeLossShow ? "trade_modal take_stop_profit_modal " : "trade_modal take_stop_profit_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Take Profit / Stop Loss</span>
                    <img onClick={setTakeLossShowSet} src="img/close.svg" alt=""/>
                </div>
                <div className="trade_modal_main">

                    <div className="trade_modal_main_price">
                        <div className="trade_modal_main_price_row">
                            <span>Цена входа</span>
                            <p>29,209.89</p>
                        </div>
                        <div className="trade_modal_main_price_row">
                            <span>Рыноч. цена</span>
                            <p>28,881.4</p>
                        </div>
                    </div>
                    <div className="trade_modal_main_input">
                        <div className="trade_modal_main_input_title df mt21">
                            <div className="trade_modal_main_input_title_text">
                                <p>Take Profit</p>
                                <img src="img/clear.svg" alt=""/>
                            </div>
                            <div className="trade_modal_main_input_title_select">
                                <span>Mark</span>
                                <img src="img/select2.svg" alt=""/>
                            </div>
                        </div>
                        <div className="df">
                            <div className="trade_modal_main_input_w w70">
                            <Input placeholder={"0.00"} value={tp} type={"text"} changeValue={setTp}> </Input>
                                <div className="trade_modal_main_input_btns">
                                    <div className="df">
                                        <div className="trade_modal_main_input_btn_plus">
                                            +
                                        </div>
                                        <span>|</span>
                                        <div className="trade_modal_main_input_btn_minus">
                                            -
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_modal_main_select">
                                <div className="trade_modal_main_select_w">
                                    <span>USDT</span>
                                    <img src="img/select2.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProcentFromCount classN={"trade_modal_main_procent"}/>
                    <div className="trade_modal_main_text_info">
                        Market Take Profit ордер активируется, когда Mark Price достигнет 28,835.7. Ожидаемый прибыль составляет: 114.4746 USDT, ROI: 25.61%
                    </div>

                    <div className="trade_modal_main_input">
                        <div className="trade_modal_main_input_title df mt30">
                            <div className="trade_modal_main_input_title_text">
                                <p>Stop Loss</p>
                                <img src="img/clear.svg" alt=""/>
                            </div>
                            <div className="trade_modal_main_input_title_select">
                                <span>Last</span>
                                <img src="img/select2.svg" alt=""/>
                            </div>
                        </div>
                        <div className="df">
                            <div className="trade_modal_main_input_w w70">
                            <Input placeholder={"0.00"} value={pl} type={"text"} changeValue={setPl}> </Input>
                                <div className="trade_modal_main_input_btns">
                                    <div className="df">
                                        <div className="trade_modal_main_input_btn_plus">
                                            +
                                        </div>
                                        <span>|</span>
                                        <div className="trade_modal_main_input_btn_minus">
                                            -
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_modal_main_select">
                                <div className="trade_modal_main_select_w">
                                    <span>USDT</span>
                                    <img src="img/select2.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProcentFromCount classN={"trade_modal_main_procent"}/>
                    <div className="trade_modal_main_text_info">
                        Рыночный Slop Loss ордер активируется, когда Рыноч. Цена достигнет 29,434.3. Ожидаемый убытки составляют: 68.6970 USDT, ROI: -15.37%
                    </div>
                    <div className="trade_modal_main_more_info">
                        <span>Что такое тейк-профит и стоп-лосс?</span>
                        <img src="img/right_green.svg" alt=""/>
                    </div>
                    <div onClick={setTakeLossShowSet} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                        Подтвердить
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TakeLoss