import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShipClass, ShipEntity } from '../types';

export type ComputerShips = null | ShipEntity[];

const initialState = null as ComputerShips;

const testInitialPosition: ShipEntity[] = [
	{
		entityName: ShipClass.Carrier,
		placedOnBoard: true,
		squares: [41, 42, 43, 44, 45],
	},
	{
		entityName: ShipClass.Battleship,
		placedOnBoard: true,
		squares: [49, 59, 69, 79],
	},
	{
		entityName: ShipClass.Destroyer,
		placedOnBoard: true,
		squares: [82, 83, 84],
	},
	{
		entityName: ShipClass.Submarine,
		placedOnBoard: true,
		squares: [6, 7, 8],
	},
	{
		entityName: ShipClass.PatrolBoat,
		placedOnBoard: true,
		squares: [11, 12],
	},
];

const computerShipSlice = createSlice({
	name: 'computerShipSlice',
	initialState,
	reducers: {
		initializeComputerShips: () => {
			return testInitialPosition;
		},
		resetComputerShips: () => null,
	},
});

export const { initializeComputerShips, resetComputerShips } = computerShipSlice.actions;

export default computerShipSlice.reducer;
