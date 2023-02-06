import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import IntroPage from '../IntroPage/IntroPage'
const ContentPage = ({ darkMode }) => {
  return (
    // Content page will have all the boxes with the content in it
    <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
      <IntroPage darkMode={darkMode} />
      {/* div for next cards section */}
      <div className="CardSection">
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
        <Cards darkMode={darkMode} />
      </div>
      <Footer />
    </div>

  )
}

export default ContentPage