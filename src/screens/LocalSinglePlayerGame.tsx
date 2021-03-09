import { useAppSelector } from '../store/hooks';
import { PlaySquare } from '../components/PlaySquare';

export const LocalSinglePlayerGame = () => {
	const computerBoard = useAppSelector((state) => state.computerBoard);
	const playerBoard = useAppSelector((state) => state.board);
	return (
		<div className="play-area">
			<div className="game-board human-board">
				{playerBoard &&
					Object.entries(playerBoard).map(([id, square]) => (
						<PlaySquare key={`${id}-player`} square={square} />
					))}
			</div>
			<div className="game-board computer-board">
				{computerBoard &&
					Object.entries(computerBoard).map(([id, square]) => (
						<PlaySquare key={`${id}-computer`} square={square} />
					))}
			</div>
		</div>
	);
};
