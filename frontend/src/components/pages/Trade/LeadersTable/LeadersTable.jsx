import React, { useState} from 'react';


function LeadersTable({leadersShow,handleLeadersClose}){

    return (
        <div className={leadersShow ? "sidebar_menu_main w550" : "sidebar_menu_main w550 hidden"} >
            <div className="sidebar_menu_main_leaders">
                    <div className="sidebar_menu_main_leaders_head">
                        <span>Лидеры недели</span> 

                        <div className="df">
                            <img className='sidebar_menu_main_news_head_btn_setting' src="img/setting.svg" alt=""/>
                             <img className='sidebar_menu_main_leaders_head_btn_close' onClick={handleLeadersClose} src="img/close.svg" alt=""/>
                        </div>
                    </div>
                    <div className="sidebar_menu_main_leaders_items">
                        <div class="history_main_row_w_blur2"></div>

                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position1.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>30,500</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position2.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>19,500</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position3.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>13,700</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>4</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>10,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>5</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>6,700</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>6</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>5,400</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>7</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>4,200</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>8</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>3,700</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>9</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>3,300</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>10</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>3,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>11</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>12</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>13</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12******</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>

                        </div>
                    </div>
                    <div className="sidebar_menu_main_leaders_items_btn btn_yellow">
                        Зарегестрироваться в турнире
                    </div>
            </div>
        </div>
    );
}
export default LeadersTable