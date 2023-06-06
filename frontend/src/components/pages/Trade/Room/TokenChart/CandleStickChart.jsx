import React, {useRef, useEffect} from 'react'
import { createChart, ColorType } from 'lightweight-charts';

export default function CandleStickChart(props) {
        const {
            data, newData
        } = props
        const series = {
            // upColor: '#00ff00',
            // downColor: '#ff0000', 
            // borderDownColor: 'rgba(255, 144, 0, 1)',
            // borderUpColor: 'rgba(255, 144, 0, 1)',
            // wickDownColor: 'rgba(255, 144, 0, 1)',
            // wickUpColor: 'rgba(255, 144, 0, 1)',
        }

    const chartContainerRef = useRef();
	// let newSeries;
   const options= {
	// width: 1000,
  	height: 500,
	layout: {
		backgroundColor: '#242424',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.1)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.1)',
		},
	},
	priceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
		timeVisible: true,
		secondsVisible: false,
	},
}
    useEffect(
		() => {
			
				const handleResize = () => {
					chart.applyOptions({ width: chartContainerRef.current.clientWidth });
				};
	
				const chart = createChart(chartContainerRef.current, options);
				chart.timeScale().fitContent();
	
				const newSeries = chart.addCandlestickSeries(series);
				newSeries.setData(data);
	
				window.addEventListener('resize', handleResize);
				// console.log(10)
				return () => {
					window.removeEventListener('resize', handleResize);
	
					chart.remove();
				};
			}
			
			,
		[data, options, series]
	);
		
	// useEffect(
	//  () => {
	// 	// if (newSeries && newData){
	// 	// 	newSeries.update(newData)
	// 	// }
	// }, [newData])
	
	return (
		<div
			ref={chartContainerRef}
		/>
	);
 
  
}
