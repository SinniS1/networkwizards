import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({ darkMode, toggleDarkMode, SearchValue }) => {
    return (
        <div className="App">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} SearchValue={SearchValue} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout