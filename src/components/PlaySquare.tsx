import { Square } from '../types';

interface Props {
	square: Square;
}

export const PlaySquare = ({ square }: Props) => {
	return <div className="board-square">{square.id}</div>;
};
