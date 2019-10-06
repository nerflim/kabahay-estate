import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [show, setShow] = useState(false);
	const items = [
		{ title: 'News', url: '/' },
		{ title: 'Home Loan', url: '/' },
		{ title: 'Developers', url: '/' },
		{ title: 'Architects', url: '/' },
		{ title: 'Engineers', url: '/' }
	];

	return (
		<React.Fragment>
			<nav className='bg-primary p-2 shadow fixed w-full z-50'>
				<div className='container m-auto flex items-center justify-between flex-wrap'>
					<Link to='/'>
						<div className='flex items-center flex-shrink-0 text-white mr-8'>
							<svg className='fill-current h-8 w-8 mr-2' width='54' height='54' viewBox='0 0 54 54' xmlns='http://www.w3.org/2000/svg'>
								<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
							</svg>
							<span className='font-semibold text-xl tracking-tight'>Kabahay</span>
						</div>
					</Link>
					<div className='block lg:hidden'>
						<button
							className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white focus:outline-none'
							onClick={() => setShow(!show)}>
							<svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
								<title>Menu</title>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
							</svg>
						</button>
					</div>
					<div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!show ? 'hidden' : ''}`}>
						<div className='text-sm lg:flex-grow'>
							{items.map((item, index) => (
								<Link to={item.url} className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8' key={index}>
									{item.title}
								</Link>
							))}
						</div>
						<div>
							<Link to='/' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8'>
								Login
							</Link>
							<Link
								to='/sign-up'
								className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 focus:bg-transparent focus:text-white focus:border-white focus:outline-none'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<div className='clear-nav'></div>
		</React.Fragment>
	);
};

export default Nav;
