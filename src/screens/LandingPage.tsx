import { Link } from 'react-router-dom';

export const LandingPage = () => {
	return (
		<div className="landing-page">
			<h1 className="landing-page-title">BattleShips</h1>
			<div className="landing-page-menu-container">
				<ul className="landing-page-menu">
					<li className="landing-page-menu-link">
						<Link to="/local">Play against Computer</Link>
					</li>
					<li className="landing-page-menu-link">Play Online (Coming Soon)</li>
				</ul>
			</div>
		</div>
	);
};
