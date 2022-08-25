import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchStockFromAPI, fetchCandleFromAPI } from "../store/stockSlice";

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
			setErrorMsg("Please enter only letters including space");
		} else {
			setRegIsInvalid(false);
			setErrorMsg("");
			setInputValue(e.target.value);
		}
	};
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		const propsObj = {
			searchTerm: inputValue,
			startDate: dateConverter(startDate),
			endDate: dateConverter(endDate),
		};
		dispatch(fetchStockFromAPI(inputValue));
		dispatch(fetchCandleFromAPI(propsObj));
		sendDataToBackend();
		setInputValue("");
	};
	const dateConverter = (date) => {
		//converts to UNIX for API call
		return new Date(date).getTime() / 1000;
	};
	const isFormValid = () => {
		return inputValue && startDate && endDate;
	};
	const sendDataToBackend = () => {
		// prettier-ignore
		const sendData = {
			"company": inputValue,
			"startDate": startDate,
			"endDate": endDate
		};
		fetch("http://localhost:3001/log", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(sendData),
		});
	};
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [regIsInvalid, setRegIsInvalid] = useState();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	return (
		<>
			<Form noValidate onSubmit={handleSubmit}>
				<Row>
					<Col sm>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="companyInputField">
								Company symbol
							</Form.Label>

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
									value={inputValue || ""}
									isInvalid={regIsInvalid}
									maxLength="35"
									minLength="1"
									onChange={onChangeValidate}
								/>
							</InputGroup>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm lg={6}>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="startDateInputField">Start date:</Form.Label>
							<Form.Control
								id="startDateInputField"
								type="date"
								required
								value={startDate || ""}
								onChange={(e) => setStartDate(e.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col sm lg={6}>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="endDateInputField">End date:</Form.Label>
							<Form.Control
								id="endDateInputField"
								type="date"
								required
								value={endDate || ""}
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col
						sm
						className="d-flex justify-content-center align-items-end mb-3"
					>
						<Button variant="secondary" type="submit" disabled={!isFormValid()}>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}
