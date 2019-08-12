import React, { useEffect, useState } from 'react';

import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';

import NewPost from './NewPost';

const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    deletePost(id: $id) {
      id
      title
      description
    }
  }
`;

const GET_POSTS = gql`
  query getposts {
    posts {
      id
      title
      description
      date
    }
  }
`;

function Posts(props) {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [submit, setSubmit] = useState(false);

  const [deletePost] = useMutation(DELETE_POST);
  const getPosts = useQuery(GET_POSTS);

  if (getPosts.loading) return <p>Loading...</p>;
  if (getPosts.error) return <p>Error :(</p>;

  if (submit === true) {
    //console.log(submit);
    setSubmit(false);
    getPosts.refetch();
  }

  const handleCLick = async id => {
    try {
      const del = await deletePost({ variables: { id } });
      getPosts.refetch();
    } catch (e) {}
  };

  return (
    <div className='Posts'>
      <NewPost
        state={{
          title: [title, setTitle],
          description: [description, setDescription],
          submit: [submit, setSubmit]
        }}
      />
      <h1>List of posts:</h1>
      {/* <button onClick={() => getPosts.refetch()}>refetch</button> */}
      <ul>
        {getPosts.data.posts.map((post, index) => (
          <li key={index}>
            {post.id} <br /> {post.title} <br /> {post.description} <br />{' '}
            {post.date}
            <br />
            <button onClick={() => handleCLick(post.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
