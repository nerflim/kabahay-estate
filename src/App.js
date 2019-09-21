import React from 'react';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';
import Search from './components/pages/search/Search';
import Footer from './components/includes/Footer';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App text-gray-700'>
			<Nav />
			<Route exact path='/' component={Home} />
			<Route path='/search' component={Search} />
			<Footer />
		</div>
	);
}

export default App;
