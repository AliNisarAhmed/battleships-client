import { Link } from 'react-router-dom';

export const LandingPage = () => {
	return (
		<div>
			<h1>BattleShips</h1>
			<ul>
				<li>
					<Link to="/local">Play against Computer</Link>
				</li>
				<li>Play Online (Coming Soon)</li>
			</ul>
		</div>
	);
};
