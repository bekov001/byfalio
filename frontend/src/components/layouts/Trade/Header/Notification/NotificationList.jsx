function NotificationList({notificationShow,setNotificationShow}){
    return (
        
        <div className={notificationShow ? "notification_list_modal " : "notification_list_modal hidden"}>
            <div className="notification_modal_wrap">
                <div className="notification_modal_close" onClick={()=>setNotificationShow(false)}>
                    <img src="img/close.svg" alt=""/>
                </div>
                <div className="notification_modal_title">
                    Все уведомление
                </div>
                <div className="notification_modal_items">
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                    <div className="notification_modal_item">
                        <div className="notification_modal_item_logo">
                            <img src="img/news.png" alt="" />
                        </div>
                        <div className="notification_modal_item_content">
                            <span>Вчера 14:40</span>
                            <h5>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</h5>
                            <p>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</p>
                        </div>
                    </div>   
                </div>
            </div>
            <div className='trade_modal_filter'></div>
        </div>
    );
}
export default NotificationList