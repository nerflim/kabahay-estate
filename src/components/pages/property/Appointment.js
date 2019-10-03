import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Appointment = () => {
	const [activeTime, setActiveTime] = useState('');
	const availableTime = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

	const timeClass = 'py-1 px-3 text-center w-full border rounded-full hover:shadow border-gray-500 focus:outline-none hover:border-primary';
	const activeTimeClass = 'py-1 px-3 text-center w-full border rounded-full border-primary bg-white text-primary focus:outline-none';

	return (
		<div className='mb-8'>
			<h3 className='text-xl mb-2'>Make an appointment</h3>
			<div className='flex'>
				<div className='flex-1'>
					<Calendar className='shadow rounded-lg border-gray-500' value={new Date()} hover='bg-green-500' calendarType='US' />
				</div>
				<div className='flex-1 px-3 text-sm'>
					<h3 className='text-lg mb-2 text-center'>Select available time</h3>
					<div className='flex flex-wrap'>
						{availableTime.map((item, index) => (
							<div className='w-1/3 px-2 mb-3' key={index}>
								<button type='button' className={activeTime === item ? activeTimeClass : timeClass} onClick={() => setActiveTime(item)}>
									{item}
								</button>
							</div>
						))}
					</div>
					<button
						type='button'
						className='w-full rounded-full text-white bg-primary shadow focus:outline-none py-1 px-3 mt-3 border border-primary hover:text-primary hover:bg-white'>
						Make an appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
