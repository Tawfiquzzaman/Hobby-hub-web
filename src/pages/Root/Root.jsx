import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full mx-auto bg-[#F3F3E0]'>
                <Outlet></Outlet>

            </div>
            
            <Footer></Footer>

        </div>
    );
};

export default Root;