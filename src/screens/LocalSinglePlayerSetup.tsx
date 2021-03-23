import SetupBoard from '../components/SetupBoard';
import Shipyard from '../components/Shipyard';
import Controls from '../components/Controls';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useKeydown } from '../customHooks/useKeydown';

export const LocalSinglePlayerSetup = () => {
	const gameAreaRef = useRef(null);
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	useKeydown(selectedShip, dispatch);

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
