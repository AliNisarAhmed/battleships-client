import { PlacedShipSquares, PlaySquareStatus, ShipName } from '.';

export interface PlaceShipAction {
	shipName: ShipName;
	squares: PlacedShipSquares;
}

export interface UpdateShipAction {
	top: number;
	left: number;
	right: number;
	bottom: number;
}

export interface ChangeSquareStatusAction {
	id: number;
	newStatus: PlaySquareStatus;
}
