import { motion } from 'framer-motion';
import { PlacedShipSquares, ShipClass, ShipName, ShipSize } from '../types';
import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectShip, unselectShip, updateShip } from '../store/selectedShipSlice';
import { placeShipOnBoard } from '../store/shipSlice';
import { clearHoveredSquares } from '../store/boardSlice';

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
	const board = useAppSelector((state) => state.board);
	const dispatch = useAppDispatch();
	const shipRef = useRef<any>(null);
	const shipContainerRef = useRef<any>(null);

	return (
		<div className="ship-container" ref={shipContainerRef}>
			<motion.div
				onPointerDown={() => startDrag(shipClass)}
				onPointerMove={() => movePointer(shipClass)}
				onPointerUp={() => endDrag(shipClass)}
				drag
				dragConstraints={shipContainerRef}
				className={`ship ${shipClass}`}
				ref={shipRef}
				dragElastic={0.98}
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
			const { top, left, bottom, right } = shipRef.current.getBoundingClientRect();
			dispatch(
				updateShip({
					top,
					left,
					bottom,
					right,
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

	function endDrag(shipName: ShipName) {
		if (selectedShip) {
			const hoveredSquares = Object.entries(board)
				.filter(([id, sqr]) => sqr.hovered)
				.map(([_, sq]) => sq.id) as PlacedShipSquares;
			if (hoveredSquares.length === ShipSize[shipName]) {
				dispatch(
					placeShipOnBoard({
						shipName,
						squares: hoveredSquares,
					})
				);
				dispatch(clearHoveredSquares(hoveredSquares));
				dispatch(unselectShip());
			} else {
				dispatch(clearHoveredSquares(hoveredSquares));
				dispatch(unselectShip());
			}
		}
	}
};

export default Ship;
