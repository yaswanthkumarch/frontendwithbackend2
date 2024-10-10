import React, { useState, useEffect } from 'react';

const App = () => {
  // Sample data to replace API data
  const sampleNameData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  const sampleUserData = [
    { id: 1, username: "alice123", email: "alice@example.com" },
    { id: 2, username: "bob456", email: "bob@example.com" },
    { id: 3, username: "charlie789", email: "charlie@example.com" }
  ];

  const sampleMessageData = [
    { id: 1, message: "Hello from Alice!" },
    { id: 2, message: "Hi there, this is Bob." },
    { id: 3, message: "Charlie here, nice to meet you!" }
  ];

  const [nameData, setNameData] = useState(sampleNameData);
  const [userData, setUserData] = useState(sampleUserData);
  const [messageData, setMessageData] = useState(sampleMessageData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Simulate loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Stop loading after the timeout
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error if any
  }

  return (
    <div>
      <h1>Sample Data</h1>
      <h2>Name Data:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {nameData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>User Data:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Message Data:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messageData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
