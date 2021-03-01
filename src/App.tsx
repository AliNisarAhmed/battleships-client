import { Route, Switch } from 'react-router-dom';
import { LandingPage} from './screens/LandingPage';
import { LocalSinglePlayer } from './screens/LocalSinglePlayer';

function App() {
  return (
    <div className="app">
        <Switch>
          <Route path="/local">
            <LocalSinglePlayer />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
