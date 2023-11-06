import React, { useState } from 'react';
import './EditBooksComponent.css';

const EditBooksComponent = () => {
  const [bookInfo, setBookInfo] = useState({
    bookName: '',
    authorName: '',
    ISBN: '',
    genre: ''
  });

  const bookNameHandler = (event) => {
    setBookInfo({
      ...bookInfo,
      bookName: event.target.value
    });
  };

  const authorNameHandler = (event) => {
    setBookInfo({
      ...bookInfo,
      authorName: event.target.value
    });
  };

  const ISBNHandler = (event) => {
    setBookInfo({
      ...bookInfo,
      ISBN: event.target.value
    });
  };

  const genreHandler = (event) => {
    setBookInfo({
      ...bookInfo,
      genre: event.target.value
    });
  };

  const ISBNValidator = () => {
    //Validate data from backend
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //send data to backend
  };

  const { bookName, authorName, ISBN, genre } = bookInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating books</h2>

      <div className="form-group">
        <label>ISBN Number</label>
        <input
          type="text"
          pattern="[0-9]{13}"
          placeholder="Give the ISBN Number"
          value={ISBN}
          onChange={ISBNHandler}
          required
        />
      </div>
      <div>
        <button onClick={ISBNValidator}>Check</button>
      </div>

      <div className="form-group">
        <label>Book Name</label>
        <input
          type="text"
          placeholder="Enter the book name"
          value={bookName}
          onChange={bookNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Author Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the author name"
          value={authorName}
          onChange={authorNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          placeholder="Enter the genre"
          value={genre}
          onChange={genreHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditBooksComponent;
