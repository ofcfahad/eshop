import React from 'react'
import image1 from '../assets/technology.png'

const Hero = (props) => {
  return (
    <div className={`h-[2000px] py-[400px] ${props.theme} justify-center items-center`}>
      <div className={`text-[30px] ${props.theme === 'bg-secondary' ? `text-white` : `text-black`} text-center`}>
        It's just Navbar innit?
      </div>
    </div>
  )
}

export default Hero
