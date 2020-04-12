import React from 'react';
import './Footer.scss';
import FooterLinkItem from '../FooterLinkItem/FooterLinkItem';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <ul className='footer__links'>
          <FooterLinkItem name='Support' modifier='padding_right_8' />
          <FooterLinkItem name='Learning' />
        </ul>
        <div className='footer__copyright'>&copy; 2020 Your Name</div>
      </div>
    </footer>
  );
};

export default Footer;
