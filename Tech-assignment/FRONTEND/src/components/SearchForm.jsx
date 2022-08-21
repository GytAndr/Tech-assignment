import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchForm() {
	return (
		<Row>
			<Col sm>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="companyInputField">Company symbol</Form.Label>
					<InputGroup>
						<InputGroup.Text>
							<i className="bi bi-building"></i>
						</InputGroup.Text>
						<Form.Control
							type="text"
							id="companyInputField"
							placeholder="Enter symbol e.g. AAPL"
						/>
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
				<Button variant="secondary" type="button">
					Search
				</Button>
			</Col>
		</Row>
	);
}
