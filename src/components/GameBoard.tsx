import { Board } from '../types';

const boards: Board[] = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));

const GameBoard = () => {
	return (
		<div className="game-board">
			{boards.map((b) => (
				<div key={b.id} className="board-square">
					{b.id}
				</div>
			))}
		</div>
	);
};

export default GameBoard;
