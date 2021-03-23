import { useCallback, useEffect } from 'react';
import { AppDispatch } from '../store';
import { rotateShip } from '../store/selectedShipSlice';
import { SelectedShipState } from '../types';

export const useKeydown = (selectedShip: SelectedShipState, dispatch: AppDispatch) => {
	const handleKeyUp = useCallback(
		(event) => {
			if (selectedShip && event.code === 'Space') {
				dispatch(rotateShip());
			}
		},
		[selectedShip, dispatch]
	);

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, [handleKeyUp]);
};
