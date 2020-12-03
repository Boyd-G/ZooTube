import * as React from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				{/* <Route exact path="/chirp/:id/admin" component={SingleChirp} />
				<Route exact path="/chirp/add"  component={AddChirp} /> */}
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App