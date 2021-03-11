import { configureStore } from '@reduxjs/toolkit';
import selectedShipReducer from './selectedShipSlice';
import boardReducer from './boardSlice';
import shipReducer from './shipSlice';
import computerBoardReducer from './computerBoardSlice';
import computerShipReducer from './computerShipSlice';
import turnReducer from './turnSlice';

const store = configureStore({
	devTools: true,
	reducer: {
		selectedShip: selectedShipReducer,
		board: boardReducer,
		ships: shipReducer,
		computerBoard: computerBoardReducer,
		computerShips: computerShipReducer,
		turn: turnReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
