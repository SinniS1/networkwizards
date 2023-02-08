import React from 'react'
import Cards from '../components/Cards/Cards'
import IntroPage from '../components/IntroPage/IntroPage'

const Coding = ({ darkMode }) => {
  const temp = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita illo laudantium soluta tenetur molestiae quod reprehenderit, qui sint ut repellat provident magnam repellendus pariatur enim, hic aut alias, maiores beatae. Assumenda officiis voluptates ab vitae enim aliquid, corporis amet tempora, deleniti distinctio autem quaerat totam eum cupiditate eaque dignissimos?"
  return (
    <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
      <IntroPage darkMode={darkMode} typingEffect={false} PageName={"Coding"} />
      <div className="CardSection">
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Where to Learn Coding"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Is Coding Hard 🤔"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Learn Coding from Best peoples"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"Why you should learn coding"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Coding"} title={"High paying jobs are form coding career"} content={temp} />
      </div>
    </div>
  )
}

export default Coding