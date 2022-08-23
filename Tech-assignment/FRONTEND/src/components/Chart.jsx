import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

function Chart() {
	const candlesData = useSelector((state) => state.stocks.candles);
	const convertToDate = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleDateString('en-DE');
	};
	var trace = {
		x: candlesData.t?.map((item) => convertToDate(item)),
		close: candlesData.c,
		high: candlesData.h,
		low: candlesData.l,
		open: candlesData.o,

		// cutomise colors
		increasing: { line: { color: 'black' } },
		decreasing: { line: { color: 'red' } },

		type: 'candlestick',
		xaxis: 'x',
		yaxis: 'y',
	};
	return (
		<Plot
			data={[trace]}
			layout={{
				dragmode: 'zoom',
				showlegend: false,
				xaxis: {
					rangeslider: {
						visible: false,
					},
				},
			}}
		/>
	);
}

export default Chart;
