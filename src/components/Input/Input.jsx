import React from 'react';
import './Input.scss';

function Input(props) {
  const {
    label,
    placeholder,
    required = 'free',
    type = 'text',
    width = 'input_width_normal',
    afterText = '',
    modifierFlex = 'flex_column',
    modifierInputTheme = 'input_theme_normal',
    onChange = () => {},
    hideClearButton = false,
    onReset = () => {},
    errorConnected = false,
    hasError = false,
    errorText = "",
    ...rest
  } = props;
  return (
    <div className={`input ${modifierInputTheme} ${modifierFlex}`}>
      <label className={`input__hint ${required}`}>{label}</label>
      <div className={`input__outer__wrapper`}>
      <div className={`input__inner__wrapper`}>
      <input
        type={type}
        className={`input__control input_size_m ${width}`}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {
        hideClearButton? null: (<button type="button" className="input__clear" onClick={e => onReset()}><div>&times;</div></button>)
      }
      </div>
      <p className="error">{errorConnected && hasError? errorText: ""}</p>
      </div>
      <span className='input__after-text'>{afterText}</span>
    </div>
  );
}

export default Input;