import { useMemo } from 'react';
import { useAppSelector } from '../store/hooks';
import { GameSquare } from './GameSquare';
import { OccupiedSquare } from './OccupiedSquare';

const GameBoard = () => {
	const board = useAppSelector((state) => state.board);
	const ships = useAppSelector((state) => state.ships);

	const occupiedBoardIds = useMemo(() => ships.flatMap((s) => s.squares), [ships]);

	return (
		<div className="game-board">
			{Object.entries(board).map(([id, sq]) =>
				occupiedBoardIds.includes(sq.id) ? (
					<OccupiedSquare />
				) : (
					<GameSquare square={sq} key={sq.id} />
				)
			)}
		</div>
	);
};

export default GameBoard;
