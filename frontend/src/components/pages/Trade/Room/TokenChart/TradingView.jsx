import React, { useEffect, useRef} from 'react';
function TradingView(){
  let tvScriptLoadingPromise;
  const onLoadScriptRef = useRef();
  useEffect(
      () => {
        onLoadScriptRef.current = createWidget;
  
        if (!tvScriptLoadingPromise) {
          tvScriptLoadingPromise = new Promise((resolve) => {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.type = 'text/javascript';
            script.onload = resolve;
  
            document.head.appendChild(script);
          });
        }
  
        tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());
  
        return () => onLoadScriptRef.current = null;
  
        function createWidget() {
          if (document.getElementById('tradingview_ad52b') && 'TradingView' in window) {
            new window.TradingView.widget({
              autosize: true,
              symbol: "BINANCE:BTCUSDT.P",
              interval: "5",
              timezone: "Etc/UTC",
              theme: "dark",
              style: "1",
              locale: "en",
              toolbar_bg: "#f1f3f6",
              enable_publishing: false,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              withdateranges: true,
              container_id: "tradingview_ad52b",
              custom_css_url: '../chart.css',
              overrides:
              {
                "paneProperties.background": "#1a1a1a",
                "paneProperties.vertGridProperties.color": "#1a1a1a",
                "paneProperties.horzGridProperties.color": "#1a1a1a",
                "symbolWatermarkProperties.transparency": 90,
                "scalesProperties.textColor": "#AAA",
                "scalesProperties.bgColor": "#AAA",
                "scalesProperties.fontSize": 11,
                "paneProperties.topMargin": 15,
              },
            });
          }
        }
      },
      []
    );

  return (
      <div className="token_chart">
      {/* <div className="token_chart_main"> */}
      
      {/* <div className='tradingview-widget-container'> */}
      <div id='tradingview_ad52b' />
      <div className="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">Bitcoin chart</span></a> by TradingView
      </div>
      {/* </div>                  */}
      {/* </div> */}
  </div>
  );
}
export default TradingView