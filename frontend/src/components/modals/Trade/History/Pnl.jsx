import React,{useState,Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NegativePnl from './PnlShow/NegativePnl';
import PositivePnl from './PnlShow/PositivePnl';

function Pnl({pnlShow,setPnlShow, pnlPercentage, positionType, pnlProfit, leverage, openPrice, ticker, currentPrice}){

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
                   


                        {pnlProfit > 0 ? <PositivePnl currentPrice={currentPrice} ticker={ticker} openPrice={openPrice} leverage={leverage} pnlProfit={pnlProfit} positionType={positionType} pnlPercentage={pnlPercentage} pnlShow={pnlShow} settings={settings}></PositivePnl>
                         : <NegativePnl currentPrice={currentPrice} ticker={ticker} openPrice={openPrice} leverage={leverage} pnlProfit={pnlProfit} positionType={positionType} pnlPercentage={pnlPercentage} pnlShow={pnlShow} settings={settings}></NegativePnl>
    }

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