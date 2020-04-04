import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost'

const App = () => {
  const [user, setUser] = useState('Ilya')

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login'
  }, [user])

  if (!user) return <Login setUser={setUser} />

  return (
    <>
      <Header 
        user={user} 
        setUser={setUser}
      />
      <CreatePost />
    </>
  );
}

export default App
