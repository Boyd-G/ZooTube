import * as React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Animals from './Components/Animals';
import SingleOrganization from './Components/SingleOrganization';
import Organizations from './Components/Organizations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/animals" component={Animals} />
				<Route exact path="/streams/organizations/:id"  component={SingleOrganization} />
				<Route exact path="/streams/organizations"  component={Organizations} />
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App 