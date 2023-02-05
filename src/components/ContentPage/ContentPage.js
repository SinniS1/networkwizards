import React from 'react'
import Cards from '../Cards/Cards'
import IntroPage from '../IntroPage/IntroPage'
const ContentPage = ({ darkMode }) => {
  return (
    // Content page will have all the boxes with the content in it
    <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
      <IntroPage />
      {/* div for next cards section */}
      <div className="CardSection">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>

  )
}

export default ContentPage