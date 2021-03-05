import GameBoard from '../components/GameBoard';
import Shipyard from '../components/Shipyard';
import { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { rotateShip } from '../store/selectedShipSlice';

export const LocalSinglePlayer = () => {
	const gameAreaRef = useRef(null);
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	const handlKeyDown = useCallback(
		(event) => {
			if (selectedShip && event.code === 'Space') {
				dispatch(rotateShip());
			}
		},
		[selectedShip, dispatch]
	);

	useEffect(() => {
		document.addEventListener('keyup', handlKeyDown);

		return () => {
			document.removeEventListener('keyup', handlKeyDown);
		};
	}, [selectedShip, handlKeyDown]);

	return (
		<div className="game">
			<div className="game-area" ref={gameAreaRef}>
				<GameBoard />
				<Shipyard gameAreaRef={gameAreaRef} />
				<h2>{selectedShip?.name}</h2>
				<p>{selectedShip?.left}</p>
				<p>{selectedShip?.right}</p>
				<p>{selectedShip?.top}</p>
				<p>{selectedShip?.bottom}</p>
				<p>{selectedShip?.width}</p>
				<p>{selectedShip?.height}</p>
				<p>{selectedShip?.shipOrientation}</p>
			</div>
		</div>
	);
};
