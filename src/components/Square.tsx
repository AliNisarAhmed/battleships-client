import { Square } from '../types';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useRef } from 'react';
import { highlightSquare } from '../store/boardSlice';

interface Props {
	square: Square;
}
export const GameSquare = ({ square }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	const squareRef = useRef<any>(null);

	useEffect(() => {
		if (!square.hovered && squareRef.current && selectedShip.value) {
			const squareRect = squareRef.current.getBoundingClientRect();
			const { top, bottom, left, right } = squareRect;
			if (
				selectedShip.value.left > left &&
				selectedShip.value.top > top &&
				selectedShip.value.left < right &&
				selectedShip.value.top < bottom
			) {
				dispatch(highlightSquare(square.id));
			}
		}
	}, [dispatch, selectedShip.value?.top, selectedShip.value?.right, square.hovered, square.id]);

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
