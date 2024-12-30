"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    const userData = { name, email };

    try {
        const response = await axios.post('/api/users', userData);
        setMessage(`User added: ${response.data.name} (${response.data.email})`);
        setName('');
        setEmail('');
      } catch (error) {
        console.error('Error:', error);
        setMessage('Something went wrong!');
    }
  };

  return (
    <div>
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
