import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='flex w-full justify-between items-center shadow-sm bg-white p-6'>
                <div className='w-full max-w-screen-xl flex justify-between items-center'>
                    <img src={logo} className='h-6'/>
                    <div className='hidden md:flex items-center gap-20 text-sm font-semibold'>
                        <p>Features</p>
                        <p>Exchanges</p>
                        <p>How it Works?</p>
                        <p>Blog</p>
                        <p>About us</p>
                    </div>
                    <div className='flex items-center md:gap-6'>
                        <div className='md:hidden flex gap-6'>
                            {showMenu ? (
                                <FaTimes className='text-lg cursor-pointer text-KoinXBlue' onClick={toggleMenu} />
                            ) : (
                                <FaBars className='text-lg cursor-pointer text-KoinXBlue' onClick={toggleMenu} />
                            )}
                        </div>
                        <div className='border border-solid p-2 border-KoinXBlue text-sm font-semibold md:w-24 ml-2 flex items-center justify-center'>
                            <button className='text-KoinXBlue'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className='md:hidden bg-white text-sm font-semibold py-2 px-4 '>
                    <p>Features</p>
                    <p>Exchanges</p>
                    <p>How it Works?</p>
                    <p>Blog</p>
                    <p>About us</p>
                </div>
            )}
        </>
    );
};

export default Navbar;
