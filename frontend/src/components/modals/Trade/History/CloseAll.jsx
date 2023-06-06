import React,{useState} from 'react';
function CloseAll({cancelAllShow,setCancelAllShow}){
    const [isChecked, setIsChecked] = useState(false);
    const handleIsCheckedToggle = () => setIsChecked(!isChecked);

    const cancelAllShowSet = () => {
        setCancelAllShow(false);
    }
    return (
        <div className={cancelAllShow ? "trade_modal close_all_modal " : "trade_modal close_all_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w close_all_modal_w">
                <div className="close_all_modal_main">
                    <div className="close_all_modal_main_header">
                        Закрыть все
                    </div>
                    <div className="close_all_modal_main_info">
                        Вы точно хотите закрыть все позиции?
                    </div>
                    <div className="trade_modal_main_btns">
                        <div onClick={cancelAllShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                            Ок
                        </div>
                        <div onClick={cancelAllShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                            Отмена
                        </div>
                    </div>
                    <div className="close_all_modal_main_submit">
                        <div onClick={handleIsCheckedToggle} className={isChecked ? "close_all_modal_main_submit_select checked" : "close_all_modal_main_submit_select"}>
                        </div>
                        <label for="">Не отображать окно подтверждения</label>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CloseAll