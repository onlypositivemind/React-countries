import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const loadCountryByName = createAsyncThunk<Country, string, { extra: Extra; rejectValue: string }>(
	'@@details/load-country-by-name',
	async (name, { extra: { client, api }, rejectWithValue }) => {
		try {
			const { data } = await client.get<Country[]>(api.searchByCountry(name));
			return data[0];
		} catch {
			return rejectWithValue('Failed to fetch country');
		}
	},
);

export const loadNeighborsByBorder = createAsyncThunk<string[], string[], { extra: Extra }>(
	'@@details/load-neighbors',
	async (borders, { extra: { client, api }, rejectWithValue }) => {
		try {
			const { data } = await client.get<Country[]>(api.filterByCode(borders));
			return data.map((item: any) => item.name);
		} catch {
			return rejectWithValue('Failed to fetch neighbors');
		}
	},
);

interface DetailsState {
	currentCountry: null | Country;
	neighbors: string[];
	errorCountry: null | string;
	errorNeighbors: null | string;
	statusCountry: Status;
	statusNeighbors: Status;
}

const initialState: DetailsState = {
	currentCountry: null,
	errorCountry: null,
	statusCountry: 'idle',
	neighbors: [],
	errorNeighbors: null,
	statusNeighbors: 'idle',
};

const detailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {
		clearDetails: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountryByName.pending, (state) => {
				state.statusCountry = 'loading';
				state.errorCountry = null;
			})
			.addCase(loadCountryByName.rejected, (state, action) => {
				state.statusCountry = 'rejected';
				state.errorCountry = action.payload as string;
			})
			.addCase(loadCountryByName.fulfilled, (state, action: PayloadAction<Country>) => {
				state.statusCountry = 'received';
				state.currentCountry = action.payload;
			})

			.addCase(loadNeighborsByBorder.pending, (state) => {
				state.statusNeighbors = 'loading';
				state.errorNeighbors = null;
			})
			.addCase(loadNeighborsByBorder.rejected, (state, action) => {
				state.statusNeighbors = 'rejected';
				state.errorNeighbors = action.payload as string;
			})
			.addCase(loadNeighborsByBorder.fulfilled, (state, action: PayloadAction<string[]>) => {
				state.statusNeighbors = 'received';
				state.neighbors = action.payload || [];
			});
	},
});

export const { reducer: detailsReducer } = detailsSlice;
export const { actions: detailsActions } = detailsSlice;
