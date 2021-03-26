import { ShipSize, Square } from '../types';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useRef } from 'react';
import { highlightSquare, unHighlightSquare } from '../store/boardSlice';
import { checkIfBoxHovered } from '../utils';

interface Props {
	square: Square;
	hoveredSquares: number[];
}
export const SetupSquare = ({ square, hoveredSquares }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	const squareRef = useRef<any>(null);

	useEffect(() => {
		if (squareRef.current && selectedShip) {
			if (square.hovered) {
				const coordinates = squareRef.current.getBoundingClientRect();
				if (!checkIfBoxHovered(selectedShip, coordinates)) {
					dispatch(unHighlightSquare(square.id));
				}
			} else {
				const coordinates = squareRef.current.getBoundingClientRect();
				if (checkIfBoxHovered(selectedShip, coordinates)) {
					dispatch(highlightSquare(square.id));
				}
			}
		}
	}, [dispatch, selectedShip, square.hovered, square.id]);

	const squareClass = classNames({
		'board-square': true,
		'hovered-square-warn':
			selectedShip && square.hovered && hoveredSquares.length !== ShipSize[selectedShip.name],
		'hovered-square-clear':
			selectedShip && square.hovered && hoveredSquares.length === ShipSize[selectedShip.name],
	});

	return (
		<div key={square.id} className={squareClass} ref={squareRef}>
			{square.id}
		</div>
	);
};
