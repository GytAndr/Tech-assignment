import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockFromAPI, fetchCandleFromAPI } from '../store/stockSlice';

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
			setRegIsInvalid(true);
			setErrorMsg('Please enter only letters including space');
		} else {
			setRegIsInvalid(false);
			setErrorMsg('');
			setInputValue(e.target.value);
		}
	};
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			setValidated(true);
		}
		event.preventDefault();
		const propsObj = {
			searchTerm: inputValue,
			startDate: dateConverter(startDate),
			endDate: dateConverter(endDate),
		};
		dispatch(fetchStockFromAPI(inputValue));
		dispatch(fetchCandleFromAPI(propsObj));
		setValidated(false);
		setInputValue('');
	};
	const dateConverter = (date) => {
		//converts to UNIX for API call
		return new Date(date).getTime() / 1000;
	};
	const dispatch = useDispatch();
	const [validated, setValidated] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [regIsInvalid, setRegIsInvalid] = useState();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	const TempOnCLickHAndler = () => {};
	return (
		<Row>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="companyInputField">Company symbol</Form.Label>

						{regIsInvalid ? (
							<Alert variant="danger small p-1">{errorMsg}</Alert>
						) : null}

						<InputGroup hasValidation className="position-relative">
							<InputGroup.Text>
								<i className="bi bi-building"></i>
							</InputGroup.Text>
							<Form.Control
								type="text"
								id="companyInputField"
								placeholder="Company symbol: AAPL e.g."
								required
								value={inputValue || ''}
								isInvalid={regIsInvalid}
								maxLength="35"
								onChange={onChangeValidate}
							/>
						</InputGroup>
					</Form.Group>
				</Col>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="startDateInputField">Start date:</Form.Label>
						<Form.Control
							id="startDateInputField"
							type="date"
							value={startDate || ''}
							onChange={(e) => setStartDate(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="endDateInputField">Start date:</Form.Label>
						<Form.Control
							id="endDateInputField"
							type="date"
							value={endDate || ''}
							onChange={(e) => setEndDate(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm className="d-flex justify-content-center align-items-end mb-3">
					<Button variant="secondary" type="submit" disabled={regIsInvalid}>
						Search
					</Button>
				</Col>
			</Form>
		</Row>
	);
}
