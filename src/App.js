import React, { useState } from 'react';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';
import SearchProperty from './components/pages/search/SearchProperty';
import Property from './components/pages/property/Property';
import SignUp from './components/pages/login/SignUp';
import Footer from './components/includes/Footer';
import { Route } from 'react-router-dom';
import Login from './components/pages/login/Login';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<div className='App text-gray-700'>
			{/* login modal */}
			{isLogin ? <Login login={() => setIsLogin(!isLogin)} /> : null}

			<Nav login={() => setIsLogin(!isLogin)} />

			<Route exact path='/' component={Home} />
			<Route exact path='/search-property' component={SearchProperty} />
			<Route exact path='/search-property/view' component={Property} />
			<Route exact path='/sign-up' component={SignUp} />
			<Footer />
		</div>
	);
}

export default App;
