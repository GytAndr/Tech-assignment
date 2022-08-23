import React from 'react';
import Row from 'react-bootstrap/Row';
import Anchor from 'react-bootstrap/Anchor';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function Company() {
	const company = useSelector((state) => state.stocks.stock);
	return (
		<Row className="justify-content-center">
			<Card
				className="flex-column p-4 align-items-center"
				style={{ width: 'auto' }}
			>
				<Card.Img
					src={company.logo}
					className=""
					style={{ height: '128px', width: '128px' }}
				></Card.Img>
				<Card.Body>
					<ListGroup as="ul" variant="flush">
						<ListGroup.Item as="li">Name: {company.ticker}</ListGroup.Item>
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
