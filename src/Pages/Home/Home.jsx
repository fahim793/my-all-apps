import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Apps from './../Apps/Apps';
import googlePlayStoreimg from '../../assets/googleplaystore1.png'
import appStoreimg from '../../assets/app-store.png'
import heroimg from '../../assets/hero.png'


const Home = () => {
    const data = useLoaderData();
    const featuredData = data.slice(0, 8);

    return (
        <div>
            <div className='text-center my-14'>
                <h1 className='text-4xl font-bold'>We Build<br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] mt-2'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-5 mt-5'>
                    <NavLink to='http://play.google.com/store/games?hl=en&pli=1'><button className='flex items-center btn overflow-hidden w-[180px] bg-white'><img className='h-[45px] w-[45px]' src={googlePlayStoreimg} alt="" />Google Play</button></NavLink>
                    <NavLink to='https://play.google.com/store/apps/developer?id=App+Store.&hl=en'><button className='flex items-center btn overflow-hidden w-[180px] bg-white'><img className='h-[45px] w-[65px]' src={appStoreimg} alt="" />App Store</button></NavLink>
                </div>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <img className='w-[700px]' src={heroimg} alt="" />
                </div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-20'>
                    <h2 className='text-2xl font-bold'>Trusted by Millions, Built for You</h2>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mt-8'>
                        <div className='space-y-3'>
                            <p className='text-xs'>Total Downloads</p>
                            <h2 className='text-5xl font-bold'>29.6M</h2>
                            <p className='text-xs'>21% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-xs'>Total Reviews</p>
                            <h2 className='text-5xl font-bold'>906K</h2>
                            <p className='text-xs'>46% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-xs'>Active Apps</p>
                            <h2 className='text-5xl font-bold'>132+</h2>
                            <p className='text-xs'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pb-10 max-w-6xl mx-auto'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold'>Trending Apps</h2>
                    <p className='mt-2 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='my-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        featuredData.map(app => <Apps app={app}></Apps>
                        )
                    }
                </div>
                <div className='flex justify-center'>
                    <NavLink to='/allapps'><button className='btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]w-[100px]'>Show All</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;