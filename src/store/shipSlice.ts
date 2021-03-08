import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShipClass, ShipEntity } from '../types';
import { PlaceShipAction } from '../types/actions';

const initialState: ShipEntity[] = [
	{ entityName: ShipClass.Carrier, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.Battleship, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.Destroyer, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.Submarine, placedOnBoard: false, squares: [] },
	{ entityName: ShipClass.PatrolBoat, placedOnBoard: false, squares: [] },
];

export const shipSlice = createSlice({
	name: 'shipSlice',
	initialState,
	reducers: {
		placeShipOnBoard: (state, action: PayloadAction<PlaceShipAction>) => {
			const selectedShip = state.find(s => s.entityName === action.payload.shipName);
			if (selectedShip) {
				selectedShip.placedOnBoard = true;
				selectedShip.squares = action.payload.squares
			}
		},
	},
});

export const { placeShipOnBoard } = shipSlice.actions;

export default shipSlice.reducer;