import classNames from 'classnames';
import { changeHumanSquareStatus } from '../store/boardSlice';
import { changeComputerSquareStatus } from '../store/computerBoardSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeTurn } from '../store/turnSlice';
import { BoardState, Player, ShipEntity, Square } from '../types';
import { checkIfShipOnSquare, randomBetween, timeout } from '../utils';

interface Props {
	square: Square;
	player: Player;
}

export const PlaySquare = ({ square, player }: Props) => {
	const turn = useAppSelector((state) => state.turn);
	const computerShips = useAppSelector((state) => state.computerShips);
	const humanBoard = useAppSelector((state) => state.board);
	const humanShips = useAppSelector((state) => state.ships);

	const dispatch = useAppDispatch();

	const squareClassName = classNames({
		'board-square': true,
		'hidden-square': square.status === 'Hidden',
		'empty-square': square.status === 'Empty',
		'hit-square': square.status === 'Hit',
	});

	if (player === 'Computer') {
		return (
			<div className={squareClassName} onClick={onSquareClick}>
				{square.id}
			</div>
		);
	} else {
		return <div className={squareClassName}>{square.id}</div>;
	}

	async function onSquareClick() {
		if (turn === 'Human' && computerShips) {
			// check if the square belongs to a ship
			if (checkIfShipOnSquare(square.id, computerShips)) {
				dispatch(changeComputerSquareStatus({ id: square.id, newStatus: 'Hit' }));
			} else {
				dispatch(changeComputerSquareStatus({ id: square.id, newStatus: 'Empty' }));
			}
			dispatch(changeTurn());

			await computerTurn(humanBoard, humanShips);

			dispatch(changeTurn());
		}
	}

	async function computerTurn(humanBoard: BoardState, humanShips: ShipEntity[]): Promise<void> {
		await timeout(2000);

		const hiddenSquares = Object.entries(humanBoard).filter(
			([id, square]) => square.status === 'Hidden'
		);

		const targetedSquare = hiddenSquares[randomBetween(0, hiddenSquares.length - 1)];

		const id = targetedSquare[1].id;

		if (checkIfShipOnSquare(id, humanShips)) {
			dispatch(changeHumanSquareStatus({ id, newStatus: 'Hit' }));
		} else {
			dispatch(changeHumanSquareStatus({ id, newStatus: 'Empty' }));
		}
	}
};
