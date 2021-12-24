import React from 'react'

const LabelInput = ({ props }) => {
    const {
        id,
        placeholder,
        label,
        type
    } = props;
    return (
        <div>
            <label htmlFor={id}>{ label }</label>
            <input
                type={ type || 'text'}
                id={ id }
                placeholder={ placeholder }
            />
        </div>
    )
}

export default LabelInput;