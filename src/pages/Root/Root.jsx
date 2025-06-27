import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <div className='sticky top-0 z-[100] bg-red-500'>
                <Navbar></Navbar>
            </div>
            <div className="relative w-full mx-auto bg-[#F3F3E0]">

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    // style={{ backgroundImage: "url('background.jpeg')" }}
                ></div>


                <div className="relative md:px-15">
                    <Outlet />
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;