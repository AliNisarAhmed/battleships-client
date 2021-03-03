import { Coordinates, SelectedShip } from '../types';

export function checkIfBoxHovered(
	selectedShip: SelectedShip,
	{ top, left, right, bottom }: Coordinates
): boolean {
	return (
		// selectedShip.left > left &&
		// selectedShip.top > top &&
		// selectedShip.left < right &&
		// selectedShip.top < bottom
		Math.abs(selectedShip.top - top) < 20 && Math.abs(selectedShip.left - left) < 20
	);
}

export function checkIfBoxNotHovered(
	selectedShip: SelectedShip,
	{ top, left, right, bottom }: Coordinates
): boolean {
	return (
		selectedShip.left > right ||
		selectedShip.bottom < top ||
		selectedShip.right < left ||
		selectedShip.top > bottom
	);
}
