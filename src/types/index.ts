
export type PlaySquareStatus = 'Hidden' | 'Hit' | 'Empty';
export interface Square {
	id: number;
	hovered: boolean;
	status: PlaySquareStatus;
}

export interface Board {
	[key: string]: Square
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
	shipOrientation: ShipOrientation;
	x: number;
	y: number;
	width: number;
	height: number;
}

export type SelectedShipState = null | SelectedShip;

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

// TODO: probably rename this type
export type PlacedShipSquares =
	[] |
	[number] |
	[number, number] |
	[number, number, number] |
	[number, number, number, number] |
	[number, number, number, number, number];

export interface ShipEntity {
	entityName: ShipClass;
	squares: [] | PlacedShipSquares;
	placedOnBoard: boolean;
}

export type GameState = 'Human' | 'Computer' | 'HumanWon' | 'ComputerWon';

export interface BoardState {
	[key: string]: Square;
}