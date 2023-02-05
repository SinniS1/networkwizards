import React, { useState } from 'react'
import "./Navbar.css"
const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [tglNav, setTglNav] = useState(true)
  const toggleNav = () => {
    setTglNav(tglNav => !tglNav)
  }
  return (
    <div className={`Navbar ${darkMode ? "darkNavbar" : "lightNavbar"}`}>
      <span>
        <img alt='nothing' src="data:image/png;base64,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"></img>
      </span>
      <ul className={`${tglNav ? "switchNav" : "lists"} ${darkMode ? "darkLists" : "lightLists"}`}>
        <li>Hacking</li>
        <li>Coding</li>
        <li>Computer Networks</li>
        <li>
          <label className="switch">
            <input type="checkbox" onClick={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </li>
        <li>
          <div className={`input-box`}>
            <input type="text" className={darkMode ? "darkSearch" : ""} placeholder="Search Here" />
          </div>
        </li>
      </ul>
      <div className="switched">
        <input type="checkbox" onClick={toggleNav} />
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
    </div >
  )
}

export default Navbar


