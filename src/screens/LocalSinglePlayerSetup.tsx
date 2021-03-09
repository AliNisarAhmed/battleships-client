import SetupBoard from '../components/SetupBoard';
import Shipyard from '../components/Shipyard';
import Controls from '../components/Controls';
import { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { rotateShip } from '../store/selectedShipSlice';

export const LocalSinglePlayerSetup = () => {
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
				<SetupBoard />
				<Shipyard />
				<Controls />
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
