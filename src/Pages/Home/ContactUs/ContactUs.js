import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section
            style={
                {
                    background: `url(${appointment})`
                }
            }
        >
            <div className="hero">
                <div className="hero-content flex-col py-16 md:w-1/2">
                    <div className="text-center">
                        <h4 className='text-lg text-primary font-bold'>Contact Us</h4>
                        <h1 className="text-5xl text-white">Stay connected with us</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-full w-3/4">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered text-lg" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered text-lg my-2" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered h-40 text-lg" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control md:w-1/4 mx-auto mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;