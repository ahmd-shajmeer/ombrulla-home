import React from 'react'
import ScheduleBtn from './ScheduleBtn'
import infrastructureImg from '../assets/Images/infrastructure.jpg'

function InfrastructureService() {
  return (
    <>
    <div className="infrastructure-section w-full h-[100dvh] ">
                <div className='w-11/12 mx-auto sm:flex mt-80 sm:mt-auto'>
                <div className="infrstructure-img hidden sm:block sm:w-[550px] sm:my-auto sm:mx-auto sm:ml-20 sm:basis-1/2">
                        <img src={infrastructureImg} alt="" className='rounded-2xl sm:h-[500px]'  />
                    </div>
                    <div className="about-inspection sm:pt-32 sm:basis-1/2">
                        <div className="flex gap-x-4 items-center">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                            <p className="text-lg md:font-bold font-semibold">AI INFRASTRUCTURE INSPECTION</p>
                        </div>
                        <h1 className='font-normal text-4xl m-2'>Enhances Efficiency, Safety, and Cost-Effectiveness</h1>
                        <p className='my-5 text-slate-500'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
                        <ul className='mx-2 list-disc list-inside'>
                        <li className='text-slate-500'>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
                <li className='text-slate-500'>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
                <li className='text-slate-500'>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
                <li className='text-slate-500'>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
                        </ul>
                        <div className='mt-5 flex items-center gap-2'>
                            <ScheduleBtn />
                            <button className='hover:text-blue-500 flex'>Read more 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg> </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default InfrastructureService