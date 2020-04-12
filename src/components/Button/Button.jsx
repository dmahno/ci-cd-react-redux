import React from 'react';
import './Button.scss';

const Button = props => {
  const {
    name,
    icon = 'none',
    classNameElement,
    classNameModifier,
    classNameModifierSize,
    ...rest
  } = props;
  return (
    <button
      className={`button ${classNameElement} ${classNameModifierSize} ${classNameModifier} button__control i-bem`}
      { ...rest }
    >
      <span className={`icon ${icon}`}></span>
      <span className='button__text'>{name}</span>
    </button>
  );
};

export default Button;
