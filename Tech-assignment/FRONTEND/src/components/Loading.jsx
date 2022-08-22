import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

function Loading() {
	return (
		<Row className="justify-content-center mt-3">
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</Row>
	);
}

export default Loading;
