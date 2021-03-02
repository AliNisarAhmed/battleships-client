import GameBoard from '../components/GameBoard';
import Frigate from '../components/Frigate';
import { useRef } from 'react';
import { useAppSelector } from '../store/hooks';

export const LocalSinglePlayer = () => {
	const gameAreaRef = useRef(null);
	const selectedShip = useAppSelector((state) => state.selectedShip);

	return (
		<div className="game">
			<div className="game-area" ref={gameAreaRef}>
				<GameBoard />
				<Frigate gameAreaRef={gameAreaRef} />
				<h2>{selectedShip.value?.name}</h2>
			</div>
		</div>
	);
};
