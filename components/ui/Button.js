import React from 'react'

const Button = ({ props }) => {
    const {
        label,
    } = props;
    return (
        <input
            type="submit"
            value={ label }
        />
    )
}

export default Button;