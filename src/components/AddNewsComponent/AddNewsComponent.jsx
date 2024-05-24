import React, { useState } from 'react'
import './AddNewsComponent.css'
import axios from 'axios'

const AddNewsComponent = () => {
  const [newsInfo, setNewsInfo] = useState({
    Id: '',
    title: '',
    authorName: '',
    description: '',
    publishedAt: ''
  });

  const IdHandler=(event)=>{
    setNewsInfo({
      ...newsInfo,
      Id:event.target.value,
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

  const { Id,title, authorName, description, publishedAt } = newsInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault()
    
    axios
      .post(`http://localhost:3500/api/v1/news`, newsInfo)
      .then(response => {
        alert(`${response.data.title} is added successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding new NEWS</h2>

      <div className='form-group'>
        <label>ID Number</label>
        <input
          type='text'
          // pattern='[0-9]'
          placeholder='Enter the ID Number'
          value={Id}
          onChange={IdHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          placeholder='Enter the title'
          value={title}
          onChange={titleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Author Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the author name'
          value={authorName}
          onChange={authorNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Enter the Description'
          value={description}
          onChange={descriptionHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Publishment</label>
        <input
          type='text'
          placeholder='Enter the publication'
          value={publishedAt}
          onChange={publishmentHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewsComponent;
