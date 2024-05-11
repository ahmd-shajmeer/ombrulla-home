import React from 'react'
import petranLogo from '../assets/Images/petran-logo.webp'
import petranImg from '../assets/Images/petran-img.webp'
import aiBg from '../assets/Images/ai-bg.jpg'

function AIProduct() {
    return (
        <>
            <section className='mt-[430px] mb-10 sm:mt-auto'>
                <div className='ai-section p-7 sm:p-24 grid grid-cols-1 md:grid-cols-2 space-y-10'>
                    <div>
                        <img src={petranLogo} alt="petran" className='h-4 sm:h-6 ' />
                        <p className='text-white text-xs sm:text-base'><span className='font-bold'>PE</span>rformance - <span className='font-bold'>TR</span>acking - <span className='font-bold'>AN</span>alytics</p>
                        <h1 className='mt-5 font-medium text-[1.8rem] sm:text-[2.5rem] text-white leading-tight'>AIoT Enabled Asset <br /> Performance Management Software</h1>
                        <p className='mt-10 text-white text-sm sm:text-base leading-tight'>PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness</p>
                        <div className='mt-10 flex sm:items-center'>
                            <button className='px-[18px] py-[8px] text-xs sm:text-lg rounded-full bg-white text-blue-600 sm:bg-transparent sm:text-white hover:bg-white hover:text-blue-600 border border-white  md:px-[2rem] md:py-[1rem]'>Schedule Call</button>
                            <button className='bg-transparent border border-white px-3 py-1 rounded-full text-white ml-2 sm:ml-8 sm:px-5 sm:py-3'><i class="fa-solid fa-play text-xs sm:text-lg"></i></button>
                            <button className='text-white ml-4 sm:font-bold '>Watch Video</button>
                        </div>
                    </div>
                    <div className='m-9'>
                        <img src={petranImg} alt="petran" className='transform skew-y-6' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AIProduct