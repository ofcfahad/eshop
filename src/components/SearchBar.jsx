import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { BiSearchAlt2 } from 'react-icons/bi'
import { RxCrossCircled } from 'react-icons/rx'


const SearchBar = (props) => {

  const type = props.type

  const [inputValue, setInputValue] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
    if (event.target.value !== '') {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  const resetInputField = () => {
    setInputValue('');
    setIsShown(false);
  };

  const SearchButton = (<button className='h-auto w-auto px-2 py-2 bg-black bg-opacity-10 flex justify-center items-center rounded-md transition-all ease-linear delay-100'>
    <div className=''>
      <IconContext.Provider value={{ color: "gray", size: 20 }}>
        <BiSearchAlt2 />
      </IconContext.Provider>
    </div>
  </button>);

  const Searchbar = (
    <div className='h-full w-full bg-black bg-opacity-10 flex items-center rounded-md' >
      {/* SearchIcon */}
      <div div className='ml-4' >
        <IconContext.Provider value={{ color: "gray", size: 20 }}>
          <BiSearchAlt2 />
        </IconContext.Provider>
      </div >
      <div className='w-[90%] flex ml-2 items-center' onFocus={() => setIsShown(true)} onBlur={() => { inputValue === '' ? setIsShown(false) : setIsShown(true) }} >
        {/* SearchInput */}
        <input type="text" value={inputValue} placeholder="Search" className="w-[94%] text-xl text-gray-600 bg-transparent focus:outline-none" onChange={handleUserInput} />
        {isShown && (
          <div className="w-8 h-8 mt-1 rounded-3xl flex" onClick={resetInputField}>
            <IconContext.Provider value={{ color: 'gray', size: 25 }}>
              <RxCrossCircled />
            </IconContext.Provider>
          </div>
        )}
      </div>
    </div >
  )

  return type === 'SearchButton' ? SearchButton : Searchbar
}

export default SearchBar
