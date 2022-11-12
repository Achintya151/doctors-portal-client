import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'>
            <div
                className="hero">
                <figure className=' opacity-10 w-full '><img src={chair} alt="" /></figure>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker className='rounded-lg bg-base-100 shadow-2xl p-6'
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;