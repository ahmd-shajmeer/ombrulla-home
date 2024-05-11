import React from 'react'
import martimeIndustry from '../assets/Images/martime-industry.png'
import useCase from '../assets/Images/use-case.png'
import quality from '../assets/Images/quality-img.png'
function Read() {
    return (
        <>
            <div className="mx-8 sm:mx-28 my-14">
                <div className="my-16 flex flex-col items-center">
                    <p className='flex items-center gap-8 font-bold'>
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                        <span className='text-xs sm:text-lg'>AI INSIGHTS</span>
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>

                    </p>
                    <h1 className='font-normal text-3xl sm:text-5xl mt-5'>To Read</h1>
                </div>
                <div className="sm:pt-10 flex flex-wrap justify-between">

                    <div className="sm:w-[362px]">
                        <img className='my-6 rounded-lg' src={martimeIndustry} alt="" />
                        <h3 className='font-semibold text-xl'>Transforming Maritime Inspections with AI Visual Inspection</h3>
                        <p className='text-lg text-slate-500 mt-5'>Explore how pioneering AI-driven inspections in the maritime industry re revolutioning asset monitoring with improved...</p>
                        <div className="flex gap-3 mt-10 pb-10">
                        <img src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g" class="sm:h-10 sm:w-10 h-8 w-8 rounded-full" alt="Zara Elizabeth" width="96" height="96" />
                            <p>
                                <p className='font-medium'>Zara Elizabeth</p>
                                <p className='text-slate-500'>April 29, 2024 . 6 min read</p>
                            </p>
                        </div>
                    </div>

                    <div className="sm:w-[362px]">
                        <img className='my-6 rounded-lg' src={useCase} alt="" />
                        <h3 className='font-semibold text-xl'>AI Visual Inspection &#038; its Use Cases</h3>
                        <p className='text-lg text-slate-500 mt-5'>AI-based visual inspection utilizes artificial intelligence algorithms to analyze visual data, enabling automated detect...</p>
                        <div className="flex gap-3 mt:10 sm:mt-16 pb-10">
                        <img src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g" class="sm:h-10 sm:w-10 h-8 w-8 rounded-full" alt="Zara Elizabeth" width="96" height="96" />
                            <p>
                                <p className='font-medium'>Zara Elizabeth</p>
                                <p className='text-slate-500'>April 5, 2024 . 7 min read</p>
                            </p>
                        </div>
                    </div>

                    <div className="sm:w-[362px]">
                        <img className='my-6 rounded-lg' src={quality} alt="" />
                        <h3 className='font-semibold text-xl'>How to include AI Visual Inspection into your quality control process</h3>
                        <p className='text-lg text-slate-500 mt-5'>AI visual inspection in manufacturing surges efficiency and accuracy, detecting defects to optimize resources and contin...</p>
                        <div className="flex gap-3 mt-10 pb-10">
                        <img src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&amp;d=mm&amp;r=g" class="sm:h-10 sm:w-10 h-8 w-8 rounded-full" alt="Zara Elizabeth" width="96" height="96" />
                            <p>
                                <p className='font-medium'>Zara Elizabeth</p>
                                <p className='text-slate-500'>April 27, 2024 . 10 min read</p>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Read