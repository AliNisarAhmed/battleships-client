import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';
import { ChangeSquareStatusAction } from '../types/actions';

type PlayBoardState = null | Board;

const initialState = null as PlayBoardState;

export const computerBoardSlice = createSlice({
	name: 'computerBoard',
	initialState,
	reducers: {
		initializeComputerBoard: () => {
			const newState: Board = {};
			Array.from({ length: 100 }).forEach((_, i) => {
				newState[i + 1] = {
					id: i + 1,
					hovered: false,
					status: 'Hidden',
				};
			});
			return newState;
		},
		changeComputerSquareStatus: (state, action: PayloadAction<ChangeSquareStatusAction>) => {
			if (state) {
				state[action.payload.id].status = action.payload.newStatus;
			}
		},
		resetComputerBoard: () => null,
	},
});

export const {
	initializeComputerBoard,
	changeComputerSquareStatus,
	resetComputerBoard,
} = computerBoardSlice.actions;

export default computerBoardSlice.reducer;
