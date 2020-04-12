import React from 'react';
import './Title.scss';

function Title({ titleName, modifier }) {
  return <div className={`title ${modifier}`}>{titleName}</div>;
}

export default Title;
