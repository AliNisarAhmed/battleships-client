import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Square } from '../types';

type BoardState = Square[];

const initialState: BoardState = Array.from({ length: 100 }, (_, i) => ({
	id: i + 1,
	hovered: false,
}));

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		highlightSquare: (state, action: PayloadAction<number>) => {
			let square = state.find((b) => b.id === action.payload);
			if (square) {
				square.hovered = true;
			}
		},
		unHighlightSquare: (state, action: PayloadAction<number>) => {
			let square = state.find((b) => b.id === action.payload);
			if (square) {
				square.hovered = false;
			}
		},
	},
});

export const { highlightSquare, unHighlightSquare } = boardSlice.actions;

export default boardSlice.reducer;
