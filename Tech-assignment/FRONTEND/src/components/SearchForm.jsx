import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function SearchForm() {
	//temp state
	const [validated, setValidated] = useState(false);
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Row>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="companyInputField">Company symbol</Form.Label>
						<InputGroup hasValidation className="position-relative">
							<InputGroup.Text>
								<i className="bi bi-building"></i>
							</InputGroup.Text>
							<Form.Control
								type="text"
								id="companyInputField"
								placeholder="Enter symbol e.g. AAPL"
								required
							/>
							<Form.Control.Feedback
								tooltip
								type="invalid"
								className="position-absolute"
								style={{ top: '-35px' }}
							>
								Search input should have only letters and less then 35
								characters
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Col>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="startDateInputField">Start date:</Form.Label>
						<Form.Control id="startDateInputField" type="date" />
					</Form.Group>
				</Col>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="endDateInputField">Start date:</Form.Label>
						<Form.Control id="endDateInputField" type="date" />
					</Form.Group>
				</Col>
				<Col sm className="d-flex justify-content-center align-items-end mb-3">
					<Button variant="secondary" type="submit">
						Search
					</Button>
				</Col>
			</Form>
		</Row>
	);
}
