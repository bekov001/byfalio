import React, { useState} from 'react';
import Original from './Original';
import TradingView from './TradingView';
import './loading.css';

function Main({deleteChart, updateChart, kline, newData, lowPrice, highPrice, isLoading}){
  const [chartType, setChartType] = useState(1); 
  const [chartTimeline, setChartTimeline] = useState(3); 
  const data = ['1m', '30m', '1h', '4h', '1d']
  function setData(n){
    setChartTimeline(n)
    updateChart(data[n - 1])
  }

    return (
      <div className="token_chart">
        <div className="token_chart_header">
            <div className="token_chart_header_info">
                <div className="token_chart_header_info_timeline">
                    <span>Время</span>
                    <div className="token_chart_header_info_timeline_items">
                        <div onClick={()=>{setData(1)}} className={chartTimeline == 1 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1m
                        </div>
                        <div onClick={()=>{setData(2)}}  className={chartTimeline == 2 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          30m
                        </div>
                        <div onClick={()=>{setData(3)}}  className={chartTimeline == 3 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1h
                        </div>
                        <div onClick={()=>{setData(4)}}  className={chartTimeline == 4 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          4h
                        </div>
                        <div onClick={()=>{setData(5)}}  className={chartTimeline == 5 ? "token_chart_header_info_timeline_item token_chart_header_info_timeline_item_active" : "token_chart_header_info_timeline_item"}>
                          1d
                        </div>
                    </div>
                </div>
                <div className="token_chart_header_info_token">
                    <span>{new Date().toUTCString()}</span>
                    {/* <span>23:00</span> */}
                    {/* <span>Открытые: 29,337.5</span> */}
                    <span>Макс: {highPrice}</span>
                    <span>Мин: {lowPrice}</span>
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
          {isLoading ?  <div className="spinner-container">
        <div className="loading-spinner">
      </div>
      </div>
        :  (chartType == 1) ? <Original deleteChart={deleteChart} chartType={chartType} kline={kline} newData={newData} /> : <TradingView chartType={chartType}/>}
       
        </div>
    </div>
    );
  }
  
export default Main