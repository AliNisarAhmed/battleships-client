import { Coordinates, SelectedShip } from '../types';

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