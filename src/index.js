import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import Card from './Card';
// styles
import './index.css';
// data
import robots from './robots.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
  </React.StrictMode>
);
