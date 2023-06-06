import React,{useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';

function CloseWith({closeWithShow,setCloseWithShow}){
    const [price, setPrice] = useState(29337);
    const [count, setCount] = useState(0.1); 

    const [closeWithMarketShow, setCloseWithMarket] = useState(true);
    const setCloseWithShowSet = () => {
        setCloseWithShow(false);
    }
    return (
        <div className={closeWithShow ? "trade_modal close_with_modal " : "trade_modal close_with_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Закрыть с помощью</span>
                    <img onClick={setCloseWithShowSet} src="img/close.svg" alt=""/>
                </div>

                <div className="trade_modal_header_btns">
                    <div onClick={() => setCloseWithMarket(true)} className={closeWithMarketShow ? "trade_modal_header_btn trade_modal_header_btn_active " : "trade_modal_header_btn"}>
                        Рыночный
                    </div>
                    <div onClick={() => setCloseWithMarket(false)} className={closeWithMarketShow ? "trade_modal_header_btn " : "trade_modal_header_btn trade_modal_header_btn_active"} >
                        Лимитная цена
                    </div>
                </div>
                <div className={closeWithMarketShow ? "trade_modal_main trade_modal_main_hidden " : "trade_modal_main trade_modal_main_active"}>
                    <div className="trade_modal_main_market">
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
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                                <Input placeholder={"0.00"} value={count} type={"text"} changeValue={setCount}> </Input>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Цена закрытия
                            </div>
                            <div className="trade_modal_main_input_w">
                                <Input placeholder={"0.00"} value={price} type={"text"} changeValue={setPrice}> </Input>
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
                        </div>

                        <ProcentFromCount classN={"trade_modal_main_procent"}/>
                        <div className="trade_modal_main_text_info">
                            Ожидаемый убытки составляют: 68.6970 USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div onClick={setCloseWithShowSet} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Подтвердить
                        </div>

                    </div>
                </div>

                <div className={closeWithMarketShow ? "trade_modal_main trade_modal_main_active " : "trade_modal_main trade_modal_main_hidden"}>
                    <div className="trade_modal_main_market">
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
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                            <Input placeholder={"0.00"} value={price} type={"text"} changeValue={setPrice}> </Input>
                            </div>
                        </div>
                        <ProcentFromCount classN={"trade_modal_main_procent"}/>
                        <div className="trade_modal_main_text_info">
                            Ожидаемый убытки составляют: 68.6970 USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div onClick={setCloseWithShowSet} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Подтвердить
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default CloseWith