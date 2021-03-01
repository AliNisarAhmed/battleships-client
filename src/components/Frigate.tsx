import { motion, useDragControls } from 'framer-motion';

interface Props {
	gameAreaRef: any;
}

const Frigate = ({ gameAreaRef }: Props) => {
	const dragControls = useDragControls();

	return (
		<motion.div
			onPointerDown={startDrag}
			onPointerMove={movePointer}
			drag
			dragControls={dragControls}
			dragConstraints={gameAreaRef}
			className="frigate"
		>
			<div></div>
			<div></div>
		</motion.div>
	);

	function movePointer(event: any) {
		console.log('move event: ', event);
	}

	function startDrag(event: any) {
		console.log('event: ', event);
	}
};

export default Frigate;
