import React from 'react'
import VideoPlayBtn from './VideoPlayBtn'

function Achievement() {
    return (
        <>
            <div className="acheivement-section m-3 md:m-auto mt-80 ">
                <div className="acheive-con flex flex-col md:gap-4 gap-3 md:rounded-[3rem] rounded-[2rem] p-7 py-12 md:p-24 md:h-5/6 md:w-5/6 mx-auto my-auto">
                    <div className="flex gap-x-4 items-center">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                        <p className="text-medium md:font-bold font-normal">Leader in AI visual inspection</p>
                    </div>
                    <h2 className="m-0 md:w-3/4 md:text-5xl text-3xl font-semibold">Crafting Tomorrow's World with <span className="font-normal text-blue-600">AI Excellence</span></h2>
                    <p className=" m-0 mt-8 text-[#82858d] font-normal text-lg md:w-3/4">Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
                    <div className="button mt-6 flex gap-4">
                        <VideoPlayBtn />
                        <p className="my-auto hover:text-[#004eff] cursor-pointer font-semibold">Watch Corporate Video</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievement