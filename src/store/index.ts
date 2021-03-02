import { configureStore } from '@reduxjs/toolkit';
import selectedShipReducer from './selectedShipSlice';
import boardReducer from './boardSlice';

 const store = configureStore({
	reducer: {
		selectedShip: selectedShipReducer,
		board: boardReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;