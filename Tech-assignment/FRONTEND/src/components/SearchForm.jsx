import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchForm() {
	return (
		<Form>
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

			<div className="input-group mb-3 p-2">
				<span className="input-group-text primary">Start date:</span>
				<input className="form-control" type="date" />
			</div>
			<div className="input-group mb-3 p-2">
				<span className="input-group-text">End date:</span>
				<input className="form-control" type="date" />
			</div>
			<div className="m-3 d-flex justify-content-center">
				<Button variant="secondary" type="submit">
					Search
				</Button>
			</div>
		</Form>
	);
}
