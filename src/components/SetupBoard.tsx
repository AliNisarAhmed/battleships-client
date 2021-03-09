import { useAppSelector } from '../store/hooks';
import { SetupSquare } from './SetupSquare';
import { OccupiedSquare } from './OccupiedSquare';

const SetupBoard = () => {
	const board = useAppSelector((state) => state.board);
	const ships = useAppSelector((state) => state.ships);

	const occupiedBoardIds = ships.flatMap((s) => s.squares);

	return (
		<div className="game-board">
			{Object.entries(board).map(([id, sq]) =>
				occupiedBoardIds.includes(sq.id) ? (
					<OccupiedSquare />
				) : (
					<SetupSquare square={sq} key={sq.id} />
				)
			)}
		</div>
	);
};

export default SetupBoard;
