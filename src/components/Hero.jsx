import React from 'react'
import Header from './Header'
import ScheduleBtn from './ScheduleBtn'
import heroImg from '../assets/Images/hero-img.jpg'
import VideoPlayBtn from './VideoPlayBtn'

function Hero() {
    return (
        <>
            <div className='w-full h-[100dvh] mb-1 bg-gradient-to-b from-indigo-200 to-white'>
                <Header />
                {/* Hero Part */}
                <div className="hero-section sm:w-4/5 sm:flex sm:justify-between sm:mt-10 sm:mx-auto">
                    <div className="hero-container flex flex-col justify-center items-start sm:my-auto ">
                        <div className='hero-heading mx-2'>
                            <h4 className="font-semibold text-[2.5rem] leading-tight md:text-[4rem]">
                                Manual
                                <br />
                                Inspection is
                                <br />
                                <span className="font-normal text-blue-600"> Slow & Error-Prone</span>
                            </h4>
                        </div>
                        <div className="hero-about mt-5 mx-2">
                            <p className="text-slate-500 lead sm:text-lg sm:w-3/4">
                                AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.
                            </p>
                        </div>
                        <div className="hero-buttons ml-2 mt-5 flex">
                            <ScheduleBtn />
                            <VideoPlayBtn/>
                            <button className='hover:text-blue-700 ml-4 sm:block hidden'>Watch Video</button>
                        </div>
                    </div>
                    <div className="hero-image sm:w-full sm:h-full sm:items-center mt-5">
                        <div className="border-2 shape1 border-blue-950 rounded-full overflow-hidden hidden md:block"></div>
                        <div className="shape2 border-2 border-white rounded-full overflow-hidden hidden md:block"></div>
                        <img src={heroImg} alt="AI visual inspection" className="hero-Image w-auto h-auto md:w-[480px] md:h-[360px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero