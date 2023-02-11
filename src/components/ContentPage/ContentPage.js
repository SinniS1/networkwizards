/* eslint-disable eqeqeq */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import IntroPage from '../IntroPage/IntroPage'
import ErrorPage from '../OtherCom/ErrorPage'
import Loading from '../OtherCom/Loading'
const ContentPage = ({ darkMode }) => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
         // eslint-disable-next-line
        const res = await axios.get('https://networkwizards.tech/wp-json/wp/v2/posts/' + '?t=' + new Date().getTime())
        setPosts(res.data)
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
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
          <div key={card.id}>
            <Cards key={card.id} categorie={card.categories == 8 ? "Trending" : card.categories == 10 ? "Hacking" : card.categories == 9 ? "Networking" : card.categories == 11 ? "Coding" : "Uncategorized"} darkMode={darkMode} title={card.title.rendered} content={<p dangerouslySetInnerHTML={{ __html: card.excerpt.rendered }} />} />
          </div>
        )) : ""}
      </div>
    </div>

  )
}

export default ContentPage