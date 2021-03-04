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

export type Carrier = {
	name: ShipClass.Carrier;
	size: 5;
};

export type Battleship = {
	name: ShipClass.Battleship;
	size: 4;
};

export type Destroyer = {
	name: ShipClass.Destroyer;
	size: 3;
};

export type Submarine = {
	name: ShipClass.Submarine;
	size: 3;
};

export type PatrolBoat = {
	name: ShipClass.PatrolBoat;
	size: 2;
};
