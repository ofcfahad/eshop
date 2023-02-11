import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  const [theme, setTheme] = useState('bg-primary');

  const toggleTheme = () => {
    setTheme(theme === 'bg-primary' ? 'bg-secondary' : 'bg-primary');
  };

  return (
    <div className='bg-primary'>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero
        theme={theme}
      />
    </div>
  )
}

export default App
