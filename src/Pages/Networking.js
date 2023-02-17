import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../components/Cards/Cards'
import IntroPage from '../components/IntroPage/IntroPage'
import ErrorPage from '../components/OtherCom/ErrorPage'
import Loading from '../components/OtherCom/Loading'

const Networking = ({ darkMode, search, PageValue }) => {
    const [networking, setNetworking] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const openPostPage = (id, page) => {
        navigate("/PostPage")
        PageValue(id, page)
    }
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                // eslint-disable-next-line
                // const res = await axios.get(`http://itspersonalwebsite.live//wp-json/wp/v2/networking?search=${search}&t=${new Date().getTime()}`);
                const res = await axios.get(`http://localhost:1337/api/networkings`);

                setNetworking(res.data.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        fetchData()
    }, [search])

    if (loading) {
        return <Loading loading={loading} darkMode={darkMode} />
    }
    if (error) {
        return <ErrorPage error={error} />
    }
    return (
        <div className={`ContentPage ${darkMode ? "dark" : "light"}`}>
            <IntroPage darkMode={darkMode} typingEffect={false} PageName={"Networking"} />
            <div className="CardSection">
                {networking ? networking.map(card => (
                    <div key={card.id} onClick={() => openPostPage(card.id, "Networking")} >
                        {/* <p dangerouslySetInnerHTML={{ __html: card.content.rendered }} />  -> API send the text with some html this will remove those element  */}
                        <Cards key={card.id} category={card.attributes.Cattegory} darkMode={darkMode} title={card.attributes.PostName} content={<p dangerouslySetInnerHTML={{ __html: card.attributes.PostDescription }} />} />
                    </div>
                )) : ""
                }
            </div>
        </div>
    )
}

export default Networking