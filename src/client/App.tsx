import * as React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './components/Organizations'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/streams/organizations/:id" component={Organization} />
			
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App