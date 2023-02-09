import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { themeReducer } from 'features/theme';
import { controlsReducer } from 'features/controls';
import { countriesReducer } from 'features/countries';
import { detailsReducer } from 'features/details';

import * as api from './config';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		controls: controlsReducer,
		countries: countriesReducer,
		details: detailsReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
