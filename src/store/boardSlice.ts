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
		toggleHighlightSquare: (state, action: PayloadAction<number>) => {
			let square = state.find((b) => b.id === action.payload);
			if (square) {
				square.hovered = !square.hovered;
			}
		},
	},
});

export const { toggleHighlightSquare } = boardSlice.actions;

export default boardSlice.reducer;
