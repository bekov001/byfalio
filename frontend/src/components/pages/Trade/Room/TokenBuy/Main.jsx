import React,{useState} from 'react';
import Market from './Market';
import Limit from './Limit';
import RangeMargin from '../../../../parts/RangeMargin';
import ProcentFromCount from '../../../../parts/ProcentFromCount';
function Main({openPos, balance, openLimitPos, indexPrice}){
    const [tabActive, setTabActive] = useState(1);
    const [fillProcent, setFillProcent] = useState(1);
    const [priceOrder, setPriceOrder] = useState(28160);
    const priceOrderChange = event => {
        setPriceOrder(event.target.value);
      };
    const [isCheckedShort, setIsCheckedShort] = useState(false);
    const handleIsCheckedShortToggle = () => setIsCheckedShort(!isCheckedShort);
    const [isCheckedLong, setIsCheckedLong] = useState(false);
    const handleIsCheckedLongToggle = () => setIsCheckedLong(!isCheckedLong);
    const [summ, setSumm] = useState(balance);
    const [leverage, setLeverage] = useState(1);
    const [limitPrice, setLimitPrice] = useState(indexPrice);

    // const [balance, setBalance] = use
    function openShort(event){
        if (tabActive == 2){
            // console.log(limitPrice)
            const position = {
                //    id: Date.now(),
                   type_of_pos: 'SHORT',
                   leverage: leverage,
                   quantity_usdt: summ,
                   limit_price: parseFloat(limitPrice)
                }

            openLimitPos(position)
        } else {
            event.preventDefault()
            // console.log(balance, leverage)
            const position = {
            //    id: Date.now(),
               type_of_pos: 'SHORT',
               leverage: leverage,
               quantity_usdt: summ
            }
             openPos(position)
        }
      
      }
    function openLong(event){
        // if limitPrice !
        if (tabActive == 2){
            // console.log(limitPrice)
            const position = {
                //    id: Date.now(),
                   type_of_pos: 'LONG',
                   leverage: leverage,
                   quantity_usdt: summ,
                   limit_price: parseFloat(limitPrice)
                }

            openLimitPos(position)
        } else {
            event.preventDefault()
            // console.log(balance, leverage)
            const position = {
            //    id: Date.now(),
               type_of_pos: 'LONG',
               leverage: leverage,
               quantity_usdt: summ
            }
             openPos(position)
        }
      
      }

    function changeValue(percent){
        setSumm(balance * percent / 100)
    }
    return (
        <div className="token_buy">
        <div className="token_buy_btns">
            <div onClick={()=>{setTabActive(1)}} className={tabActive == 1 ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"}>
                Рыночный
            </div>
            <div onClick={()=>{setTabActive(2)}} className={tabActive == 2 ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"}>
                Лимитный
            </div>
        </div>
        <div className="token_buy_price">
            {tabActive == 1 ? <Market summ={summ}/> : <Limit limitPrice={limitPrice} setLimitPrice={setLimitPrice} summ={summ}/>}
            <ProcentFromCount changeValue={changeValue}/>
        </div>

            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_name">
                Плечо
                </div>
                <RangeMargin setLeverage={setLeverage}/>
            </div>


        <div className="token_buy_btns_w">
            <div className="token_buy_btn_w token_buy_btn_long">
                <span onClick={(e) => openLong(e)}>Открыть Лонг</span>
            </div>
            <div className="token_buy_btn_w token_buy_btn_short">
                <span onClick={(e) => openShort(e)}>Открыть Шорт</span>
            </div>
        </div>
        {/* <div className="token_buy_result">
            <div className="token_buy_result_row">
                <span>Стоимость лонга</span>
                <p>250.32 USDT</p>
            </div>
            <div className="token_buy_result_row mb0">
                <span>Стоимость шорта</span>
                <p>250.32 USDT</p>
            </div>
        </div> */}
    </div>
    );
}
export default Main