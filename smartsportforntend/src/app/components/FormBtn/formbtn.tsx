import React from 'react';
import { Props } from './props';
const FormBtn = (props: Props) => {
    return (
        <button
            type={props.type || 'button'}
            className={props.className}
            style={props.style}
            id={props.id}
            disabled={props.disabled}>
            {props.children || props.content}
        </button>
    );
};

export default FormBtn;
