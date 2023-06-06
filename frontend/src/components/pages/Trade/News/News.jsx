import React, { useState} from 'react';



function News({newsShow,handleNewsClose}){
    const [menuLinkId, setMenuLinkId] = useState(1); 
    return (
        <div className={newsShow ? "sidebar_menu_main" : "sidebar_menu_main hidden"} >

            <div className="sidebar_menu_main_news">
                 <div className="sidebar_menu_main_news_head">
                    <span>Новости</span>
                    
                    <img className='sidebar_menu_main_news_head_btn_close' onClick={handleNewsClose} src="img/close.svg" alt=""/>
                </div>

                <div className="sidebar_menu_main_news_items">
                    <div className="history_main_row_w_blur2"></div>
                    <div className="sidebar_menu_main_news_item">
                        <img src="img/newsImg.png" alt="" />
                        <span>21 апреля 2023 года</span>
                        <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                        <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <span>21 апреля 2023 года</span>
                        <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                        <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <img src="img/newsImg.png" alt="" />
                        <span>21 апреля 2023 года </span>
                        <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                        <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <span>21 апреля 2023 года </span>
                        <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                        <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default News