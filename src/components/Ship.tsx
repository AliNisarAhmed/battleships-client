import { motion } from 'framer-motion';
import { ShipClass, ShipName, ShipSize } from '../types';
import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectShip, unselectShip } from '../store/selectedShipSlice';

interface Props {
	gameAreaRef: any;
	shipClass: ShipClass;
}

const Ship = ({ gameAreaRef, shipClass }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();
	const shipRef = useRef<any>(null);
	return (
		<motion.div
			onPointerDown={() => startDrag(ShipClass.PatrolBoat)}
			onPointerMove={() => movePointer(ShipClass.PatrolBoat)}
			onPointerUp={endDrag}
			drag
			// dragControls={dragControls}
			dragConstraints={gameAreaRef}
			className="ship"
			ref={shipRef}
		>
			{Array.from({ length: ShipSize[shipClass] }).map((v, i) => (
				<div></div>
			))}
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

export default Ship;
