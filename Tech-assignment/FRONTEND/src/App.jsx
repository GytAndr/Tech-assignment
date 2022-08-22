import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import Loading from './components/Loading';

function App() {
	return (
		<Container className="mt-3">
			<SearchForm />
			<Loading />
		</Container>
	);
}

export default App;
