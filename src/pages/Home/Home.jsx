import React from 'react';

const Home = () => {
    return (
        <div className="carousel h-[700px] py-5">
            <h1 className="absolute top-30 left-1/2 z-10 -translate-x-1/2 text-white text-4xl font-bold drop-shadow-lg">
                Welcome to Hobby Hub
            </h1>
            <p className='absolute top-45 left-1/2 z-10 -translate-x-1/2 text-[#FE5D26] text-xl font-bold drop-shadow-lg'>Explore The World of Hobbies</p>
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="garden_home.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="gaming_home.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="cycle_home.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="reading_home.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>   
        </div>
    );
};

export default Home;