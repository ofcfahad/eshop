import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
import { IconContext } from "react-icons";
import { FiLogIn } from 'react-icons/fi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineBars, AiOutlineFire } from 'react-icons/ai'
import { HiOutlineBars3, HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { CiDiscount1, CiDark, CiLogin, CiSettings } from 'react-icons/ci'
import { BsSun } from 'react-icons/bs'
import { IoLanguageOutline } from 'react-icons/io5'
import Cart from './Cart';
import { Switch } from '@mui/material';
import Settings from './Settings';

const xNavbar = (props) => {
    const [isDark, setisDark] = useState(props.theme === 'bg-secondary' ? true : false)

    const [ishovered, setishovered] = useState(false)

    const [showDiv, setShowDiv] = useState(true);

    const nHiOutlineBars3CenterLeft = (<div className=''>
        <IconContext.Provider value={{ color: isDark ? 'white' : 'black', size: 18 }}>
            <HiOutlineBars3CenterLeft />
        </IconContext.Provider>
    </div>);

    const nHiOutlineBars3 = (<div className=''>
        <IconContext.Provider value={{ color: isDark ? 'white' : 'black', size: 18 }}>
            <HiOutlineBars3 />
        </IconContext.Provider>
    </div>);

    const sb620 = (<div className='h-[35px] ss:w-[500px] float-left mt-1.5 ml-[15px] xs:w-[300px] 600px:w-[100px] transition-all ease-linear delay-100'>
        <SearchBar
            isDark={isDark}
        />
    </div>)

    const sb520 = (<div className='h-[35px] w-[400px] float-left mt-1.5 ml-[15px] transition-all ease-linear delay-10'>
        <SearchBar
            isDark={isDark}
        />
    </div>)

    const sb420 = (<div className='h-[35px] w-[300px] float-left mt-1.5 ml-[15px] transition-all ease-linear delay-100'>
        <SearchBar
            isDark={isDark}
        />
    </div>)

    const sb320 = (<div className='h-[35px] w-[200px] float-left mt-1.5 ml-[15px] transition-all ease-linear delay-100'>
        <SearchBar
            isDark={isDark}
        />
    </div>)

    const sb220 = (<div className='h-[35px] w-[100px] float-left mt-1.5 ml-[15px] transition-all ease-linear delay-100'>
        <SearchBar
            isDark={isDark}
        />
    </div>)

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = [620, 520, 420, 320, 220];

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);



    return (
        <nav className={`${props.theme} h-[120px] w-full`}>
            {/* UPPERS */}
            <div className='h-[60%] border-b border-black border-opacity-10 justify-between items-center'>
                {/* CATEGORY */}
                <button className='h-auto flex float-left mt-[25px] ml-[15px]' onMouseOver={() => setishovered(true)} onMouseLeave={() => setishovered(false)}>
                    {ishovered ? nHiOutlineBars3CenterLeft : nHiOutlineBars3}
                </button>
                {/* SETTINGS */}
                <div className='flex float-right mt-[25px] mr-[15px]'>
                    <Settings
                        isDark={isDark}
                        setisDark={setisDark}
                        theme={props.theme}
                        setTheme={props.setTheme}
                    />
                </div>
                {/* LOGO */}
                <img src={logo} alt="logo" className='h-[100%] m-auto' />
            </div>
            {/* LOWERS */}
            <div className='h-auto w-auto justify-between items-center'>
                {/* SEARCHBAR */}
                <div className='h-full w-full'>
                    {width > breakpoint[0] ? sb620 : width > breakpoint[1] ? sb520 : width > breakpoint[2] ? sb420 : width > breakpoint[3] ? sb320 : sb220}
                </div>
                {/* OTHERS */}
                <div className='flex float-right justify-center items-center mt-1.5'>
                    {/* LOGINBUTTON */}
                    <button className={`flex w-auto h-[28px] justify-center items-center px-1 rounded-lg border ${isDark ? `border-white` : `border-black`} border-opacity-5 shadow-md hover:mr-[-2px] hover:border-opacity-10 hover:shadow-lg`}>
                        {/* ICON */}
                        <div className=''>
                            <IconContext.Provider value={{ color: isDark ? 'white' : 'black', size: 20 }}>
                                <CiLogin />
                            </IconContext.Provider>
                        </div>
                    </button>
                    {/* DIVIDER */}
                    <div className=''>
                        <IconContext.Provider value={{ color: isDark ? 'white' : 'gray', size: 30 }}>
                            <RxDividerVertical />
                        </IconContext.Provider>
                    </div>
                    {/* CART */}
                    <button className='mr-2' onClick={() => console.log("Cart is Under Devlopment")}>
                        <Cart
                            isDark={isDark}
                        />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default xNavbar
