import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, PlacedShipSquares, Square } from '../types';
import { ChangeSquareStatusAction } from '../types/actions';

const initialState: BoardState = {};

Array.from({ length: 100 }).forEach((_, i) => {
	initialState[i + 1] = {
		id: i + 1,
		hovered: false,
		status: 'Hidden',
	};
});

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		highlightSquare: (state, action: PayloadAction<number>) => {
			state[action.payload].hovered = true;
		},
		unHighlightSquare: (state, action: PayloadAction<number>) => {
			state[action.payload].hovered = false;
		},
		clearHoveredSquares: (state, action: PayloadAction<PlacedShipSquares>) => {
			action.payload.forEach((sq) => {
				state[sq].hovered = false;
			});
		},
		changeHumanSquareStatus: (state, action: PayloadAction<ChangeSquareStatusAction>) => {
			if (state) {
				state[action.payload.id].status = action.payload.newStatus;
			}
		},
	},
});

export const {
	highlightSquare,
	unHighlightSquare,
	clearHoveredSquares,
	changeHumanSquareStatus,
} = boardSlice.actions;

export default boardSlice.reducer;
