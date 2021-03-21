import { useAppSelector } from '../store/hooks';
import { PlayBoard } from '../components/PlayBoard';
import { Redirect, useHistory } from 'react-router';

export const LocalSinglePlayerGame = () => {

	const history = useHistory();

	const computerBoard = useAppSelector((state) => state.computerBoard);
	const playerBoard = useAppSelector((state) => state.board);
	const winner = useAppSelector((state) => state.turn);

	if (computerBoard === null) {
		return <Redirect to="/" />;
	}

	return (
		<div className="play-area">
			<PlayBoard board={playerBoard} player="Human" />
			<PlayBoard board={computerBoard} player="Computer" />
			<h2>{winner}</h2>
			{winner === 'ComputerWon' ||
				(winner === 'HumanWon' && (
					<>
						<button onClick={() => true}>Play Again?</button>
						<button onClick={backToHomeScreen}>Back to Homescreen</button>
					</>
				))}
		</div>
	);

	function backToHomeScreen() {
		history.replace('/');
	}
};
