import { BoardState, Player } from '../types';
import { PlaySquare } from '../components/PlaySquare';

interface Props {
	board: BoardState;
	player: Player;
}

export const PlayBoard = ({ board, player }: Props) => {
	return (
		<div className={`game-board ${player.toLowerCase()}-player`}>
			{Object.entries(board).map(([id, square]) => (
				<PlaySquare key={`${id}-player`} square={square} />
			))}
		</div>
	);
};
