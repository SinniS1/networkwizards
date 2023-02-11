import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import "./Loading.css"
import "../../index.css"
const Loading = ({ loading, darkMode }) => {
    return (
        <div className={`Loading ${darkMode ? "dark" : "light"}`}>
            <ScaleLoader color="#3dafdb" cssOverride={{}} loading={loading} speedMultiplier={2} />
        </div>
    )
}

export default Loading