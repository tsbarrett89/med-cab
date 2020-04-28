import React, { useState } from 'react';

function App() {
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value})
  }

  const loginSubmit = e => {
    
  }

  return (
    <div>
      <form onSubmit={loginSubmit}>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
