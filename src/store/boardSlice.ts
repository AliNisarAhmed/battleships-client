import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlacedShipSquares, ShipClass, Square } from '../types';

interface BoardState {
	[key: string]: Square;
}

const initialState: BoardState = {};

Array.from({ length: 100 }).forEach((_, i) => {
	initialState[i + 1] = {
		id: i + 1,
		hovered: false,
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
			action.payload.forEach(sq => {
				state[sq].hovered = false;
			})
		}
	},
});

export const { highlightSquare, unHighlightSquare, clearHoveredSquares } = boardSlice.actions;

export default boardSlice.reducer;
