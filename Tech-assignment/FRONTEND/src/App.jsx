import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import APITEST from './components/APITEST';

function App() {
	return (
		<Container className="mt-3">
			<SearchForm />
			<APITEST />
		</Container>
	);
}

export default App;
