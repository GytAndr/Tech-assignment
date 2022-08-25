import React from "react";
import Container from "react-bootstrap/Container";
import SearchForm from "./components/SearchForm";
import Loading from "./components/Loading";
import Company from "./components/Company";
import Chart from "./components/Chart";
import { useSelector } from "react-redux";

function App() {
	const showCompany = useSelector((state) => state.stocks.showCompany);
	const showChart = useSelector((state) => state.stocks.showChart);
	return (
		<Container className="mt-3">
			<SearchForm />
			{showCompany && <Company />}
			{showChart && <Chart />}
		</Container>
	);
}

export default App;
