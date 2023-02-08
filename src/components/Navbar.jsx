import React from 'react'
import SNavbar from './SNavbar'
import LNavbar from './LNavbar'

const Navbar = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 950;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return width < breakpoint ? <SNavbar /> : <LNavbar />;
}

export default Navbar