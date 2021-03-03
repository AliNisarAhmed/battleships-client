import { motion, useDragControls } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectShip, unselectShip } from '../store/selectedShipSlice';
import { ShipName } from '../types';

interface Props {
	gameAreaRef: any;
}

const Frigate = ({ gameAreaRef }: Props) => {
	const dragControls = useDragControls();
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();

	return (
		<motion.div
			onPointerDown={(event: any) => startDrag(event, 'PatrolBoat')}
			onPointerMove={(event: any) => movePointer(event, 'PatrolBoat')}
			onPointerUp={endDrag}
			drag
			dragControls={dragControls}
			dragConstraints={gameAreaRef}
			className="frigate"
		>
			<div></div>
			<div></div>
		</motion.div>
	);

	function movePointer(event: any, name: ShipName) {
		if (selectedShip) {
			const { top, left, bottom, right } = event.target.getBoundingClientRect();
			dispatch(selectShip({ name, top, left, bottom, right }));
		}
	}

	function startDrag(event: any, name: ShipName) {
		if (!selectedShip) {
			const { top, left, right, bottom } = event.target.getBoundingClientRect();
			dispatch(selectShip({ name, top, left, bottom, right }));
		}
	}

	function endDrag(event: any) {
		if (selectedShip) {
			dispatch(unselectShip());
		}
	}
};

export default Frigate;
