import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
//import Home from './components/Home';
// import SingleBlog from './components/SingleBlog';
// import AddBlog from './components/AddBlog';
//import Navbar from './components/Navbar';
import Organizations from './components/Organizations'



const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			{/* <Navbar /> */}
			<Switch>
				<Route exact path="/" component={Organizations} />
				{/* <Route exact path="/blog/:id/admin" component={SingleBlog} />
				<Route exact path="/blog/add"  component={AddBlog} /> */}
			</Switch>
		</Router>
	)
};

interface IAppProps { }

export default App