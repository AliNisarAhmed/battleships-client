import { configureStore } from '@reduxjs/toolkit';
import selectedShipReducer from './selectedShipSlice';
import boardReducer from './boardSlice';
import shipReducer from './shipSlice';

 const store = configureStore({
	reducer: {
		selectedShip: selectedShipReducer,
		board: boardReducer,
		ships: shipReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;