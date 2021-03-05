import { motion } from 'framer-motion';
import { ShipClass, ShipName, ShipSize } from '../types';
import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectShip, unselectShip } from '../store/selectedShipSlice';
import classNames from 'classnames';

interface Props {
	gameAreaRef: any;
	shipClass: ShipClass;
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};

const Ship = ({ gameAreaRef, shipClass }: Props) => {
	const selectedShip = useAppSelector((state) => state.selectedShip);
	const dispatch = useAppDispatch();
	const shipRef = useRef<any>(null);
	const shipContainerRef = useRef<any>(null);
	const shipClassNames = classNames({
		ship: true,
		horizontal:
			selectedShip &&
			selectedShip.name === shipClass &&
			selectedShip.shipOrientation === 'Horizontal',
		vertical:
			selectedShip &&
			selectedShip.name === shipClass &&
			selectedShip.shipOrientation === 'Vertical',
	});

	return (
		<div className="ship-container" ref={shipContainerRef}>
			<motion.div
				onPointerDown={() => startDrag(shipClass)}
				onPointerMove={() => movePointer(shipClass)}
				onPointerUp={endDrag}
				drag
				// dragControls={dragControls}
				dragConstraints={shipContainerRef}
				// className={shipClassNames}
				className="ship"
				ref={shipRef}
				dragElastic={0.98}
				// layout
				transition={spring}
				animate={{
					rotate:
						selectedShip &&
						selectedShip.name === shipClass &&
						selectedShip.shipOrientation === 'Horizontal'
							? 0
							: selectedShip &&
							  selectedShip.name === shipClass &&
							  selectedShip.shipOrientation === 'Vertical'
							? 90
							: undefined,
				}}
			>
				{Array.from({ length: ShipSize[shipClass] }).map((v, i) => (
					<div key={i}></div>
				))}
			</motion.div>
		</div>
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
			dispatch(
				selectShip({
					name,
					top,
					left,
					bottom,
					right,
					x,
					y,
					width,
					height,
					shipOrientation: selectedShip.shipOrientation,
				})
			);
		}
	}

	function startDrag(name: ShipName) {
		console.log('Starting Drag: ');
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
			dispatch(
				selectShip({
					name,
					top,
					left,
					bottom,
					right,
					x,
					y,
					width,
					height,
					shipOrientation: 'Horizontal',
				})
			);
		}
	}

	function endDrag(event: any) {
		if (selectedShip) {
			dispatch(unselectShip());
		}
	}
};

export default Ship;
