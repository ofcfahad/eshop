import React from 'react'
import SNavbar from './SNavbar'
import LNavbar from './LNavbar'
import ScrolledNavbar from './ScrolledNavbar'

const Navbar = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const [scrollPosition, setScrollPosition] = React.useState(0)

    const breakpoint = 950

    React.useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth));
            window.removeEventListener('scroll', () => setScrollPosition(window.scrollY));
        };
    }, []);

    return width < breakpoint ? <SNavbar /> : scrollPosition === 0 ? <LNavbar /> : <ScrolledNavbar />;
}

export default Navbar
