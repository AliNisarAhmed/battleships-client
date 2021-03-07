export interface Square {
	id: number;
	hovered: boolean;
}

export type ShipName =
	| ShipClass.Carrier
	| ShipClass.Battleship
	| ShipClass.Destroyer
	| ShipClass.Submarine
	| ShipClass.PatrolBoat;

type ShipOrientation = 'Horizontal' | 'Vertical';

export interface SelectedShip {
	name: ShipName;
	top: number;
	left: number;
	right: number;
	bottom: number;
	x: number;
	y: number;
	width: number;
	height: number;
	shipOrientation: ShipOrientation;
}

export enum ShipClass {
	Carrier = 'Carrier',
	Battleship = 'Battleship',
	Destroyer = 'Destroyer',
	Submarine = 'Submarine',
	PatrolBoat = 'PatrolBoat',
}

export interface Coordinates {
	top: number;
	left: number;
	bottom: number;
	right: number;
}

export const ShipSize = {
	[ShipClass.Carrier]: 5,
	[ShipClass.Battleship]: 4,
	[ShipClass.Destroyer]: 3,
	[ShipClass.Submarine]: 3,
	[ShipClass.PatrolBoat]: 2,
};

export interface ShipEntity {
	entityName: ShipClass;
	squares: [] | [number, number, number?, number?, number?];
	placedOnBoard: boolean;
}
