import React from 'react'
import ScheduleBtn from './ScheduleBtn'
import inspectionImg from '../assets/Images/inspection.jpg'

function InspectionService() {
    return (
        <>
            <div className="inspection-section w-full h-[100dvh] ">
                <div className='w-11/12 mx-auto sm:flex'>
                    <div className="about-inspection sm:pt-32 sm:basis-1/2">
                        <div className="flex gap-x-4 items-center">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                            <p className="text-lg md:font-bold font-semibold">AI VISUAL INSPECTION</p>
                        </div>
                        <h1 className='font-normal text-4xl m-2'>Enhancing quality through AI-based visual inspection</h1>
                        <p className='my-5 text-slate-500'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
                        <ul className='mx-2 list-disc list-inside'>
                            <li className='text-slate-500'>AI visual inspection ensures consistent performance with unmatched accuracy</li>
                            <li className='text-slate-500'>It boosts throughput and cuts down on labour expenses</li>
                            <li className='text-slate-500'>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
                            <li className='text-slate-500'>Real-time data and analytics enable scalability in AI-based visual inspection</li>
                        </ul>
                        <div className='mt-5 flex items-center gap-2'>
                            <ScheduleBtn />
                            <button className='hover:text-blue-500 flex'>Read more 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg> </button>
                        </div>
                    </div>
                    <div className="inspection-img hidden sm:block sm:w-[550px] sm:my-auto sm:mx-auto sm:ml-20 sm:basis-1/2">
                        <img src={inspectionImg} alt="" className='rounded-2xl sm:h-[500px]'  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InspectionService