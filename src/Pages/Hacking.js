import React from 'react'
import Cards from '../components/Cards/Cards'
import IntroPage from '../components/IntroPage/IntroPage'

const Hacking = ({ darkMode }) => {
  const temp = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita illo laudantium soluta tenetur molestiae quod reprehenderit, qui sint ut repellat provident magnam repellendus pariatur enim, hic aut alias, maiores beatae. Assumenda officiis voluptates ab vitae enim aliquid, corporis amet tempora, deleniti distinctio autem quaerat totam eum cupiditate eaque dignissimos?"
  return (
    <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
      <IntroPage darkMode={darkMode} typingEffect={false} PageName={"Hacking"} />
      <div className="CardSection">
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"Where to Learn Hacking"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"Is Hacking Hard 🤔"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"Learn Hacking from Best peoples"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"Why you should learn Hacking"} content={temp} />
        <Cards darkMode={darkMode} categorie={"Hacking"} title={"High paying jobs are form Hacking career"} content={temp} />
      </div>
    </div>
  )
}

export default Hacking