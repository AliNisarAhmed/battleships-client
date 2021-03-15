import { Board, Coordinates, SelectedShip, ShipEntity } from '../types';

export function checkIfBoxHovered(
	selectedShip: SelectedShip,
	{ top, left, right, bottom }: Coordinates
): boolean {
	let topCenter = top + 25;
	let leftCenter = left + 25;
	return (
		topCenter > selectedShip.top &&
		topCenter < selectedShip.bottom &&
		leftCenter > selectedShip.left &&
		leftCenter < selectedShip.right
	);
}

export function checkIfShipOnSquare(squareId: number, ships: ShipEntity[]): boolean {
	return ships.flatMap((s) => s.squares).includes(squareId);
}

export function randomBetween(start: number, end: number): number {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

export function timeout(secs: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, secs);
	});
}

export function checkWinCondition(board: Board, ships: ShipEntity[]): boolean {
	const hitSquares = Object.entries(board)
		.filter(([id, square]) => square.status === 'Hit')
		.map(([id, square]) => square.id);

	const shipSquares = ships.flatMap((ship) => ship.squares);

	return arrayCompare(hitSquares, shipSquares);
}

function arrayCompare(arr1: any[], arr2: any[]): boolean {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const copy1 = [...arr1].sort((a, b) => a - b);
	const copy2 = [...arr2].sort((a, b) => a - b);

	for (let i = 0; i < copy1.length; i++) {
		if (copy1[i] !== copy2[i]) {
			return false;
		}
	}

	return true;
}
