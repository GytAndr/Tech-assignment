import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import { stockSlice } from '../store/stockSlice';

function Company() {
	const dispatch = useDispatch();
	const company = useSelector((state) => state.stocks.stock);
	const showCandlesChart = () => {
		dispatch(stockSlice.actions.showChart());
	};
	return (
		<Row className="justify-content-center">
			<Card
				className="flex-column p-4 align-items-center"
				style={{ width: 'auto' }}
			>
				<Card.Img
					src={company.logo}
					title="press to show chart"
					style={{ height: '128px', width: '128px', cursor: 'pointer' }}
					onClick={showCandlesChart}
				></Card.Img>
				<Card.Body>
					<ListGroup as="ul" variant="flush">
						<ListGroup.Item
							as="li"
							style={{ cursor: 'pointer' }}
							title="press to show chart"
							onClick={showCandlesChart}
						>
							Name: {company.ticker}
						</ListGroup.Item>
						<ListGroup.Item as="li">Country: {company.country}</ListGroup.Item>
						<ListGroup.Item as="li">
							Currency: {company.currency}
						</ListGroup.Item>
						<ListGroup.Item as="a" href={company.weburl} target="_blank">
							Website: {company.weburl}
						</ListGroup.Item>
					</ListGroup>
				</Card.Body>
			</Card>
		</Row>
	);
}

export default Company;
