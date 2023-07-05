import React,{useEffect, useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';
import jwtInterceptor from '../../../../shared/jwtInterceptor.js';
import { BACKEND_URL } from '../../../../helpers.js';

function CloseWith({closeMarketPos, closeWithShow,setCloseWithShow, pnlProfit, openPrice, ticker, currentPrice, positionSize, positionId}){
    const [price, setPrice] = useState(positionSize);
    const [count, setCount] = useState(positionSize); 
    const [amount, setAmount] = useState(positionSize); 
    const [percentageChange, setPercentageChange] = useState(false);
    const [check, setCheck] = useState(true);

    if (closeWithShow && check){
       setAmount(positionSize.toFixed(2))
       setPercentageChange(false);
       setCheck(false)
    }
    // changeValue()

    // useEffect(() => {
    //     setAmount(positionSize.toFixed(2))
    // }, [])

    // const []

    const [closeWithMarketShow, setCloseWithMarket] = useState(true);
    const setCloseWithShowSet = () => {
        setCloseWithShow(false);
        setCheck(true);
    }



    function changeValue(percent){
        setPercentageChange(true);
        if (percent === 100){
            setPercentageChange(false);
        }
        setAmount((positionSize * percent / 100).toFixed(2))
    }


    function closePos(){

        if (positionId !== null){
            setCloseWithShowSet()
        let size = amount;
        if (!percentageChange){
            size = positionSize
        }

        closeMarketPos({
            positionId: positionId,
            ticker: ticker,
            size: size
        })
        }
        
        
        
   
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
                                <p>{openPrice}</p>
                            </div>
                            <div className="trade_modal_main_price_row">
                                <span>Рыноч. цена</span>
                                <p>{currentPrice}</p>
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
                                <p>{openPrice.toFixed(2)}</p>
                            </div>
                            <div className="trade_modal_main_price_row">
                                <span>Рыноч. цена</span>
                                <p>{currentPrice}</p>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                            <Input placeholder={"0.00"} value={amount} type={"text"} changeValue={setAmount}> </Input>
                            </div>
                        </div>
                        <ProcentFromCount classN={"trade_modal_main_procent"} changeValue={changeValue}/>
                        <div className="trade_modal_main_text_info">
                            {pnlProfit < 0 ? "Ожидаемые убытки составляют" : "Ожидаемая прибыль составляет"}: {pnlProfit > 0 ? pnlProfit : pnlProfit * -1} USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div onClick={() => {closePos()}} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Подтвердить
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default CloseWith