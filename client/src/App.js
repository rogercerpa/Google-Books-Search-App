import React from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import Search from './pages/search';
import Saved from './pages/saved';
import Jumbotron from './components/jumbotron/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Jumbotron />
				<Switch>
					<Route exact path={[ '/search' ]}>
						<Search />
					</Route>
					<Route exact path={[ '/saved' ]}>
						<Saved />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
