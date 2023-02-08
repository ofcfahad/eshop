import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
import { IconContext } from "react-icons";
import { FiLogIn } from 'react-icons/fi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineBars, AiOutlineFire } from 'react-icons/ai'
import { HiOutlineBars3, HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { CiDiscount1, CiDark, CiLogin } from 'react-icons/ci'
import { BsSun } from 'react-icons/bs'
import { IoLanguageOutline } from 'react-icons/io5'
import Cart from './Cart';

const xNavbar = () => {

    const [ishovered, setishovered] = useState(false);

    const nHiOutlineBars3 = (<div className=''>
        <IconContext.Provider value={{ color: 'black', size: 18 }}>
            <HiOutlineBars3 />
        </IconContext.Provider>
    </div>)

    const nHiOutlineBars3CenterLeft = (<div className=''>
        <IconContext.Provider value={{ color: 'black', size: 18 }}>
            <HiOutlineBars3CenterLeft />
        </IconContext.Provider>
    </div>)


    return (
        <nav className='h-[90px] w-full bg-primary border-b border-black border-opacity-10'>
            <div className='flex'>
                {/* LOGO */}
                <img src={logo} alt="logo" className='h-[70px] ml-4' />
                {/* SEARCHBAR */}
                <div className='h-[35px] w-[600px] mt-4 ml-5 transition-transform'>
                    <SearchBar />
                </div>
            </div>
            {/* OTHERS */}
            <div className='float-right flex items-center mt-[-52px]'>
                {/* LOGINBUTTON */}
                <button className='flex w-auto h-[28px] justify-center items-center px-2 rounded-lg border border-black border-opacity-5 shadow-md hover:mr-[-2px] hover:border-opacity-10 hover:shadow-lg'>
                    {/* ICON */}
                    <div className=''>
                        <IconContext.Provider value={{ color: 'black', size: 20 }}>
                            <CiLogin />
                        </IconContext.Provider>
                    </div>
                    {/* TEXT */}
                    <div className='flex ml-2 text-[8px] text-gray-700 font-semibold' onClick={() => console.log('It is not gonna work is it?')}>
                        LOGIN | SIGNUP
                    </div>
                </button>
                {/* DIVIDER */}
                <div className=''>
                    <IconContext.Provider value={{ color: "gray", size: 30 }}>
                        <RxDividerVertical />
                    </IconContext.Provider>
                </div>
                {/* CART */}
                <button className='mr-2' onClick={() => console.log("Cart is Under Devlopment")}>
                    <Cart />
                </button>
            </div>
            {/* LOWERS */}
            <div className='mt-[-10px]'>
                {/* OFFER NAVS */}
                <div className='flex ml-4'>
                    {/* CATEGORY */}
                    <button className='flex justify-center items-center' onMouseOver={() => setishovered(true)} onMouseLeave={() => setishovered(false)}>
                        {ishovered ? nHiOutlineBars3CenterLeft : nHiOutlineBars3}
                        {/* TEXT */}
                        <div className='flex text-sm font-semibold ml-2'>
                            Category
                        </div>
                    </button>
                    {/* DIVIDER */}
                    <div className='flex'>
                        <IconContext.Provider value={{ color: "gray", size: 25 }}>
                            <RxDividerVertical />
                        </IconContext.Provider>
                    </div>
                    {/* OFFERS AND DISCOUNTS */}
                    <button className='flex justify-center items-center'>
                        <div className=''>
                            <IconContext.Provider value={{ color: 'black', size: 18 }}>
                                <CiDiscount1 />
                            </IconContext.Provider>
                        </div>
                        {/* TEXT */}
                        <div className='flex text-sm ml-1'>
                            Offers n Discounts
                        </div>
                    </button>
                    {/* BEST-SELLING */}
                    <button className='flex justify-center items-center ml-2'>
                        <div className=''>
                            <IconContext.Provider value={{ color: 'black', size: 18 }}>
                                <AiOutlineFire />
                            </IconContext.Provider>
                        </div>
                        {/* TEXT */}
                        <div className='flex text-sm ml-0.5'>
                            Top Selling
                        </div>
                    </button>
                </div>
                {/* SETTINGS */}
                <div className='flex float-right mt-[-22px] mr-4'>
                    {/* LANGUAGE */}
                    <button className='flex justify-center items-center'>
                        <div className='mr-0.5 text-xs font-semibold'>
                            Eng
                        </div>
                        <div className=''>
                            <IconContext.Provider value={{ color: 'black', size: 18 }}>
                                <IoLanguageOutline />
                            </IconContext.Provider>
                        </div>
                    </button>
                    {/* THEME */}
                    <button className='flex justify-center items-center ml-4'>
                        <div className=''>
                            <IconContext.Provider value={{ color: 'black', size: 18 }}>
                                <CiDark />
                            </IconContext.Provider>
                        </div>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default xNavbar