import React, { useState, useEffect } from 'react';

const App = () => {
  const [nameData, setNameData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [messageData, setMessageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to handle errors
<h1>hii git</h1>
  // Define the base URL for the API
  const BASE_URL = 'https://sampleapp-b2bdaxfrf9dmfyes.southindia-01.azurewebsites.net/api';
<h1>hii git</h1>
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        // Simulate a delay (e.g., for demonstration purposes)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Fetch name data
        const nameResponse = await fetch(`${BASE_URL}/name`);
        if (!nameResponse.ok) {
          throw new Error(`Error fetching name data: ${nameResponse.status} - ${nameResponse.statusText}`);
        }
        const name = await getJsonOrText(nameResponse); // Handle both JSON and plain text
        setNameData(name);

        // Fetch user data
        const userResponse = await fetch(`${BASE_URL}/users`);
        if (!userResponse.ok) {
          throw new Error(`Error fetching user data: ${userResponse.status} - ${userResponse.statusText}`);
        }
        const user = await getJsonOrText(userResponse); // Handle both JSON and plain text
        setUserData(user);

        // Fetch message data
        const messageResponse = await fetch(`${BASE_URL}/message`);
        if (!messageResponse.ok) {
          throw new Error(`Error fetching message data: ${messageResponse.status} - ${messageResponse.statusText}`);
        }
        const message = await getJsonOrText(messageResponse); // Handle both JSON and plain text
        setMessageData(message);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Set the error message
      } finally {
        setLoading(false); // Stop loading after all requests
      }
    };

    fetchData();
  }, []);

  // Helper function to handle responses
  const getJsonOrText = async (response) => {
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json(); // Parse as JSON
    }
    return await response.text(); // Parse as text if not JSON
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error if any
  }

  return (
    <div>
      <h1>API Data</h1>
      <div>
        <h2>Name Data:</h2>
        <pre>{JSON.stringify(nameData, null, 2)}</pre>
      </div>
      <div>
        <h2>User Data:</h2>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
      <div>
        <h2>Message Data:</h2>
        <pre>{JSON.stringify(messageData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
