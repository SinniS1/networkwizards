import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ErrorPage from '../components/OtherCom/ErrorPage'
import Loading from '../components/OtherCom/Loading'
import "./PostPage.css"
import "../index.css"
import "../components/IntroPage/IntroPage.css"
import parse from "html-react-parser"

const PostPage = ({ cardID, page, darkMode }) => {
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let localCardID = ""
        let localPage = ""
        if (cardID && page) {
            localCardID = localStorage.setItem("cardID", cardID)
            localPage = localStorage.setItem("page", page)
        } else {
            localCardID = localStorage.getItem("cardID")
            localPage = localStorage.getItem("page")
        }
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await axios.get(`http://localhost:1337/api/${localPage || page}/${localCardID || cardID}`);
                setContent(res.data.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loading loading={loading} darkMode={darkMode} />
    }
    if (error) {
        return <ErrorPage error={error} />
    }
    return (
        <div className={`ContentPage  IntroPage ${darkMode ? "dark" : "light"}`}>
            <div className={`IntroContent PostPage ${darkMode ? "darkIntroContent" : "lightIntroContent"}`} >
                <div className="NetWiz">{content.attributes.PostName}</div>
                <div className="para">{parse(content.attributes.PostContent)} Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat odit officiis, voluptates earum dolores praesentium natus dolorum, ab soluta rem esse blanditiis cumque! Velit tempora distinctio officiis corrupti eveniet.</div>
            </div>
        </div >
    )
}

export default PostPage
