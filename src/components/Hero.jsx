import React from 'react'
import image1 from '../assets/technology.png'

const Hero = (props) => {
  return (
    <div className={`h-[100em] py-20 ${props.theme} justify-between items-center`}>
      <div className=''>
        It's just Navbar innit?
      </div>
    </div>
  )
}

export default Hero
