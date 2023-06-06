import React, { useState} from 'react';
import Original from './Original';
import TradingView from './TradingView';

function Main({kline, newData}){
  const [chartType, setChartType] = useState(1); 
  const [chartTimeline, setChartTimeline] = useState(3); 
    return (
      <div className="token_chart">
        <div className="token_chart_header">
            <div className="token_chart_header_info">
                <div className="token_chart_header_info_timeline">
                    <span>Время</span>
                    <div className="token_chart_header_info_timeline_items">
                        <div onClick={()=>{setChartTimeline(1)}} className={chartTimeline == 1 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1m
                        </div>
                        <div onClick={()=>{setChartTimeline(2)}}  className={chartTimeline == 2 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          30m
                        </div>
                        <div onClick={()=>{setChartTimeline(3)}}  className={chartTimeline == 3 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1h
                        </div>
                        <div onClick={()=>{setChartTimeline(4)}}  className={chartTimeline == 4 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          4h
                        </div>
                        <div onClick={()=>{setChartTimeline(5)}}  className={chartTimeline == 5 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1d
                        </div>
                    </div>
                </div>
                <div className="token_chart_header_info_token">
                    <span>04-29</span>
                    <span>23:00</span>
                    <span>Открытые: 29,337.5</span>
                    <span>Макс: 29,337.5</span>
                    <span>Мин: 29,337.5</span>
                </div>
            </div>
            <div className="token_chart_header_btns">
                <div className="token_chart_header_btns_wrap">
                    <div  onClick={()=>{setChartType(1)}} className={chartType == 1 ? "token_chart_header_btn token_chart_header_btn_active" : "token_chart_header_btn"}>
                        Original
                    </div>
                    <div onClick={()=>{setChartType(2)}} className={chartType == 2 ? "token_chart_header_btn token_chart_header_btn_active" : "token_chart_header_btn"}>
                        TradingView
                    </div>
                </div>
            </div>
        </div>
        <div className="token_chart_main">
        {(chartType == 1) ? <Original chartType={chartType} kline={kline} newData={newData} /> : <TradingView chartType={chartType}/>}
        </div>
    </div>
    );
}
export default Main