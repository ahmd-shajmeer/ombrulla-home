import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        < >
            <nav>
                <div className='pt-[10px]'>
                    <div className="flex mx-6 sm:mx-28 items-center justify-between h-16">
                        <div className='flex-shrink-0'>
                            <Link to={'/'}>
                                <img className='h-[32px] w-auto' src={logo} alt="Loading..." />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div>
                                <ul className="sm:flex sm:gap-8">
                                    <li className='sm:font-bold sm:text-blue-500'>Home</li>
                                    <li className='dropdown sm:font-bold sm:hover:text-blue-500'>Services <span className=''><i class="fa-solid fa-angle-down"></i></span>
                                        <div className="dropdown-content text-black">
                                            <li className='border-b-2 py-2'>AI Visual Inspection</li>
                                            <li className='border-b-2 py-2'>AI Infrastructure Inspection</li>
                                            <li className='border-b-2 py-2'>AI People Tracking</li>
                                            <li className='py-2'>AI Data Analytics</li>
                                        </div>
                                    </li>
                                    <li className='dropdown sm:font-bold sm:hover:text-blue-500'>Product <span className=''><i class="fa-solid fa-angle-down"></i></span>
                                        <div className="dropdown-content text-black">
                                            <li className='py-2'>Asset Performance Management</li>
                                        </div>
                                    </li>
                                    <li className='sm:font-bold sm:hover:text-blue-500'>About</li>
                                    <li className='sm:font-bold sm:hover:text-blue-500'>Blog</li>
                                    <li className='sm:font-bold sm:hover:text-blue-500'>Contact</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="md:hidden">
                            <button
                                className="text-gray-300 hover:border hover:border-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <span className='text-xl text-blue-500'><i class="fa-solid fa-xmark"></i></span> : <span className='text-xl text-blue-500'><i class="fa-solid fa-bars"></i></span>}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="mobile-menu md:hidden">
                        <div className="pt-2 pb-3 sm:px-3">
                            <div className="w-[260px] bg-white fixed top-0 h-full">
                                <div className=" bg-[#f3f4f6] p-10">
                                    <img className='h-[30px]' src={logo} alt="Loading..." />
                                </div>
                                <ul>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Home</li>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500 flex justify-between'>Services <span className='text-blue-500'><i class="fa-solid fa-circle-plus"></i></span></li>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500 flex justify-between'>Product <span className='text-blue-500'><i class="fa-solid fa-circle-plus"></i></span></li>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>About</li>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Blog</li>
                                    <li className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header