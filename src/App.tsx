import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { LocalSinglePlayerSetup } from './screens/LocalSinglePlayerSetup';
import { LocalSinglePlayerGame } from './screens/LocalSinglePlayerGame';

function App() {
	return (
		<div className="app">
			<Switch>
				<Route path="/local/game">
					<LocalSinglePlayerGame />
				</Route>
				<Route path="/local">
					<LocalSinglePlayerSetup />
				</Route>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
