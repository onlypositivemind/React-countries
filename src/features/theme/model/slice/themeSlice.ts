import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../types/theme';

const themeSlice = createSlice({
	name: '@@theme',
	initialState: 'light' as ThemeType,
	reducers: {
		setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
	},
});

export const { reducer: themeReducer } = themeSlice;
export const { actions: themeActions } = themeSlice;