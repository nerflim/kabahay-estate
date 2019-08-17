import React from 'react';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Home />
		</div>
	);
}

export default App;
