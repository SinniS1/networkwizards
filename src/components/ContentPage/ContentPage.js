import React from 'react'
import IntroPage from '../IntroPage/IntroPage'
const ContentPage = () => {
  return (
    // Content page will have all the boxes with the content in it
    <div className='ContentPage'>
      <IntroPage />
      <IntroPage />
      {/* div for next cards section */}
    </div>

  )
}

export default ContentPage