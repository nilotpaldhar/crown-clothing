import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, id, ...otherProps }) => (
	<div className='group'>
		<input
			className='form-input'
			id={id}
			onChange={handleChange}
			{...otherProps}
		/>
		{label ? (
			<label
				className={`${
					otherProps.value.length ? 'shrink' : ''
				} form-input-label`}
				htmlFor={id}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
