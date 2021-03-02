export interface Square {
	id: number;
	hovered: boolean;
}

export type ShipName = 'Carrier' | 'BattleShip' | 'Destroyer' | 'Submarine' | 'PatrolBoat';

export interface SelectedShip {
	name: ShipName;
	top: number;
	left: number;
	right: number;
	bottom: number;
}

export type Ship = Carrier | BattleShip | Destroyer | Submarine | PatrolBoat;

export type Carrier = {
	name: 'Carrier';
	size: 5;
};

export type BattleShip = {
	name: 'BattleShip';
	size: 4;
};

export type Destroyer = {
	name: 'Destroyer';
	size: 3;
};

export type Submarine = {
	name: 'Submarine';
	size: 3;
};

export type PatrolBoat = {
	name: 'PatrolBoat';
	size: 2;
};
