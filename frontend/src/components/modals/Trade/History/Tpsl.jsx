import React,{useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';

function Tpsl({tpslShow,setTpslShow}){
    const [tp, setTp] = useState(22);
    const [pl, setPl] = useState(11); 
    const setTpslShowSet = () => {
        setTpslShow(false);
    }
    return (
        <div className={tpslShow ? "trade_modal tpsl_modal " : "trade_modal tpsl_modal hidden"}>
        <div className="trade_modal_filter">

        </div>
        <div className="trade_modal_w">
            <div className="trade_modal_header">
                <span>TP/SL</span>
                <img onClick={setTpslShowSet} src="img/close.svg" alt=""/>
            </div>
            <div className="trade_modal_main">
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <div className="df">
                            <span>Цена Входа</span>
                            <h5 className="mla">0.09030</h5>
                        </div>
                        <p>TP USDT</p>
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
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <p>SL USDT</p>
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

                <div className="trade_modal_main_btns">
                    <div onClick={setTpslShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                        Ок
                    </div>
                    <div onClick={setTpslShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                        Отмена
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Tpsl