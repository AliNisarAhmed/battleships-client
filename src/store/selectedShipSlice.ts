import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedShip } from '../types';

type SelectedShipState = null | SelectedShip;

const initialState: SelectedShipState = null as SelectedShipState;

export const selectedShipSlice = createSlice({
	name: 'selectedShip',
	initialState,
	reducers: {
		selectShip: (_, action: PayloadAction<SelectedShip>) => action.payload,
		unselectShip: (_) => null,
	},
});

export const { selectShip, unselectShip } = selectedShipSlice.actions;

export default selectedShipSlice.reducer;
