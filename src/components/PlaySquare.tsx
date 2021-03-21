import classNames from 'classnames';
import { useCallback, useEffect } from 'react';
import { computerTurnTimeout } from '../settings';
import { changeHumanSquareStatus } from '../store/boardSlice';
import { changeComputerSquareStatus } from '../store/computerBoardSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeTurn, setWinner } from '../store/turnSlice';
import { BoardState, GameState, ShipEntity, Square } from '../types';
import { checkIfShipOnSquare, checkWinCondition, randomBetween, timeout } from '../utils';

interface Props {
	square: Square;
	squareOwner: GameState;
}

export const PlaySquare = ({ square, squareOwner }: Props) => {
	const turn = useAppSelector((state) => state.turn);
	const computerBoard = useAppSelector((state) => state.computerBoard);
	const computerShips = useAppSelector((state) => state.computerShips);
	const humanBoard = useAppSelector((state) => state.board);
	const humanShips = useAppSelector((state) => state.ships);

	const dispatch = useAppDispatch();

	const computerTurn = useCallback(
		async (humanBoard: BoardState, humanShips: ShipEntity[]) => {
			await timeout(computerTurnTimeout);

			const hiddenSquares = Object.entries(humanBoard).filter(
				([id, square]) => square.status === 'Hidden'
			);

			const targetedSquare = hiddenSquares[randomBetween(0, hiddenSquares.length - 1)];

			const id = targetedSquare[1].id;

			if (checkIfShipOnSquare(id, humanShips)) {
				dispatch(changeHumanSquareStatus({ id, newStatus: 'Hit' }));
				// check win condition here
				const result = checkWinCondition(humanBoard!, humanShips!);
				if (result) {
					dispatch(setWinner('ComputerWon'));
				}
			} else {
				dispatch(changeHumanSquareStatus({ id, newStatus: 'Empty' }));
			}
		},
		[dispatch]
	);

	useEffect(() => {
		if (square.status === 'Hit' && squareOwner === 'Computer') {
			squareHit();
		}

		if (square.status === 'Empty' && squareOwner === 'Computer') {
			squareMiss();
		}

		async function squareMiss() {
			dispatch(changeTurn());
			await computerTurn(humanBoard, humanShips);
			dispatch(changeTurn());
		}

		async function squareHit() {
			const result = checkWinCondition(computerBoard!, computerShips!);

			if (result) {
				dispatch(setWinner('HumanWon'));
			} else {
				dispatch(changeTurn());
				await computerTurn(humanBoard, humanShips);
				dispatch(changeTurn());
			}
		}
	}, [square.status]);

	const squareClassName = classNames({
		'board-square': true,
		'hidden-square': square.status === 'Hidden',
		'empty-square': square.status === 'Empty',
		'hit-square': square.status === 'Hit',
	});

	if (squareOwner === 'Computer') {
		return (
			<div className={squareClassName} onClick={onSquareClick}>
				{square.id}
			</div>
		);
	} else {
		return <div className={squareClassName}>{square.id}</div>;
	}

	async function onSquareClick() {
		if (turn === 'Human') {
			if (computerShips && computerBoard) {
				// check if the square belongs to a ship
				if (checkIfShipOnSquare(square.id, computerShips)) {
					dispatch(changeComputerSquareStatus({ id: square.id, newStatus: 'Hit' }));
				} else {
					dispatch(changeComputerSquareStatus({ id: square.id, newStatus: 'Empty' }));
				}
			}
		}
	}
};
