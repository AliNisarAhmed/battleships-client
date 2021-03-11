import { Coordinates, SelectedShip, ShipEntity } from '../types';

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
