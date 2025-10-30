import React from 'react';
import logoimg from '../../assets/logo.png'

const Loader = () => {
    return (

        <div className='flex flex-col items-center mx-auto text-center my-14'>
                <h2 className='text-4xl font-bold flex items-center'>L<span className='ml-2 animate-spin '><img className='mx-auto h-[50px]' src={logoimg} alt="" /></span> ading</h2>
        </div>
    );
};

export default Loader;