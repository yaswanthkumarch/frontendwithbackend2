import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional if you have some global styles
import App from './App'; // Main App component

// Find the root element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    {/* Temporary test heading to check  */}
   
    {/* Main App component */}
    <App />
  </React.StrictMode>
);
