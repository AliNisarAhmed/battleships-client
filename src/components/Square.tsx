import { Square } from '../types';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useRef } from 'react';
import { toggleHighlightSquare } from '../store/boardSlice';
import { checkIfBoxHovered, checkIfBoxNotHovered } from '../utils';

interface Props {
	square: Square;
}
export const GameSquare = ({ square }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	const squareRef = useRef<any>(null);


	useEffect(() => {
		if (!square.hovered && squareRef.current && selectedShip) {
			const coordinates = squareRef.current.getBoundingClientRect();
			const condition = checkIfBoxHovered(selectedShip, coordinates);
			if (square.id === 100) {
				console.log('selectedShip :>> ', selectedShip);
				console.log('coordinates :>> ', coordinates);
				console.log('condition: ', condition);
			}
			if (condition) {
				dispatch(toggleHighlightSquare(square.id));
			}
		}

		// else if (square.hovered && squareRef.current && selectedShip) {
		// 	const coordinates = squareRef.current.getBoundingClientRect();
		// 	if (checkIfBoxNotHovered(selectedShip, coordinates)) {
		// 		dispatch(toggleHighlightSquare(square.id));
		// 	}
		// }
	}, [
		dispatch,
		selectedShip?.top,
		selectedShip?.right,
		selectedShip?.left,
		selectedShip?.bottom,
		square.hovered,
		square.id,
	]);

	const squareClass = classNames({
		'board-square': true,
		'hovered-square': square.hovered,
	});

	return (
		<div key={square.id} className={squareClass} ref={squareRef}>
			{square.id}
		</div>
	);
};
