import React from 'react';
import cloud from '../assets/blogs/cloud.png'
import cloudSoft from '../assets/blogs/cloud-soft.png'
import css from './Home.css'
import girl from '../assets/portfolio/girl.png'
const Home = () => {
    return (
        <div className='bg-sky-700 h-screen relative py-10 home'>
            <div className=" lg:flex justify-around">
                <div className="">
                    <h1>Saikat</h1>
                </div>
                <div className="flex mr-6 gap-10 text-white font-bold">
                    <p>Skill</p>
                    <p>Portfolio</p>
                    <p>Blog</p>
                    <p>Contact me</p>
                </div>
            </div>


            <div className="">
                <img className='absolute bottom-0 z-10  ' src={cloud} alt="" />
                <img className='absolute bottom-0 opacity-30 ' src={cloudSoft} alt="" />
            </div>
            <div className="max-w-7xl mx-auto mt-16 lg:flex  justify-between items-center ">
                <div className=" lg:text-5xl text-gray-300">
                    <h1>Hi i am <br /> Saikat. Front end developer</h1>
                </div>
                <div className="relative">
                    <img className='overflow-hidden' src={girl} alt="" />
                    <div className="absolute">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;