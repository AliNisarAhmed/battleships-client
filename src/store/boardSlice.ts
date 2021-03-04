import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Square } from '../types';

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
	},
});

export const { highlightSquare, unHighlightSquare } = boardSlice.actions;

export default boardSlice.reducer;
