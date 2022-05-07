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
    {robots.map(robot => <Card id={robot.id} name={robot.name} username={robot.username} email={robot.email} />)}
  </React.StrictMode>
);
