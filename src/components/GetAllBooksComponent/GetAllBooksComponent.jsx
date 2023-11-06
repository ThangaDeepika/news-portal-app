import React, { useState, useEffect } from 'react'
import BookComponent from './BookComponent'
import './GetAllBooksComponent.css'

const GetAllBooksComponent = () => {

    const [books, setBooks] = useState([])

    const fetchAllBooks  = async() => {
        //fetch data from backend
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

  return (
    <div className='books'>
        {books.map(book=>(
            <BookComponent book={book}/>
        ))}
    </div>
  )
}

export default GetAllBooksComponent