import { useAppSelector } from '../store/hooks';
import { GameSquare } from './Square';

const GameBoard = () => {
	const board = useAppSelector((state) => state.board);
	return (
		<div className="game-board">
			{Object.entries(board).map(([id, sq]) => (
				<GameSquare square={sq} key={sq.id} />
			))}
		</div>
	);
};

export default GameBoard;
