import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { CiShoppingCart } from 'react-icons/ci'

const Cart = (props) => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="mr-[10px]" onMouseEnter={() => setShowDiv(true)} onMouseLeave={() => setShowDiv(false)}>
      <IconContext.Provider value={{ color: props.isDark || props.theme === 'bg-secondary' ? 'white' : 'black', size: 20 }}>
        <CiShoppingCart />
      </IconContext.Provider>
      {showDiv && (
        <div className={`hidden lg:block cursor-default ${props.isDark || props.theme === 'bg-secondary' ? `bg-[#181717]` : `bg-[rgb(255,255,255)]`} h-[180px] w-[250px] rounded-xl absolute right-1 top-[40px]`}>
          <div className='divide-y'>
            <div className='mt-2 text-sm border-b border-b-white border-opacity-10'>
              <div className={`ml-3 float-left ${props.isDark || props.theme === 'bg-secondary' ? `text-white` : `text-black`}`}>
                Products
              </div>
              <button className={`float-right mr-3 ${props.isDark || props.theme === 'bg-secondary' ? `text-green-600` : `text-blue-500`} `}>
                Cart
              </button>
            </div>
            <br />
            <div>
            </div>
          </div>
          <div className={`text-center mt-[50px] text-md ${props.isDark || props.theme === 'bg-secondary' ? `text-white` : `text-black`} justify-around items-center font-bold`}>
            It's always gonna be Empty Right?
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
