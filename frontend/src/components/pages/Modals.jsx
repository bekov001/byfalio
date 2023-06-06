import React, { useEffect, useRef,useState} from 'react';
import CloseLimit from '../modals/Trade/History/CloseLimit';
import CrossMargin from '../modals/Trade/History/CrossMargin';
import CloseAll from '../modals/Trade/History/CloseAll';
import Tpsl from '../modals/Trade/History/Tpsl';
import TrailingStop from '../modals/Trade/History/TrailingStop';
import CloseMarket from '../modals/Trade/History/CloseMarket';
import TakeLoss from '../modals/Trade/History/TakeLoss';
import CloseWith from '../modals/Trade/History/CloseWith';
import Pnl from '../modals/Trade/History/Pnl';
import NotificationList from '../layouts/Trade/Header/Notification/NotificationList';
import Notification from '../layouts/Trade/Header/Notification/Notification';
import TokenSearch from '../layouts/Trade/Header/TokenSearch';

function Modals() {
    const [closeLimitShow, setCloseLimitShow] = useState(false);
    const [crossMarginShow, setCrossMarginShow] = useState(false);
    const [cancelAllShow, setCancelAllShow] = useState(false);
    const [tpslShow, setTpslShow] = useState(false);
    const [trailingStopShow, setTrailingStopShow] = useState(false);
    const [closeMarketShow, setCloseMarketShow] = useState(false);
    const [takeLossShow, setTakeLossShow] = useState(false);
    const [closeWithShow, setCloseWithShow] = useState(false);
    const [pnlShow, setPnlShow] = useState(false);
    const [notificationShow, setNotificationShow] = useState(false);
    const handleNotificationClose = () => setNotificationShow(false);

    const [notification2Show, setNotification2Show] = useState(false);

    const [tokenSearchShow, setTokenSearcShow] = useState(false);
    const handleTokenSearchClose = () => setTokenSearcShow(false);

  return (
   
    <div className="wrap">
        <ul className='modals_ul'>
            <li onClick={() => setCloseLimitShow(true)} >Закр. по Лимитному</li>
            <li onClick={() => setCrossMarginShow(true)} >Режим кросс-маржи</li>
            <li onClick={() => setCancelAllShow(true)} >Закрыть все</li>
            <li onClick={() => setTpslShow(true)} >TP/SL</li>
            <li onClick={() => setTrailingStopShow(true)} >Трейлинг стоп</li>
            <li onClick={() => setCloseMarketShow(true)} >Закр. по Рыноч-му</li>
            <li onClick={() => setTakeLossShow(true)} >Take Profit / Stop Loss</li>
            <li onClick={() => setCloseWithShow(true)} >Закрыть с помощью</li>
            <li onClick={() => setPnlShow(true)} >Коэффициент P&L (в слайдере все варианты)</li>
            <li onClick={() => setNotificationShow(true)} >Уведомления (список)</li>
            <li onClick={() => setNotification2Show(true)} >Уведомления</li>
            <li onClick={() => setTokenSearcShow(true)} >Поиск токена</li>
        </ul>
        <CloseLimit closeLimitShow={closeLimitShow} setCloseLimitShow={setCloseLimitShow}></CloseLimit>
        <CrossMargin crossMarginShow={crossMarginShow} setCrossMarginShow={setCrossMarginShow}></CrossMargin>
        <CloseAll cancelAllShow={cancelAllShow} setCancelAllShow={setCancelAllShow}></CloseAll>
        <Tpsl tpslShow={tpslShow} setTpslShow={setTpslShow}></Tpsl>
        <TrailingStop trailingStopShow={trailingStopShow} setTrailingStopShow={setTrailingStopShow}></TrailingStop>
        <CloseMarket closeMarketShow={closeMarketShow} setCloseMarketShow={setCloseMarketShow}></CloseMarket>
        <TakeLoss takeLossShow={takeLossShow} setTakeLossShow={setTakeLossShow}></TakeLoss>
        <CloseWith closeWithShow={closeWithShow} setCloseWithShow={setCloseWithShow}></CloseWith>
        <Pnl pnlShow={pnlShow} setPnlShow={setPnlShow}></Pnl>
        <NotificationList notificationShow={notificationShow} handleNotificationClose={handleNotificationClose}></NotificationList>
        <Notification notificationShow={notification2Show} setNotification2Show={setNotification2Show}></Notification>
        <div className='tokenps'>
                    <TokenSearch tokenSearchShow={tokenSearchShow} handleTokenSearchClose={handleTokenSearchClose}></TokenSearch>
        </div>

    </div>
  );

}
export default Modals;
