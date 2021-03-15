import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../types';

const initialState = 'Human' as GameState;

const turnSlice = createSlice({
	initialState,
	name: 'turnSlice',
	reducers: {
		changeTurn: (state) => (state === 'Human' ? 'Computer' : 'Human'),
		setWinner: (_, action: PayloadAction<GameState>) => action.payload,
	},
});

export const { changeTurn, setWinner } = turnSlice.actions;

export default turnSlice.reducer;
