import React from 'react';
import Navbar from '../../components/Header/Navbar';
import error from '../../assets/error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-300 mx-auto'>
                <Lottie animationData={error}></Lottie>
            </div>
        </div>
    );
};

export default ErrorPage;