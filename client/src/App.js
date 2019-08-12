import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles/App.css';
import Posts from './components/Post';
import NewPost from './components/NewPost';

const client = new ApolloClient({
  uri: '/graphql'
  //uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

//console.log(payload);

function App() {
  //console.log(payload);

  const [payload, setPayload] = useState(0);
  const [submit, setSubmit] = useState(false);

  //console.log(submit);

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Posts app</h1>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
