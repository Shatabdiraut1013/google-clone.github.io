import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/search'>
						{/* <SearchPage /> */}
						<SearchPage />
					</Route>

					<Route path='/'>
						<Home />
					</Route>
				</Switch>

				{/* home page with the search on */}

				{/* search page */}
			</Router>
		</div>
	);
}

export default App;
