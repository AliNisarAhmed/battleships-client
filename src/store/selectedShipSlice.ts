import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedShip } from '../types';

interface SelectedShipState {
	value: null | SelectedShip;
}

const initialState: SelectedShipState = {
	value: null,
};

export const selectedShipSlice = createSlice({
	name: 'selectedShip',
	initialState,
	reducers: {
		selectShip: (state, action: PayloadAction<SelectedShip>) => {
			state.value = action.payload;
		},
		unselectShip: (state) => {
			state.value = null;
		},
	},
});

export const { selectShip, unselectShip } = selectedShipSlice.actions;

export default selectedShipSlice.reducer;
