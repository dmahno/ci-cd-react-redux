import React from 'react';
import "./InputError.scss";

const InputError = ({ 
		hasError = false, 
		errorText = "Invalid Input" 
	}) => {
	if (hasError) {
		return (
			<p className="input-error">
				{errorText}
			</p>
		)
	} else {
		return null
	}
}
 
export default InputError;