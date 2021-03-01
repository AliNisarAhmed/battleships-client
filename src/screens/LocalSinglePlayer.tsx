import GameBoard from '../components/GameBoard';
import Frigate from '../components/Frigate';
import { useRef } from 'react';

export const LocalSinglePlayer = () => {
	const gameAreaRef = useRef(null);
	return (
		<div className="game">
			<div className="game-area" ref={gameAreaRef}>
				<GameBoard />
				<Frigate gameAreaRef={gameAreaRef}/>
			</div>
		</div>
	);
};
