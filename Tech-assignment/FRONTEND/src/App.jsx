import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import Loading from './components/Loading';
import Company from './components/Company';
import Chart from './components/Chart';
import { useSelector } from 'react-redux';

function App() {
	const loading = useSelector((state) => state.stocks.loading);
	return (
		<Container className="mt-3">
			<SearchForm />
			{loading ? <Loading /> : <Company />}
			<Chart />
		</Container>
	);
}

export default App;
