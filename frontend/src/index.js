import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

// root is inserted into index.html
// root is filled out by App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


