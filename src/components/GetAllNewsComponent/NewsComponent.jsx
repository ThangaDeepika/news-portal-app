import React from 'react'

const BookComponent = ({news}) => {
  return (
    <div className='card'>
      <div className='text-container'>
      <p className="status">
          {news.Id}
        </p>
        <br></br>
        <h3>{news.title}</h3>
        <p className='status'>
          {news.description}
        </p>
        <p className="author">{news.authorName}</p>
        
      </div>
    </div>
  )
}

export default BookComponent