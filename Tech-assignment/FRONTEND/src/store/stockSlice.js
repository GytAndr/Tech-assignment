import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	stock: {},
	loading: false,
};
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

export const stockSlice = createSlice({
	name: 'stocks',
	initialState,
	reducers: {
		pull: (state, action) => {
			const url = `url ${action.payload} end of url `;
			state.stock = url;
		},
	},
	extraReducers: {
		[fetchStockFromAPI.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.stock = action.payload;
			state.loading = false;
		},
		[fetchStockFromAPI.pending]: (state, action) => {
			state.loading = true;
		},
	},
});
