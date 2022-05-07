import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from './App';
// data
import robots from './robots.json';
// styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>
);
