import React from 'react'
import Cards from '../components/Cards/Cards'
import IntroPage from '../components/IntroPage/IntroPage'

const Networking = ({ darkMode }) => {
    const temp = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita illo laudantium soluta tenetur molestiae quod reprehenderit, qui sint ut repellat provident magnam repellendus pariatur enim, hic aut alias, maiores beatae. Assumenda officiis voluptates ab vitae enim aliquid, corporis amet tempora, deleniti distinctio autem quaerat totam eum cupiditate eaque dignissimos?"
    return (
        <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
            <IntroPage darkMode={darkMode} typingEffect={false} PageName={"Networking"} />
            <div className="CardSection">
                <Cards darkMode={darkMode} categorie={"Networking"} title={"Where to Learn Networking"} content={temp} />
                <Cards darkMode={darkMode} categorie={"Networking"} title={"Is Networking Hard 🤔"} content={temp} />
                <Cards darkMode={darkMode} categorie={"Networking"} title={"Learn Networking from Best peoples"} content={temp} />
                <Cards darkMode={darkMode} categorie={"Networking"} title={"Why you should learn Networking"} content={temp} />
                <Cards darkMode={darkMode} categorie={"Networking"} title={"High paying jobs are form Networking career"} content={temp} />
            </div>
        </div>
    )
}

export default Networking