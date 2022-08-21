import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

export default function SearchForm() {
	//Onchange make RegEx validation,
	//if regex fail
	//set isInvalid=true && SetErrorMsg()
	//if regex pass
	//set isInvalid=false && setErrorMsg(null)
	//pass value to state => setInputValue(e.target.value)
	const onChangeValidate = (e) => {
		const regEx = new RegExp(/^[A-Za-z\s]*$/);
		if (!regEx.test(e.target.value)) {
			setRegIsValid(true);
			setErrorMsg('Please enter only letters including space');
		} else {
			setRegIsValid(false);
			setErrorMsg('');
			setInputValue(e.target.value);
		}
	};
	// const [validated, setValidated] = useState(false);
	// const handleSubmit = (event) => {
	// 	const form = event.currentTarget;
	// 	if (form.checkValidity() === false) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 	}
	// 	setValidated(true);
	// };
	const [inputValue, setInputValue] = useState();
	const [errorMsg, setErrorMsg] = useState('');
	const [regIsValid, setRegIsValid] = useState();
	return (
		<Row>
			<Form>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="companyInputField">Company symbol</Form.Label>

						{regIsValid ? (
							<Alert variant="danger small p-1">{errorMsg}</Alert>
						) : null}

						<InputGroup hasValidation className="position-relative">
							<InputGroup.Text>
								<i className="bi bi-building"></i>
							</InputGroup.Text>
							<Form.Control
								type="text"
								id="companyInputField"
								placeholder="Enter symbol e.g. AAPL"
								required
								isInvalid={regIsValid}
								maxLength="35"
								onChange={onChangeValidate}
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
					<Button variant="secondary" type="submit">
						Search
					</Button>
				</Col>
			</Form>
		</Row>
	);
}
