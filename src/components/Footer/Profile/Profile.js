import React from 'react'
import "./Profile.css"
const Profile = ({ Info }) => {
    return (
        <div className='Profile'>
            <div className="img">
                <img src={Info.img.raj ? Info.img.raj : Info.img.sachin} alt="nothing" />
            </div>
            <div className="Info">
                <span className="Title">{Info.name}</span>
                <p className='InfoPara'>{Info.Intro}</p>
            </div>
            <div className="Social">
                <span className='LinkedIn'><a href={Info.linkedIn} target={'_blank'} rel={"noreferrer"}>
                    <svg svg="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="blue" className="mercado-match" width="24" height="24" focusable="false" ><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg ></a>
                </span>
                <span><a href={Info.github} target={'_blank'} rel={"noreferrer"}>
                    <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github v-align-middle"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                </span>
                <span><a href={`mailto:${Info.mail}`}  target="_blank" rel='noreferrer' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" version="1.1"><path d="M 426.250 213.065 L 373 253.009 373 340.046 L 373 427.083 414.750 426.791 L 456.500 426.500 462.356 423.533 C 469.523 419.901, 475.264 413.584, 477.971 406.348 C 479.983 400.971, 480.005 399.472, 479.754 287.012 L 479.500 173.121 426.250 213.065" stroke="none" fill="#4caf50" fillRule="evenodd" /><path d="M 422.230 86.550 C 414.328 88.678, 412.102 90.042, 391.750 105.232 L 373 119.225 373 186.116 L 373 253.007 426.558 212.835 L 480.117 172.664 479.808 146.082 L 479.500 119.500 475.785 111.720 C 466.076 91.388, 443.563 80.807, 422.230 86.550" stroke="none" fill="#fbc02d" fillRule="evenodd" /><path d="M 139 186.757 L 139 253.513 197.500 297.376 L 256 341.239 314.500 297.376 L 373 253.513 373 186.757 C 373 150.040, 372.771 120, 372.491 120 C 372.211 120, 345.886 139.578, 313.991 163.507 L 256 207.013 198.009 163.507 C 166.114 139.578, 139.789 120, 139.509 120 C 139.229 120, 139 150.040, 139 186.757" stroke="none" fill="#e53935" fillRule="evenodd" /><path d="M 66.105 86.519 C 52.703 90.281, 42.239 99.104, 36.215 111.720 L 32.500 119.500 32.192 146.082 L 31.883 172.664 85.442 212.835 L 139 253.007 139 186.103 L 139 119.200 119.587 104.704 C 106.760 95.126, 98.194 89.457, 94.337 87.993 C 86.726 85.103, 73.588 84.417, 66.105 86.519" stroke="none" fill="#c62828" fillRule="evenodd" /><path d="M 32 286.840 L 32 400.925 34.143 406.653 C 36.719 413.539, 43.857 421.122, 50.765 424.313 C 55.360 426.435, 56.738 426.509, 97.250 426.791 L 139 427.083 139 340.049 L 139 253.015 86.750 213.865 C 58.013 192.333, 33.938 174.275, 33.250 173.735 C 32.252 172.952, 32 195.716, 32 286.840" stroke="none" fill="#1e88e5" fillRule="evenodd" /></svg>
                </a></span>
            </div>
        </div >
    )
}


export default Profile