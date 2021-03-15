import { BoardState, GameState } from '../types';
import { PlaySquare } from '../components/PlaySquare';

interface Props {
	board: BoardState;
	player: GameState;
}

export const PlayBoard = ({ board, player }: Props) => {
	return (
		<div className={`game-board ${player.toLowerCase()}-board`}>
			{Object.entries(board).map(([id, square]) => (
				<PlaySquare key={`${id}-player`} square={square} squareOwner={player} />
			))}
		</div>
	);
};
