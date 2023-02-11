import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(darkTheme.matches ? 'bg-secondary' : 'bg-primary');

  const toggleTheme = () => {
    setTheme(theme === 'bg-primary' ? 'bg-secondary' : 'bg-primary');
  };

  return (
    <div className={`h-full ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        setTheme={setTheme}
      />
      <Hero
        theme={theme}
      />
    </div>
  )
}

export default App
