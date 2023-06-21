import React,{useState,Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Pnl({pnlShow,setPnlShow}){

    const setPnlShowSet = () => {
        setPnlShow(false);
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className={pnlShow ? "trade_pnl_modal" : "trade_pnl_modal hidden"}>
            <div className="trade_modal_filter"></div>
            <div className="trade_pnl_modal_w">
                <div className="trade_pnl_modal_header">
                    <span>Коэффициент P&L</span>
                    <img onClick={setPnlShowSet} src="img/close.svg" alt="" />
                </div>
                <div className="trade_pnl_modal_main">
                    <div className="trade_pnl_modal_main_slider">
                        <div className="trade_pnl_modal_main_slider_btn trade_pnl_modal_main_slider_btn_prev">
                     
                        </div>
                        <div className="trade_pnl_modal_main_slider_wrap">
                        <Slider {...settings}>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_1.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_1.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
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


                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_2.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_3.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_4.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_5.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_6.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-72%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_minus_7.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_2.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_3.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_4.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_5.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_6.png" alt="" />
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
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_long">
                                                Long 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_start'>0%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl/pnl_start_7.png" alt="" />
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


                        </div>

                        <div className="trade_pnl_modal_main_slider_btn trade_pnl_modal_main_slider_btn_next">
                          
                        </div>
                    </div>

                    <div className="trade_pnl_modal_main_info">

                        <div className="trade_pnl_modal_main_info_change_text">
                            <span>Измените текст</span>
                            <textarea className='border_gradient' name="" id="" cols="30" rows="10" defaultValue="Присоединяйтесь к ByFalio вместе со мной 
и получайте бонус на $5000!"></textarea>
                        </div>
                        <div className="trade_pnl_modal_main_info_btns">
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/pnl/icon1.svg" alt="" />
                                </div>
                                <span>Сохранить</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon2.svg" alt="" />
                                </div>
                                <span className='posr'>Скопировать</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon3.svg" alt="" />
                                </div>
                                <span>Отправить</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon4.svg" alt="" />
                                </div>
                                <span>Twitter</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon5.svg" alt="" />
                                </div>
                                <span>Telegram</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon6.svg" alt="" />
                                </div>
                                <span>Facebook</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon7.svg" alt="" />
                                </div>
                                <span>WhatsApp</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                <img src="img/pnl/icon8.svg" alt="" />
                                </div>
                                <span>LinkedIn</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/pnl/icon9.svg" alt="" />
                                </div>
                                <span>Line</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                     <img src="img/pnl/icon10.svg" alt="" />
                                </div>
                                <span>More</span>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Pnl