import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
// import { Outlet } from 'react-router';
import { Outlet, useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';

const Roots = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 bg-[#F5F5F5]'>
                {
                    navigation.state === "loading" && <Loader></Loader>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;