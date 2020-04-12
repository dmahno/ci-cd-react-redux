import React from 'react';
import './FooterLinkItem.scss';

function FooterLinkItem({ name, modifier = 'clear' }) {
  return (
    <li className='item'>
      <a href={`#${name}`} className={`item__link ${modifier}`}>
        {name}
      </a>
    </li>
  );
}

export default FooterLinkItem;
