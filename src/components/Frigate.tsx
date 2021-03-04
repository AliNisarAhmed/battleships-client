import { motion, useDragControls } from 'framer-motion';
import { useRef } from 'react';
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
	const shipRef = useRef<any>(null);

	return (
		<motion.div
			onPointerDown={() => startDrag('PatrolBoat')}
			onPointerMove={() => movePointer('PatrolBoat')}
			onPointerUp={endDrag}
			drag
			dragControls={dragControls}
			dragConstraints={gameAreaRef}
			className="frigate"
			ref={shipRef}
		>
			<div></div>
			<div></div>
		</motion.div>
	);

	function movePointer(name: ShipName) {
		if (selectedShip && shipRef.current) {
			const {
				top,
				left,
				bottom,
				right,
				x,
				y,
				width,
				height,
			} = shipRef.current.getBoundingClientRect();
			dispatch(selectShip({ name, top, left, bottom, right, x, y, width, height }));
		}
	}

	function startDrag(name: ShipName) {
		if (!selectedShip && shipRef.current) {
			const {
				top,
				left,
				right,
				bottom,
				x,
				y,
				width,
				height,
			} = shipRef.current.getBoundingClientRect();
			dispatch(selectShip({ name, top, left, bottom, right, x, y, width, height }));
		}
	}

	function endDrag(event: any) {
		if (selectedShip) {
			dispatch(unselectShip());
		}
	}
};

export default Frigate;
