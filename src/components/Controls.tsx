import { useHistory } from 'react-router';
import { useAppSelector } from '../store/hooks';

const Controls = () => {
	const history = useHistory();
	const ships = useAppSelector((state) => state.ships);

	return (
		<div className="controls">
			<button disabled={ships.some((s) => !s.placedOnBoard)} onClick={startGame}>
				Play
			</button>
		</div>
	);

	function startGame() {
		history.push('/local/game');
	}
};

export default Controls;
