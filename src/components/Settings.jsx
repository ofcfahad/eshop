import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IconContext } from "react-icons";
import { CiSettings } from 'react-icons/ci'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Settings() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center focus:outline-none">
                    <div>
                        <IconContext.Provider value={{ color: 'black', size: 20 }}>
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
                <Menu.Items className="absolute right-2 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <IconContext.Provider value={{ color: 'black', size: 20 }}>
                                <CiSettings />
                            </IconContext.Provider>
                        </div>
                        <div className='ml-2'>
                        Settings
                        </div>
                    </div>
                    <div className="flex ml-3 text-sm">
                        i am working on it or am i?
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
