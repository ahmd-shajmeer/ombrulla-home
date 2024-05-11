import React from 'react'
import amazon from '../assets/Images/amazon.jpg'
import azure from '../assets/Images/azure.jpg'
import dahua from '../assets/Images/dahua.jpg'
import hikvision from '../assets/Images/hikvision.jpg'
import nvidia from '../assets/Images/nvidia.jpg'
import unv from '../assets/Images/unv.jpg'

function Brands() {
  return (
    <>
     <div className="hidden sm:block">
        <div className="my-16 flex flex-col items-center">
            <p className='flex items-center gap-8 font-bold'>
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>

                BRANDS WE WORK WITH
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>

            </p>
            <h1 className='font-semibold text-5xl mt-5'>Trusted by Thousands of Businesses</h1>
        </div>

        <div className="rounded-3xl border border-slate-200 w-fit m-auto">
            <div className="flex justify-center">
                <div className="bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white rounded-tl-3xl flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={unv} alt="Loading..." />
                </div>
                <div className= "bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={dahua} alt="Loading..." />
                </div>
                <div className="bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white rounded-tr-3xl flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={nvidia} alt="Loading..." />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex rounded-bl-3xl items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={amazon} alt="Loading..." />
                </div>
                <div className="bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={hikvision} alt="Loading..." />
                </div>
                <div className="bg-[#f9fafb] hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex rounded-br-3xl items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={azure} alt="Loading..." />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Brands