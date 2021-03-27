import SetupBoard from '../components/SetupBoard';
import Shipyard from '../components/Shipyard';
import Controls from '../components/Controls';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useKeydown } from '../customHooks/useKeydown';

export const LocalSinglePlayerSetup = () => {
	const gameAreaRef = useRef(null);
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const board = useAppSelector(state => state.board);
	const dispatch = useAppDispatch();

	const hoveredSquares = Object.entries(board).filter(([id, sqr]) => sqr.hovered).map(([_, sqr]) => sqr.id)

	useKeydown(selectedShip, dispatch);

	return (
		<div className="setup">
			<div className="setup-area" ref={gameAreaRef}>
				<SetupBoard hoveredSquares={hoveredSquares}/>
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
