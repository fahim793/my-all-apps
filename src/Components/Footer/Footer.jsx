import React from 'react';
import linkedinimg from '../../assets/linkedin-big-logo.png'
import facebookimg from '../../assets/facebook.png'
import mailimg from '../../assets/mail.png'
import twitterimg from '../../assets/twitter.png'
import logoimg from '../../assets/logo.png'

const Footer = () => {
    return (
         <div className='bg-black text-white py-10 '>
            <div className='grid grid-cols-1 px-4 md:grid-cols-5 gap-5 max-w-[1200px] w-11/12 mx-auto text-[#A1A1AA] border-b-1 border-b-gray-600 pb-7'>
                <div>
                     <div className='flex items-center mb-3'>
                                        <img className='h-[35px] w-[35px] mr-2' src={logoimg} alt="" />
                                        <a className="font-bold text-xl">HERO.IO</a>
                                    </div>
                    <p className='text-xs'>Hero IO is a modern and responsive web application that showcases a curated collection of mobile apps. It allows users to explore, search, and install their favorite apps effortlessly. With an elegant interface, smooth interactions, and real-time data visualization, Hero IO provides a dynamic and engaging experience for every user.</p>
                </div>
                <div className='md:ml-14'>
                    <h3 className='text-xl font-medium text-white mb-3'>Company</h3>
                    <ul className='text-xs space-y-3'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Services</h3>
                    <ul className='text-xs space-y-3'>
                        <li>Apps & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Information</h3>
                    <ul className='text-xs space-y-3'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Social Links</h3>
                    <ul className='text-xs space-y-3'>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={twitterimg} alt="" />@HERO.IO</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={linkedinimg} alt="" />@HERO.IO</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={facebookimg} alt="" />@HERO.IO</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={mailimg} alt="" />support@heroio.com</li>
                    </ul>
                </div>
            </div>
            <p className='text-center mt-14 '>© 2025 HERO.IO. All rights reserved.</p>
        </div>
    );
};

export default Footer;