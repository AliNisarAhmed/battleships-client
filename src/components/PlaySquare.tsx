import classNames from 'classnames';
import { Player, Square } from '../types';

interface Props {
	square: Square;
	player: Player;
}

export const PlaySquare = ({ square, player }: Props) => {
	const squareClassName = classNames({
		'board-square': true,
		'hidden-square': square.status === 'Hidden',
		'empty-square': square.status === 'Empty',
		'hit-square': square.status === 'Hit',
	});

	if (player === 'Computer') {
		return <div className={squareClassName}>{square.id}</div>;
	} else {
		return <div className={squareClassName}>{square.id}</div>;
	}
};
