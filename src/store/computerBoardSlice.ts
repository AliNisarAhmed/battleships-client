import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';

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
	},
});

export const { initializeComputerBoard } = computerBoardSlice.actions;

export default computerBoardSlice.reducer;
