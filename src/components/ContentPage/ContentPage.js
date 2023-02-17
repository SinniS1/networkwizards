/* eslint-disable eqeqeq */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import IntroPage from '../IntroPage/IntroPage'
import ErrorPage from '../OtherCom/ErrorPage'
import Loading from '../OtherCom/Loading'
import { useNavigate } from 'react-router-dom'
const ContentPage = ({ darkMode, search, PageValue }) => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        // eslint-disable-next-line
        // const res = await axios.get(`http://itspersonalwebsite.live//wp-json/wp/v2/posts?search=${search}&t=${new Date().getTime()}`);
        // const res = await axios.get(`http://localhost:1337/api/posts?PostName${"Networking"}&t=${new Date().getTime()}`);
        const res = await axios.get(`http://localhost:1337/api/posts`);
        setPosts(res.data.data)
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
      <IntroPage darkMode={darkMode} typingEffect={true} />
      <div className="CardSection">
        {posts ? posts.map(card => (
          <div key={card.id} >
            <Cards   key={card.id} cardID={card.id} page={"Post"} PageValue={PageValue} category={card.attributes.Cattegory} darkMode={darkMode} title={card.attributes.PostName} content={<p dangerouslySetInnerHTML={{ __html: card.attributes.PostDescription }} />} />
          </div>
        )) : ""}
      </div>
    </div>

  )
}

export default ContentPage