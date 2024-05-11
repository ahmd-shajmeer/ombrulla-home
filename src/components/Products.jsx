import React from 'react'
import workplaceImg from '../assets/Images/workplace.jpg'
import environmentImg from '../assets/Images/environment.jpg'

function Products() {
    return (
        <>
            <div className="mx-5 sm:mx-28 sm:flex gap-5 my-10 justify-between grid">
                <div className="sm:w-[442px]">
                    <div className="flex gap-x-4 items-center">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
                        <p className="text-medium md:font-bold font-normal">PRODUCTS</p>
                    </div>
                    <h1 className='text-3xl font-normal sm:text-5xl sm:font-semibold my-4'>Tracking Tools</h1>
                    <p className='text-slate-500'>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>
                </div>

                <div className="sm:w-[400px] bg-slate-100 rounded-2xl p-6">
                    <h1 className='text-lg font-normal sm:text-2xl my-5'>RTLS - Workplace Safety</h1>
                    <p className='text-slate-500'>IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection.</p>
                    <img className='w-[140px] sm:w-[180px] my-12 ml-10 sm:ml-16' src={workplaceImg} alt="Loading..." />
                    <button className='hover:text-blue-500 flex my-5'>Book For Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg></button>
                </div>

                <div className="sm:w-[400px] bg-slate-100 rounded-2xl p-6">
                    <h1 className='text-lg font-normal sm:text-2xl my-5'>Environmental Sustainability</h1>
                    <p className='text-slate-500'>AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.</p>
                    <img className='w-[140px] sm:w-[180px] my-16 ml-10 sm:ml-16' src={environmentImg} alt="Loading..." />
                    <button className='hover:text-blue-500 flex my-5'>Book For Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg></button>
                </div>
            </div>
        </>
    )
}

export default Products