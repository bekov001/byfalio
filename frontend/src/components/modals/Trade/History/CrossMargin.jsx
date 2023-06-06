import React,{useState} from 'react';
import RangeMargin from '../../../../components/parts/RangeMargin';
// import ProcentFromCount from '../../../../components/parts/ProcentFromCount';
function CrossMargin({crossMarginShow,setCrossMarginShow}){

    const setCrossMarginShowSet = () => {
        setCrossMarginShow(false);
    }

      const [valueRange, setValueRange] = useState(0);
    return (
        <div className={crossMarginShow ? "trade_modal cross_margin_modal " : "trade_modal cross_margin_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w w700">
                <div className="trade_modal_header">
                    <span>Режим кросс-маржи</span>
                    <img onClick={setCrossMarginShowSet} src="img/close.svg" alt=""/>
                </div>
                <div className="trade_modal_main">
                    <div className="trade_modal_main_btn_full trade_modal_mtfirst">
                        Марж. торговля
                    </div>
                    <div className="trade_modal_main_text_info trade_modal_text_light">
                        В режиме Кросс маржи весь доступный остаток на соответствующем счёте будет задействован для поддержки минимальной маржи и предотвращения ликвидации. Весь соответствующий доступный баланс может быть утерян в случае ликвидации. Обратите внимание, что корректировка
                        кредитного плеча повлияет на все позиции и активные ордера по текущей паре.
                    </div>
                    <div className="trade_modal_main_input trade_modal_mtstandart">
                        <div className="trade_modal_main_input_title trade_modal_text_dark">
                            Кредитное плечо
                        </div>
                        <div className="trade_modal_main_input_w">
                            <input disabled className="iw100 tac" type="text" value={valueRange}/>
                        </div>
                    </div>
                    <div className="trade_modal_main_input_picker trade_modal_mtstandart">
                        <RangeMargin setValueRange={setValueRange}/>
                    </div>
                    <div className="trade_modal_main_text_info trade_modal_text_light">
                        Субаккаунт можно использовать для изолирования позиций или маржи.
                        <div className="trade_modal_main_text_info_row">
                            <span>Переключить аккаунт</span>
                            <img src="img/right_green.svg" alt=""/>
                        </div>
                    </div>
                    <div className="trade_modal_main_btns">
                        <div onClick={setCrossMarginShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                            Ок
                        </div>
                        <div onClick={setCrossMarginShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                            Отмена
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CrossMargin