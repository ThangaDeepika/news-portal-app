import React, { useState } from 'react';
import './DeleteNewsComponent.css';
import axios from 'axios';

const DeleteNewsComponent = () => {
  const [newsInfo, setNewsInfo] = useState({
    Id: '',
    title: '',
    authorName: '',
    description: '',
    publishedAt: ''
  });

  const IdHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      Id: event.target.value,
    });
  };

  const titleHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      title: event.target.value,
    });
  };

  const authorNameHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      authorName: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()

    axios
      .delete(`http://localhost:3500/api/v1/news/`, { data: newsInfo })
      .then(response => {
        alert(`${newsInfo.Id} is deleted successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.message}`)
        }
      })
  };

  const { Id, title, authorName } = newsInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Deleting News</h2>

      <div className="form-group">
        <label>Id Number</label>
        <input
          type="text"
          placeholder="Give the ID Number"
          value={Id}
          onChange={IdHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter the title name"
          value={title}
          onChange={titleHandler}
          
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
          
        />
      </div>

      <div>
        <button type="submit">Delete</button>
      </div>
    </form>
  );
};

export default DeleteNewsComponent;
