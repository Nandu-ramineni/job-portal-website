import React, { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { FcMenu,FcLineChart } from 'react-icons/fc';
import { IoMdClose } from "react-icons/io";
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';
const Navbar = ({onPostJobClick}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <BrowserRouter>
            <nav className=" border-gray-200 dark:bg-gray-900 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="flex items-center text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            <FcLineChart className="text-3xl" />
                            JobVista
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={onPostJobClick}
                            type="button"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Post Job
                        </button>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-black-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded={isNavOpen}
                        >
                            {isNavOpen? <IoMdClose /> : <FcMenu />}
                        </button>
                        
                    </div>
                    
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                        <ul className="flex flex-col   font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/jobs" className="block py-2 px-3 md:p-0 rounded text-xl text-center md:bg-transparent font-medium hover:bg-gray-100 md:hover:bg-transparent" >
                                    Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/about" className="block py-2 px-3 md:p-0 text-xl text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-3 md:p-0 text-xl text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/help" className="block py-2 px-3 md:p-0 text-xl text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                                    Help 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
            <Routes>
            <Route path='/' element={<Home/>}/>
                <Route path='/jobs' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/help' element={<Contact/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Navbar;
