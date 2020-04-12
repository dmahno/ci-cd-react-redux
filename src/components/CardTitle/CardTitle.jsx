import React from 'react';
import './CardTitle.scss';

function CardTitle({ colorNumber, titleNumber, cardTitle }) {
  return (
    <div className='card-title'>
      <span className={`card-title__number ${colorNumber}`}>
        &#35;{titleNumber}
      </span>
      <span className='card-title__text'>{cardTitle}</span>
    </div>
  );
}

export default CardTitle;
