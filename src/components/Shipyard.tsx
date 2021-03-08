import { FC, useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import Ship from './Ship';

interface Props {}

const Shipyard: FC<Props> = () => {
	const ships = useAppSelector((state) => state.ships);
	const shipyardRef = useRef<any>(null);

	return (
		<div className="shipyard" ref={shipyardRef}>
			{ships
				.filter((s) => !s.placedOnBoard)
				.map((ship) => (
					<Ship gameAreaRef={shipyardRef} shipClass={ship.entityName} key={ship.entityName} />
				))}
		</div>
	);
};

export default Shipyard;
