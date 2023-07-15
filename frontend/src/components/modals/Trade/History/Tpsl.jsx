import React,{useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';
import StopLossCount from '../../../parts/StopLossCount.jsx';

function Tpsl({takeProfit, stopLoss, positionType, positionId, size, setTpSl, leverage, openPrice, tpslShow,setTpslShow}){
    const [tp, setTp] = useState();
    const [sl, setSl] = useState(); 
    const [check, setCheck] = useState(true);

    if (check && tpslShow) {
        console.log(takeProfit, stopLoss)
        setTp(takeProfit)
        setSl(stopLoss)
        setCheck(false)
    }

    const setTpslShowSet = () => {
        setTpSl({
            type: "TAKE-PROFIT",
            id: positionId,
            size: size,
            tp: tp,
            sl: sl
        })
        setTpslShow(false);
        setCheck(true)
    }

    function changeTp(percent){
        
        setTp((Number(openPrice) + ((positionType === "LONG" ? 1: - 1) * (Number(openPrice) * percent / 100) / Number(leverage))).toFixed(2))
    }

    function changeSl(percent){
        setSl((Number(openPrice) + ((positionType === "LONG" ? 1: - 1) *  (Number(openPrice) * percent / 100) / Number(leverage))).toFixed(2))
    }


    return (
        <div className={tpslShow ? "trade_modal tpsl_modal " : "trade_modal tpsl_modal hidden"}>
        <div className="trade_modal_filter">

        </div>
        <div className="trade_modal_w">
            <div className="trade_modal_header">
                <span>TP/SL</span>
                <img onClick={() =>{ setTpslShow(false) 
                        setCheck(true)
                        }} src="img/close.svg" alt=""/>
            </div>
            <div className="trade_modal_main">
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <div className="df">
                            <span>Цена Входа</span>
                            <h5 className="mla">{openPrice.toFixed(2)}</h5>
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
                <ProcentFromCount classN={"trade_modal_main_procent"} changeValue={changeTp}/>
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <p>SL USDT</p>
                    </div>
                    <div className="df">
                        <div className="trade_modal_main_input_w w70">
                        <Input placeholder={"0.00"} value={sl} type={"text"} changeValue={setSl}> </Input>
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
                {/* <ProcentFromCount classN={"trade_modal_main_procent"} changeValue={changeSl}/> */}
                <StopLossCount classN={"trade_modal_main_procent"} changeValue={changeSl}/>
                <div className="trade_modal_main_btns">
                    <div onClick={() =>{ setTpslShow(false) 
                        setCheck(true)
                        }} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                        Отмена
                    </div>
                    <div onClick={setTpslShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                        Ок
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Tpsl