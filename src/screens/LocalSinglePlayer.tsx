import GameBoard from '../components/GameBoard';
import Shipyard from '../components/Shipyard';
import { useRef } from 'react';
import { useAppSelector } from '../store/hooks';

export const LocalSinglePlayer = () => {
	const gameAreaRef = useRef(null);
	const selectedShip = useAppSelector((state) => state.selectedShip);

	return (
		<div className="game">
			<div className="game-area" ref={gameAreaRef}>
				<GameBoard />
				<Shipyard gameAreaRef={gameAreaRef}/>
				<h2>{selectedShip?.name}</h2>
				<p>{selectedShip?.left}</p>
				<p>{selectedShip?.right}</p>
				<p>{selectedShip?.top}</p>
				<p>{selectedShip?.bottom}</p>
				<p>{selectedShip?.width}</p>
				<p>{selectedShip?.height}</p>
			</div>
		</div>
	);
};
