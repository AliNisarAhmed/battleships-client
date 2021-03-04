export interface Square {
	id: number;
	hovered: boolean;
}

// export type ShipName = 'Carrier' | 'BattleShip' | 'Destroyer' | 'Submarine' | 'PatrolBoat';
export type ShipName =
	| ShipClass.Carrier
	| ShipClass.Battleship
	| ShipClass.Destroyer
	| ShipClass.Submarine
	| ShipClass.PatrolBoat;

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
