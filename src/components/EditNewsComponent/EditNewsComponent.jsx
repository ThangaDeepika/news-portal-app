import React, { useState } from 'react';
import './EditNewsComponent.css';
import axios from 'axios';

const EditNewsComponent = () => {
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
  }

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

  const descriptionHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      description: event.target.value,
    });
  };

  const publishmentHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      publishedAt: event.target.value,
    });
  };

  const IdValidator = () => {
    axios
      .post(`http://localhost:3500/api/v1/news/validate`, { Id: newsInfo.Id })
      .then(response => {
        setNewsInfo({
          Id: response.data.Id,
          title: response.data.title,
          authorName: response.data.authorName,
          description: response.data.description,
          publishedAt: response.data.publishedAt
        })
      })
      .catch(error => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.message}`)
        }
      })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()

    axios
      .patch(`http://localhost:3500/api/v1/news/`, newsInfo)
      .then(response => {
        alert(`${newsInfo.Id} is updated successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.message}`)
        }
      })
  };

  const { Id, title, authorName, description, publishedAt } = newsInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating News</h2>

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
      <div>
        <button type="button" onClick={IdValidator}>Check</button>
      </div>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter the title name"
          value={title}
          onChange={titleHandler}
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
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter the Description"
          value={description}
          onChange={descriptionHandler}
          required
        />
      </div>
      <div className="form-group">
        <label>Publishment</label>
        <input
          type="text"
          placeholder="Enter the Publishment"
          value={publishedAt}
          onChange={publishmentHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditNewsComponent;
