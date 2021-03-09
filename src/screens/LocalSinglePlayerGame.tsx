import { useAppSelector } from '../store/hooks';
import { PlayBoard } from '../components/PlayBoard';
import { Redirect } from 'react-router';

export const LocalSinglePlayerGame = () => {
	const computerBoard = useAppSelector((state) => state.computerBoard);
	const playerBoard = useAppSelector((state) => state.board);

	if (computerBoard === null) {
		return <Redirect to="/" />;
	}

	return (
		<div className="play-area">
			<PlayBoard board={playerBoard} player="Human" />
			<PlayBoard board={computerBoard} player="Computer" />
		</div>
	);
};
