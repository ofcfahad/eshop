import React from 'react'
import image1 from '../assets/technology.png'

const Hero = () => {
  return (
    <div className='h-[100em] py-20 bg-primary justify-between items-center'>
      <div className=''>
        <img src={image1} alt="" className='' />
        <img src={image1} alt="" className='' />
      </div>
    </div>
  )
}

export default Hero