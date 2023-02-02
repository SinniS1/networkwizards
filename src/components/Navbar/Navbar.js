import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="Navbar">
      <span><img className='logo' src="" alt="Logo" srcset="" /></span>
      <ul className='lists'>
        <li>Hacking</li>
        <li>Coding</li>
        <li>Computer Networks</li>
        <li>Dark</li>
        <li>
          <div class="input-box">
            <input type="text" placeholder="Enter Your username" />
          </div>
        </li>

      </ul>
    </div >
  )
}

export default Navbar


