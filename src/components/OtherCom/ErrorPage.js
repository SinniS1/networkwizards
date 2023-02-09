import React from 'react'
import "./ErrorPage.css"
import "../../index.css"
const ErrorPage = ({ error }) => {
  return (
    <div className='ErrorPage dark'><span> Sorry this page does not exits</span> {error.message}</div>
  )
}

export default ErrorPage 