import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment; //treatment is appointment option 
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;