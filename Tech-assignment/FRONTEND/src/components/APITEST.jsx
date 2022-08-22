function APITEST() {
	async function testFetchAPI() {
		const response = await fetch(
			`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${
				import.meta.env.VITE_FINNHUB_API_KEY
			}`
		);
		const data = await response.json();
		console.log(data);
	}
	return (
		<div>
			<button onClick={testFetchAPI}>Fetch</button>
		</div>
	);
}
export default APITEST;
