import { useHistory } from 'react-router';
import { initializeComputerBoard } from '../store/computerBoardSlice';
import { initializeComputerShips } from '../store/computerShipSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Controls = () => {
	const history = useHistory();
	const ships = useAppSelector((state) => state.ships);
	const dispatch = useAppDispatch();

	return (
		<div className="controls">
			<button disabled={ships.some((s) => !s.placedOnBoard)} onClick={startGame}>
				Play
			</button>
		</div>
	);

	function startGame() {
		dispatch(initializeComputerShips());
		dispatch(initializeComputerBoard());
		history.push('/local/game');
	}
};

export default Controls;
