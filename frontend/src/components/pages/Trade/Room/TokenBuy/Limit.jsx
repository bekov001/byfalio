import React, { useState} from 'react';
import Input from '../../../../parts/Input';

function Limit({summ, limitPrice, setLimitPrice}){
    const [price, setPrice] = useState(29337);
    const [count, setCount] = useState(0.1); 
    return (
        <div>
            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_name">
                    Цена
                </div>
                <div className="token_buy_price_input">
                    <Input placeholder={"0.00"} value={limitPrice} type={"text"} changeValue={setLimitPrice}> </Input>
                    <div className="token_buy_price_input_row">
                        <span className="color_green">Последнее</span>
                        <p>
                            USDT
                        </p>
                    </div>
                </div>
            </div>
            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_name">
                    Заполнить по количеству
                </div>
                <div className="token_buy_price_input">
                    <Input placeholder={"0.00"} value={summ} type={"text"} changeValue={setCount}> </Input>
                    <div className="token_buy_price_input_text">
                        USDT
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Limit