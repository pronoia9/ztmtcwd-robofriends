import React from 'react';
import './css/Scroll.css';

const Scroll = (props) => {
  return <div className='scroll-container'>{props.children}</div>;
};

export default Scroll;
