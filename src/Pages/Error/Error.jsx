import React from 'react';
import errorimg from '../../assets/error-404.png'
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center mx-auto text-center my-14'>
            <img className='mx-auto h-[200px]' src={errorimg} alt="" />
            <div>
                <h2 className='text-3xl font-bold'>Oops, page not found!</h2>
                <p className='text-xs mt-2'>The page you are looking for is not available.</p>
            </div>
            <NavLink to='/allapps'><button className='btn mt-5 btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]w-[100px]'>Go Back</button></NavLink>
        </div>
    );
};

export default Error;