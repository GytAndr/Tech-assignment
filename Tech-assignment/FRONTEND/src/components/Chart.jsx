import React from 'react';
import Plot from 'react-plotly.js';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useSelector } from 'react-redux';

function Chart() {
	const candlesData = useSelector((state) => state.stocks.candles);
	const company = useSelector((state) => state.stocks.stock);
	const convertToDate = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleDateString('en-DE');
	};
	var trace = {
		x: candlesData.t?.map((item) => convertToDate(item)),
		close: candlesData.c,
		high: candlesData.h,
		low: candlesData.l,
		open: candlesData.o,

		increasing: { line: { color: 'green' } },
		decreasing: { line: { color: 'red' } },

		type: 'candlestick',
		xaxis: 'x',
		yaxis: 'y',
	};
	return (
		<Row>
			<Col className="d-flex justify-content-center">
				<Plot
					data={[trace]}
					layout={{
						title: { text: company.ticker },
						dragmode: false,
						autosize: true,
						showlegend: false,
						margin: {
							autoexpand: true,
						},

						xaxis: {
							rangeslider: {
								visible: false,
							},
						},
					}}
					useResizeHandler
				/>
			</Col>
		</Row>
	);
}

export default Chart;
