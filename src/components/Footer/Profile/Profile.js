import React from 'react'
import "./Profile.css"
const Profile = () => {
    return (
        <div className='Profile'>
            <div>
                <div className="img"><img src="../../../assests/img1.png" alt="nothing" /></div>
                <div className="Info">
                    <span className="Title">Sachin Yadav</span>
                    <p className='InfoPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel odio natus perferendis obcaecati, deserunt veritatis inventore cum recusandae beatae!</p>
                </div>
            </div>
        </div>
    )
}

export default Profile