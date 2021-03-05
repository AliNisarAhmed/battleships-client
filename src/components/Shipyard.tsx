import { FC, useRef } from 'react';
import { ShipClass } from '../types';
import Ship from './Ship';

interface Props {
	gameAreaRef: any;
}

const Shipyard: FC<Props> = ({ gameAreaRef }) => {
	const shipyardRef = useRef<any>(null);

	return (
		<div className="shipyard" ref={shipyardRef} >
			<Ship gameAreaRef={shipyardRef} shipClass={ShipClass.PatrolBoat} />
			<Ship gameAreaRef={shipyardRef} shipClass={ShipClass.Submarine} />
			<Ship gameAreaRef={shipyardRef} shipClass={ShipClass.Destroyer} />
			<Ship gameAreaRef={shipyardRef} shipClass={ShipClass.Battleship} />
			<Ship gameAreaRef={shipyardRef} shipClass={ShipClass.Carrier} />
		</div>
	);
};

export default Shipyard;
