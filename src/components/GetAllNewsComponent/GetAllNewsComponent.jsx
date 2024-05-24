import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsComponent from './NewsComponent'
import './GetAllNewsComponent.css'

const GetAllNewsComponent = () => {
  const [aNews, setNews] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3500/api/v1/news')
    .then(response => setNews(response.data))
    .catch(error => console.log(error))
  }, [aNews])

  return (
    <div className='books'>
      {aNews.map((news, index) => (
        <NewsComponent news = {news} key = {index}/>
      ))}
    </div>
  )
}

export default GetAllNewsComponent