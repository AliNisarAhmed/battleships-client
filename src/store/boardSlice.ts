import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, PlacedShipSquares, Square } from '../types';
import { ChangeSquareStatusAction } from '../types/actions';

const initialState: BoardState = Array.from({ length: 100 }).reduce<BoardState>((acc, _, i) => {
	acc[i + 1] = {
		id: i + 1,
		hovered: false,
		status: 'Hidden',
	};
	return acc;
}, {});

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
		resetHumanBoard: (_) => initialState,
	},
});

export const {
	highlightSquare,
	unHighlightSquare,
	clearHoveredSquares,
	changeHumanSquareStatus,
	resetHumanBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
