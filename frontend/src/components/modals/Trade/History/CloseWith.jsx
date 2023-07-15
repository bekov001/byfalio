import React,{useEffect, useState} from 'react';
import Input from '../../../../components/parts/Input.jsx';
import ProcentFromCount from '../../../../components/parts/ProcentFromCount';
import jwtInterceptor from '../../../../shared/jwtInterceptor.js';
import { BACKEND_URL, getPnl } from '../../../../helpers.js';

function CloseWith({positionType, closeLimitPos, closeMarketPos, closeWithShow,setCloseWithShow, pnlProfit, openPrice, ticker, currentPrice, positionSize, positionId}){
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0); 
    const [amount, setAmount] = useState(positionSize); 
    const [percentageChange, setPercentageChange] = useState(false);
    const [check, setCheck] = useState(true);
    const [percent, setPercent] = useState(100);
    const [limitPercent, setLimitPercent] = useState(100);
    const [limitPercentageChange, setLimitPercentageChange] = useState(false);
    const [pnl, setPnl] = useState(0)
    const [limitPnl, setLimitPnl] = useState(0)

    if (closeWithShow && check){
        
       const currentSize = (positionSize * percent / 100)
       setAmount(currentSize.toFixed(2))

       const pnl = getPnl((positionType === "SHORT" ? -1 : 1) * currentSize, openPrice, currentPrice)
        setPnl(pnl)

       setPercentageChange(false);
       setCheck(false)
       setPrice(currentPrice);
       setCount((positionSize * limitPercent / 100).toFixed(2))
       const limitPnl = getPnl((positionType === "SHORT" ? -1 : 1) * (positionSize * limitPercent / 100), openPrice, currentPrice)
        setLimitPnl(limitPnl)
    //    setCount((positionSize * percent / 100).toFixed(2))
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

    function onChangeLimitCount(event){
        setCount(event)
        const limitPnl = getPnl((positionType === "SHORT" ? -1 : 1) * (Number(event) * limitPercent / 100), openPrice, price)
        setLimitPnl(limitPnl)
    }

    function onChangeLimitPrice(event){
        setPrice(event)
        const limitPnl = getPnl((positionType === "SHORT" ? -1 : 1) * (Number(count) * limitPercent / 100), openPrice, event)
        setLimitPnl(limitPnl)
    }

    
    function onChangeMarket(event){
        setAmount(event)
        const pnl = getPnl((positionType === "SHORT" ? -1 : 1) * (Number(event) * percent / 100), openPrice, currentPrice)
        setPnl(pnl)
    }




    function changeValue(percent){
        setPercentageChange(true);
        if (percent === 100){
            setPercentageChange(false);
        }
        setPercent(percent);
        const currentSize = (positionSize * percent / 100)
        setAmount(currentSize.toFixed(2))
        const pnl = getPnl((positionType === "SHORT" ? -1 : 1) * currentSize, openPrice, currentPrice)
        setPnl(pnl)

    }


    function changeLimitValue(percent){
        
        setLimitPercentageChange(true);
        if (percent === 100){
            setLimitPercentageChange(false);
        }
        setLimitPercent(percent);
        setCount((positionSize * percent / 100).toFixed(2))
        const limitPnl = getPnl((positionType === "SHORT" ? -1 : 1) * (positionSize * percent / 100), openPrice, currentPrice)
        setLimitPnl(limitPnl)
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

    function closeLimitType(){

        if (positionId !== null){
            setCloseWithShowSet()
        let size = count;
        if (!limitPercentageChange){
            size = positionSize
        }
        closeLimitPos(
            {
                type: "LIMIT",
                id: positionId,
                size: size,
                price: price
            }
        )
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
                                <p>{openPrice.toFixed(2)}</p>
                            </div>
                            <div className="trade_modal_main_price_row">
                                <span>Рыноч. цена</span>
                                <p>{currentPrice}</p>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Цена закрытия
                            </div>
                            <div className="trade_modal_main_input_w">
                                <Input placeholder={"0.00"} value={price} type={"text"} changeValue={onChangeLimitPrice}> </Input>
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

                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                                <Input placeholder={"0.00"} value={count} type={"text"} changeValue={onChangeLimitCount}> </Input>
                            </div>
                        </div>

                        <ProcentFromCount classN={"trade_modal_main_procent"} changeValue={changeLimitValue}/>
                        <div className="trade_modal_main_text_info">
                            {limitPnl < 0 ? "Ожидаемые убытки составляют" : "Ожидаемая прибыль составляет"}: {limitPnl > 0 ? limitPnl : limitPnl * -1} USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div  onClick={() => {closeLimitType()}}  className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
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
                            <Input placeholder={"0.00"} value={amount} type={"text"} changeValue={onChangeMarket}> </Input>
                            </div>
                        </div>
                        <ProcentFromCount classN={"trade_modal_main_procent"} changeValue={changeValue}/>
                        <div className="trade_modal_main_text_info">
                            {pnl < 0 ? "Ожидаемые убытки составляют" : "Ожидаемая прибыль составляет"}: {pnl > 0 ? pnl : pnl * -1} USDT (Включая расчетную комисиию за закрытие)
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