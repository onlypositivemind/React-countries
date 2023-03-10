import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Extra, Status, Country } from 'types';

export const loadCountries = createAsyncThunk<Country[], undefined, { extra: Extra; rejectValue: string }>(
	'@@countries/load-countries',
	async (_, { extra: { client, api }, rejectWithValue }) => {
		try {
			const { data } = await client.get<Country[]>(api.ALL_COUNTRIES);
			return data;
		} catch {
			return rejectWithValue('Failed to fetch all countries');
		}
	},
);

interface CountriesState {
	error: null | string;
	status: Status;
	list: Country[];
}

const initialState: CountriesState = {
	error: null,
	status: 'idle',
	list: [],
};

const countriesSlice = createSlice({
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountries.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.payload as string;
			})
			.addCase(loadCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
				state.status = 'received';
				state.list = action.payload;
			});
	},
});

export const { reducer: countriesReducer } = countriesSlice;
