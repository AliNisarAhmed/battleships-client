import { Square } from '../types';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useRef } from 'react';
import { highlightSquare, unHighlightSquare } from '../store/boardSlice';
import { checkIfBoxHovered } from '../utils';

interface Props {
	square: Square;
}
export const GameSquare = ({ square }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	const squareRef = useRef<any>(null);

	useEffect(() => {
		if (square.hovered && squareRef.current && selectedShip) {
			const coordinates = squareRef.current.getBoundingClientRect();
			if (!checkIfBoxHovered(selectedShip, coordinates)) {
				dispatch(unHighlightSquare(square.id));
			}
		} else if (!square.hovered && squareRef.current && selectedShip) {
			const coordinates = squareRef.current.getBoundingClientRect();
			if (checkIfBoxHovered(selectedShip, coordinates)) {
				dispatch(highlightSquare(square.id));
			}
		}
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