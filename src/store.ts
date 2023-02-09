import axios from 'axios';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { themeReducer } from 'features/theme';
import { controlsReducer } from 'features/controls';
import { countriesReducer } from 'features/countries';
import { detailsReducer } from 'features/details';
import * as api from './config';

const rootReducer = combineReducers({
	theme: themeReducer,
	controls: controlsReducer,
	countries: countriesReducer,
	details: detailsReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['theme', 'controls'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor, useAppDispatch, type RootState };
