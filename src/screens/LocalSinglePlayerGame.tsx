import { useAppDispatch, useAppSelector } from '../store/hooks';
import { PlayBoard } from '../components/PlayBoard';
import { Redirect, useHistory } from 'react-router';
import { resetComputerBoard } from '../store/computerBoardSlice';
import { resetComputerShips } from '../store/computerShipSlice';
import { resetHumanShips } from '../store/shipSlice';
import { resetHumanBoard } from '../store/boardSlice';

export const LocalSinglePlayerGame = () => {
	const history = useHistory();

	const computerBoard = useAppSelector((state) => state.computerBoard);
	const playerBoard = useAppSelector((state) => state.board);
	const winner = useAppSelector((state) => state.turn);

	const dispatch = useAppDispatch();

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
						<button onClick={playAgain}>Play Again?</button>
						<button onClick={backToHomeScreen}>Back to Homescreen</button>
					</>
				))}
		</div>
	);

	function backToHomeScreen() {
		return history.replace('/');
	}

	function playAgain() {
		dispatch(resetComputerBoard());
		dispatch(resetComputerShips());
		dispatch(resetHumanShips());
		dispatch(resetHumanBoard());
		return history.replace('/local')
	}
};
