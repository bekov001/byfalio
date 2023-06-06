import React, { useEffect, useRef} from 'react';
import Chart from "react-apexcharts";
import CandleStickChart from './CandleStickChart';

function Original({kline, newData}){
  return ( <div className='trading_original'>
    
  {kline ? <CandleStickChart data={kline} newData={newData} /> : "Loading"}
  </div>
  )
}

// function Original({kline}){
//   const series = [{
//     data: 
//       kline
    
//   }];
//   const options = {
//     chart: {
//       type: 'candlestick',
//       height: 350,
//       toolbar: {
//         show: false
//       },
//       zoom: {
//         enabled: false
//       }

//     },
//     // title: {
//     //   text: 'CandleStick Chart',
//     //   align: 'left'
//     // },
//     xaxis: {
//       type: 'datetime',
   
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true
//       },
     
//     },
    
//   }

//     return (
//       <div className='trading_original'>
          
//           <div>
//             <Chart options={options} series={series} type="candlestick" />
//         </div>
//       </div>  
//     );
// }
export default Original