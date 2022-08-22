import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	stock: {
		country: 'US',
		currency: 'USD',
		exchange: 'NASDAQ NMS - GLOBAL MARKET',
		finnhubIndustry: 'Technology',
		ipo: '1980-12-12',
		logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
		marketCapitalization: 2756455.4436619994,
		name: 'Apple Inc',
		phone: '14089961010.0',
		shareOutstanding: 16070.8,
		ticker: 'AAPL',
		weburl: 'https://www.apple.com/',
	},
	loading: false,
};

export const stockSlice = createSlice({
	name: 'stocks',
	initialState,
	reducers: {
		pull: (state, action) => {
			const url = `url ${action.payload} end of url `;
			state.stock = url;
		},
	},
});
