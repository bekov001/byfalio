function Notification({notificationShow,setNotification2Show}){
    const handleNotificationCloseSet = () => {
        setNotification2Show(false);
    }

    return (
        <div className={notificationShow ? "notification_modal" : "notification_modal hidden"} >
        <div className="notification_modal_wrap">
            <div className="notification_modal_close">
                <img onClick={handleNotificationCloseSet} src="img/modal_close2.svg" alt=""/>
            </div>
            <div className="notification_modal_items">
                <div className="notification_modal_item">
                    <div className="notification_modal_item_title">
                        <div className="notification_modal_item_title_star">
                            <img src="img/star.svg" alt=""/>
                        </div>
                        <span>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</span>
                    </div>
                    <div className="notification_modal_item_body">
                        <div className="notification_modal_item_body_left">
                            <span>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</span>
                            <div className="df">
                                <div className="notification_modal_item_body_left_time">
                                    Вчера 14:40
                                </div>
                                <div className="notification_modal_item_body_left_category">
                                    Последние события
                                </div>
                            </div>
                        </div>
                        <div className="notification_modal_item_body_right">
                            <img src="img/notification_image.png" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}
export default Notification