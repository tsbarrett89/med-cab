import React, { useState } from 'react';

function App() {
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default App;
