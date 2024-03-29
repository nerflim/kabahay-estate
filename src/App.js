import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/includes/Nav';
import Home from './components/pages/home/Home';
import SearchProperty from './components/pages/search/property/SearchProperty';
import SearchAgent from './components/pages/search/agent/SearchAgent';
import Property from './components/pages/property/Property';
import SignUp from './components/pages/login/SignUp';
import Footer from './components/includes/Footer';
import LoginModal from './components/pages/login/LoginModal';
import AgentView from './components/pages/agent/View';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<div className='App text-gray-700'>
			{/* login modal */}
			{isLogin ? <LoginModal login={() => setIsLogin(!isLogin)} /> : null}

			{/* Nav */}
			<Nav login={() => setIsLogin(!isLogin)} />

			{/* Pages */}
			<Route exact path='/' component={Home} />
			<Route exact path='/search/property' component={SearchProperty} />
			<Route exact path='/search/property/view' component={Property} />
			<Route exact path='/search/agent' component={SearchAgent} />
			<Route exact path='/sign-up' component={SignUp} />
			<Route exact path='/agents/view' component={AgentView} />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
