import React from 'react';
import { Fragment } from 'react'
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IconContext } from "react-icons";
import { CiDark, CiSettings } from 'react-icons/ci'
import { BsSun } from 'react-icons/bs';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Settings(props) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center focus:outline-none">
                    <div>
                        <IconContext.Provider value={{ color: props.isDark ? 'white' : 'black', size: 20 }}>
                            <CiSettings />
                        </IconContext.Provider>
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`absolute right-2 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-xl ${props.isDark ? 'bg-[#181717]' : `bg-white`} shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className={`mt-2 ml-3 block text-md ${props.isDark ? 'text-white' : 'text-black'}`}>
                        <div>
                            <div className='text-lg ml-2'>
                                Language :
                            </div>
                            <ul>
                                <li>
                                    <Radio {...controlProps('c')} color={props.isDark ? `secondary` : `success`} checked />
                                    English
                                </li>
                                <li className='mt-[-10px] text-gray-500'>
                                    <Radio {...controlProps('d')} color="default" disabled />
                                    Whatever
                                </li>
                            </ul>
                        </div>
                        <div className='mb-1'>
                            <div className='text-lg ml-3'>
                                Theme :
                            </div>
                            <ul className='mt-2'>
                                <button className='flex ml-3' onClick={() => {props.setTheme('bg-primary') + props.setisDark(false)}}>
                                    <div>
                                        <IconContext.Provider value={{ color: props.isDark ? 'gray' : 'black', size: 20 }}>
                                            <BsSun />
                                        </IconContext.Provider>
                                    </div>
                                    <div className={`ml-2 ${props.isDark ? 'text-gray-500' : `text-black`}`}>
                                        Light
                                    </div>
                                </button>
                                <button className='flex ml-3 py-2' onClick={() => {props.setTheme('bg-secondary') + props.setisDark(true)}}>
                                    <div>
                                        <IconContext.Provider value={{ color: props.isDark ? 'white' : 'gray', size: 20 }}>
                                            <CiDark />
                                        </IconContext.Provider>
                                    </div>
                                    <div className={`ml-2 ${props.isDark ? `text-white` : `text-gray-500`}`}>
                                        Dark
                                    </div>
                                </button>
                            </ul>
                        </div>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
