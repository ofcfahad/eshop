import React from 'react'
import { useState } from 'react';
import Settings from './Settings';
import SearchBar from './SearchBar';
import Cart from './Cart';
import logo from '../assets/logo.png'
import { IconContext } from 'react-icons';
import { CiLogin } from 'react-icons/ci';
import { RxDividerVertical } from 'react-icons/rx';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiOutlineBars3, HiOutlineBars3CenterLeft } from 'react-icons/hi2'

const ScrolledLNavbar = (props) => {

    const theme = props.theme

    const [ishovered, setishovered] = useState(false)
    const [isextended, setisextended] = useState(false)

    const [showDiv, setShowDiv] = useState(true);

    const nHiOutlineBars3CenterLeft = (<div className=''>
        <IconContext.Provider value={{ color: theme === 'bg-secondary' ? 'white' : 'black', size: 18 }}>
            <HiOutlineBars3CenterLeft />
        </IconContext.Provider>
    </div>);

    const nHiOutlineBars3 = (<div className=''>
        <IconContext.Provider value={{ color: theme === 'bg-secondary' ? 'white' : 'black', size: 18 }}>
            <HiOutlineBars3 />
        </IconContext.Provider>
    </div>);

    return (
        <nav className={`w-full fixed ${theme} h-[50px] items-center border-b border-black border-opacity-10 transition-all ease-in delay-100`}>
            <div className='flex mt-[-10px]'>
                {/* CATEGORY */}
                <button className='h-auto ml-[15px] mb-[5px]' onMouseOver={() => setishovered(true)} onMouseLeave={() => setishovered(false)}>
                    {ishovered ? nHiOutlineBars3CenterLeft : nHiOutlineBars3}
                </button>
                {/* DIVIDER */}
                <div className='mt-[18px]'>
                    <IconContext.Provider value={{ color: theme === 'bg-secondary' ? 'white' : 'gray', size: 30 }}>
                        <RxDividerVertical />
                    </IconContext.Provider>
                </div>
                {/* LOGO */}
                <img src={logo} alt="logo" className='h-[70px]' />
                {/* SEARCHBAR */}
                <div className='h-full mt-4 ml-4 items-center justify-center' onFocus={() => setisextended(true)} onBlur={() => setisextended(false)}>
                    {isextended ? <div className='h-[35px] w-[500px] transition-transform'>
                        <SearchBar />
                    </div> : <SearchBar
                        type={'SearchButton'}
                    />
                    }
                </div>
            </div>
            {/* OTHERS */}
            <div className='float-right flex items-center mt-[-52px]'>
                {/* LOGINBUTTON */}
                <button className='flex w-auto h-[28px] justify-center items-center px-1 rounded-lg border border-black border-opacity-5 shadow-md hover:mr-[-2px] hover:border-opacity-10 hover:shadow-lg'>
                    <div className=''>
                        <IconContext.Provider value={{ color: theme === 'bg-secondary' ? 'white' : 'black', size: 20 }}>
                            <CiLogin />
                        </IconContext.Provider>
                    </div>
                </button>
                {/* DIVIDER */}
                <div className=''>
                    <IconContext.Provider value={{ color: theme === 'bg-secondary' ? 'white' : 'gray', size: 25 }}>
                        <RxDividerVertical />
                    </IconContext.Provider>
                </div>
                {/* CART */}
                <button className='' onClick={() => console.log("Cart is Under Devlopment")}>
                    <Cart />
                </button>
            </div>
        </nav>
    )
}

export default ScrolledLNavbar
