import { FC } from 'react';
import { ShipClass } from '../types';
import Ship from './Ship';

interface Props {
	gameAreaRef: any;
}

const Shipyard: FC<Props> = ({ gameAreaRef }) => {
	return (
		<div className="shipyard">
			<Ship gameAreaRef={gameAreaRef} shipClass={ShipClass.PatrolBoat} />
			<Ship gameAreaRef={gameAreaRef} shipClass={ShipClass.Submarine} />
			<Ship gameAreaRef={gameAreaRef} shipClass={ShipClass.Destroyer} />
			<Ship gameAreaRef={gameAreaRef} shipClass={ShipClass.Battleship} />
			<Ship gameAreaRef={gameAreaRef} shipClass={ShipClass.Carrier} />
		</div>
	);
};

export default Shipyard;
