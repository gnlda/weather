import React from 'react';

const Input = ({inputRef, ...props}) => {
    return (
        <input ref={inputRef} {...props}/>
    );
};

export default Input;