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
		rotateShip: (state) => {
			if (state !== null) {
				if (state.shipOrientation === 'Horizontal') {
					state.shipOrientation = 'Vertical';
				} else {
					state.shipOrientation = 'Horizontal';
				}
			}
		},
	},
});

export const { selectShip, unselectShip, rotateShip } = selectedShipSlice.actions;

export default selectedShipSlice.reducer;
