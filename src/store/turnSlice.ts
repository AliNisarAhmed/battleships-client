import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../types';

const initialState = 'Human' as Player;

const turnSlice = createSlice({
	initialState,
	name: 'turnSlice',
	reducers: {
		changeTurn: (state) => (state === 'Human' ? 'Computer' : 'Human'),
	},
});

export const { changeTurn } = turnSlice.actions;

export default turnSlice.reducer;
