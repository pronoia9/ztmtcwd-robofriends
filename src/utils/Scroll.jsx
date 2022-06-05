import React from 'react';
import './Scroll.scss';

export default function Scroll(props) {
  return <div className='scroll-container'>{props.children}</div>;
};