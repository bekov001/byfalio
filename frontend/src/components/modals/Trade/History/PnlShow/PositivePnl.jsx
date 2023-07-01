import React from 'react'
import Slider from "react-slick";
export default function PositivePnl({pnlPercentage, positionType, pnlProfit ,settings, leverage, openPrice, ticker, currentPrice}) {
  return (
    
                        <Slider {...settings}>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                    </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>ROI</span>
                                            <p>+{pnlPercentage}%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_1.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                        <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+{pnlProfit}</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_2.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>ROI</span>
                                            <p>+{pnlPercentage}%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_3.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                 
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+{pnlProfit}</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                     
                                    </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_4.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>ROI</span>
                                            <p>+{pnlPercentage}%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_5.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+{pnlProfit}</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_6.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>{ticker}</span>
                                            <div className={positionType === "SHORT"? "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short" : "trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long"}>
                                        {positionType} {leverage}x
                                        </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>ROI</span>
                                            <p>+{pnlPercentage}%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>{openPrice}</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>{currentPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_plus_7.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">

                                        <div className="trade_pnl_slide_footer_row_qrcode">
                                            <img src="img/qrcode.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>

  )
}
