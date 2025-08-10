import React from 'react';
import { Props } from './props';
const FormInput = (props: Props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className="form-input"
        />
    );
};

export default FormInput;
