import React from 'react';
import Button from '../../components/Button/Button';
import './InfoBlock.scss';
import { Link } from 'react-router-dom';

const InfoBlock = ({ image, text }) => {
  return (
    <div className='info-block'>
      <img src={image} alt='BlockImage' />
      <div className='info-block__content'>
        <div className='info-block__text'>{text}</div>
        <Link to='/settings'>
            <Button
              classNameModifierSize='button_size_n'
              classNameElement='button_theme_islands'
              classNameModifier='button_view_action'
              name='Open Settings'
            />
          </Link>
      </div>
    </div>
  );
};

export default InfoBlock;
