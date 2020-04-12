import React from 'react';
import './CardUserMeta.scss';

function CardUserMeta({ brunchName, commitNumber, userName }) {
  return (
    <div className='user-meta'>
      <div className='user-meta__branches'>
        <i className='icon code-commit'></i>
        <div className='user-meta__branches-name'>{brunchName}</div>
        <div className='user-meta__commit-number'>{commitNumber}</div>
      </div>
      <div className='user-meta__user-info'>
        <i className='icon user'></i>
        <div className='user-meta__user-info-name'>{userName}</div>
      </div>
    </div>
  );
}

export default CardUserMeta;
