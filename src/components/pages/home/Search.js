import React from 'react';

const Search = () => {
	const submitHandler = () => {
		console.log('Submit Called');
	};
	return (
		<div className='self-center m-auto container'>
			<form onSubmit={() => submitHandler()}>
				<div className='flex'>
					<div className='rounded-l-full w-10/12 border-primary border border-r-0 overflow-hidden'>
						<span className='absolute p-3'>icon</span>
						<input type='text' className='p-3 pl-12 w-full focus:outline-none' placeholder='Enter a location, project or developer name' />
					</div>
					<div className='w-2/12 bg-white border border-primary border-l-0 rounded-r-full overflow-hidden'>
						<button type='submit' className='bg-primary text-white p-3 rounded-l-full w-full focus:outline-none'>
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
