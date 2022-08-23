import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	stock: {},
	candles: {},
	loading: false,
};
//API call for single Company
export const fetchStockFromAPI = createAsyncThunk(
	'stocks/fetchStock',
	async (searchTerm) => {
		const response = await fetch(
			`https://finnhub.io/api/v1/stock/profile2?symbol=${searchTerm}&token=${
				import.meta.env.VITE_FINNHUB_API_KEY
			}`
		).then((response) => response.json());
		return response;
	}
);
//API call for selected company candlechart
export const fetchCandleFromAPI = createAsyncThunk(
	'stocks/fetchCandles',
	async ({ searchTerm, startDate, endDate }) => {
		const response = await fetch(
			`https://finnhub.io/api/v1/stock/candle?symbol=${searchTerm}&resolution=D&from=${startDate}&to=${endDate}&token=${
				import.meta.env.VITE_FINNHUB_API_KEY
			}`
		).then((response) => response.json());
		return response;
	}
);
export const stockSlice = createSlice({
	name: 'stocks',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchStockFromAPI.fulfilled]: (state, action) => {
			state.stock = action.payload;
			state.loading = false;
		},
		[fetchStockFromAPI.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchCandleFromAPI.fulfilled]: (state, action) => {
			state.candles = action.payload;
			state.loading = false;
		},
		[fetchCandleFromAPI.pending]: (state, action) => {
			state.loading = true;
		},
	},
});
