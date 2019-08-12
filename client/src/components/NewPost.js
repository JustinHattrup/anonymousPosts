import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_POST = gql`
  mutation AddPost($title: String!, $description: String!) {
    addPost(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

function NewPost(props) {
  const [addPost] = useMutation(ADD_POST);

  const {
    title: [title, setTitle]
  } = {
    title: useState(''),
    ...(props.state || {})
  };

  const {
    description: [description, setDescription]
  } = {
    description: useState(''),
    ...(props.state || {})
  };

  const {
    submit: [submit, setSubmit]
  } = {
    submit: useState(false),
    ...(props.state || {})
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const test = await addPost({ variables: { title, description } });
      setSubmit(true);
      setTitle('');
      setDescription('');
    } catch (e) {
      //console.log(e);
    }
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleDescription = event => {
    setDescription(event.target.value);
  };

  return (
    <div className='NewPost'>
      <h2>Add something</h2>

      <p>{title}</p>
      <br />
      <p>{description}</p>
      <form onSubmit={handleSubmit} autoComplete='off'>
        Title: <br />
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Enter a title'
          value={title}
          onChange={handleTitle}
        />
        <br />
        Description: <br />
        <textarea
          type='text'
          name='description'
          id='description'
          placeholder='Enter a description'
          value={description}
          onChange={handleDescription}
        />
        <br />
        <br />
        <input id='submit' type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default NewPost;
