import React from 'react';


function Market({summ}){

    return (
        <div>
            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_name">
                    Сумма
                </div>
                <div className="token_buy_price_input border_gradient">
                    <input type="text" value={summ}/>
                    <div className="token_buy_price_input_row">
                        
                        <p>
                            USDT
                        </p>
                    </div>
                </div>
                {/* <div className="token_buy_price_echange">
                    ≈64 000.03524242  USDT
                </div> */}
            </div>
        </div>
    );
}
export default Market