import React from 'react'
import "./Footer.css"
import Profile from './Profile/Profile'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footerContent">
                <div className="list1">
                    <div><Profile /></div>
                    <div><Profile /></div>
                </div>
                <div className="list1">
                    <div><Profile /></div>
                    <div><Profile /></div>
                </div>
            </div>
        </div>

    )
}

export default Footer