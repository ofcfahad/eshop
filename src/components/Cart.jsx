import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { CiShoppingCart } from 'react-icons/ci'

const Cart = () => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="mr-[10px]" onMouseEnter={() => setShowDiv(true)} onMouseLeave={() => setShowDiv(false)}>
      <IconContext.Provider value={{ color: "black", size: 20 }}>
        <CiShoppingCart />
      </IconContext.Provider>
      {showDiv && (
        <div className="hidden lg:block cursor-default bg-[rgba(255,255,255)] h-[180px] w-[250px] rounded-xl absolute right-1 top-[40px]">
          <div className='divide-y'>
            <div className='mt-2 text-sm border-b border-b-white border-opacity-10'>
              <div className='ml-3 float-left'>
                Products
              </div>
              <button className='float-right mr-3 text-blue-500'>
                Cart
              </button>
            </div>
            <br />
            <div>
            </div>
          </div>
          <div className='text-center mt-[50px] text-sm justify-around items-center font-semibold'>
            It's always gonna be Empty Right?
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
