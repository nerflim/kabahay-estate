import React, { useState, useEffect } from 'react';

const Nav = () => {
	const [isHome, setIsHome] = useState(window.location.pathname === '/');

	useEffect(() => {
		console.log(isHome);
	}, [isHome]);
	return (
		<nav className={isHome ? 'bg-transparent p-2 fixed w-full' : 'bg-primary p-2 shadow fixed w-full'}>
			<div className='container m-auto flex items-center justify-between flex-wrap'>
				<div className='flex items-center flex-shrink-0 text-white mr-8'>
					<svg className='fill-current h-8 w-8 mr-2' width='54' height='54' viewBox='0 0 54 54' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
					</svg>
					<span className='font-semibold text-xl tracking-tight'>Kabahay</span>
				</div>
				<div className='block lg:hidden'>
					<button className='flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white'>
						<svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
					<div className='text-sm lg:flex-grow'>
						<a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8'>
							News
						</a>
						<a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8'>
							Home Loan
						</a>
						<a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
							Developers
						</a>
					</div>
					<div>
						<a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8'>
							Login
						</a>
						<a
							href='#'
							className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
							Sign up
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
