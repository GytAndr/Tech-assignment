import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	loading: false,
};

export const stockSlice = createSlice({
	name: 'stocks',
	initialState,
	reducers: {
		pull: (state, action) => {
			state.stocks = action.payload;
		},
	},
});
