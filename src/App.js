import React from 'react';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';
import Footer from './components/includes/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
