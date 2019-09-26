import React from 'react';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';
import SearchProperty from './components/pages/search/SearchProperty';
import Property from './components/pages/property/Property';
import Footer from './components/includes/Footer';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App text-gray-700'>
			<Nav />
			<Route exact path='/' component={Home} />
			<Route exact path='/search-property' component={SearchProperty} />
			<Route exact path='/search-property/view' component={Property} />
			<Footer />
		</div>
	);
}

export default App;
