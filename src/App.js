import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value})
  }

  const registerSubmit = e => {
    e.preventDefault()
    axios.post(``, creds)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response))
  }

  const loginSubmit = e => {
    e.preventDefault()
    axios.post(``, creds)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response))
  }

  return (
    <div>
      <form onSubmit={registerSubmit}>
        <input
          name='username'
          placeholder='username'
          value={creds.username}
          onChange={handleChange}
        />
        <input
          name='password'
          type='password'
          placeholder='password'
          value={creds.password}
          onChange={handleChange}
        />
        <button type='submit'>Register</button>
      </form>
      <form onSubmit={loginSubmit}>
        <input
          name='username'
          placeholder='username'
          value={creds.username}
          onChange={handleChange}
        />
        <input
          name='password'
          placeholder='password'
          type='password'
          value={creds.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
