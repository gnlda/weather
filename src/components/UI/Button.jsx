import React from 'react';

const Button = ({ getWeather, ...props }) => {
    return (
        <button onClick={() => getWeather({...props})}>
            <img src="src/img/search.svg" alt="humidity" width={'20px'} />
        </button>
    );
};

export default Button;