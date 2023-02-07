import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegionType } from '../types/region';

interface ControlsState {
	search: string;
	region: RegionType | '';
}

const initialState: ControlsState = {
	search: '',
	region: '',
};

export const controlsSlice = createSlice({
	name: '@@controls',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setRegion: (state, action: PayloadAction<RegionType | ''>) => {
			state.region = action.payload;
		},
		clearControls: () => initialState,
	},
});

export const { reducer: controlsReducer } = controlsSlice;
export const { actions: controlsActions } = controlsSlice;