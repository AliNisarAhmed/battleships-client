import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShipClass, ShipEntity } from '../types';

const initialState: ShipEntity[] = [
	{ entityName: ShipClass.Carrier, placedOnBoard: true, squares: [1, 2, 3] },
	{ entityName: ShipClass.Battleship, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.Destroyer, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.Submarine, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.PatrolBoat, placedOnBoard: false, squares: [] },
];

export const shipSlice = createSlice({
	name: 'shipSlice',
	initialState,
	reducers: {
		placeShipOnBoard: (state) => state,
	},
});

export const { placeShipOnBoard } = shipSlice.actions;

export default shipSlice.reducer;