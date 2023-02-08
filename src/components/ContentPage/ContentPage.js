import React from 'react'
import Cards from '../Cards/Cards'
import IntroPage from '../IntroPage/IntroPage'
const ContentPage = ({ darkMode }) => {
  const temp = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem laudantium cum natus voluptatum, eos expedita quas voluptates, molestiae omnis quam consequuntur soluta architecto rem possimus deleniti voluptatem! Ut non sit doloremque est inventore exercitationem harum soluta. Nobis, nesciunt similique veniam dolorum, ut accusamus nulla odio mollitia vero ullam saepe."
  return (
    // Content page will have all the boxes with the content in it
    <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
      <IntroPage darkMode={darkMode} typingEffect={true} />
      {/* div for next cards section */}
      <div className="CardSection">
        <Cards darkMode={darkMode} categorie={"Networking"} title={"Basics of Networking"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Where to Learn Coding"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"Fucture of Hacking"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Best Practises of Coding"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Networking"} title={"Computer Networking is easy!!!"} content={temp} />
      </div>
    </div>

  )
}

export default ContentPage