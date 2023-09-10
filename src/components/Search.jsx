import React from 'react';
import Input from './UI/Input';
import Button from './UI/Button';

const Search = ({getWeather, inputRef, setWeather, setIsLoading}) => {
    return (
        <div className="search-box">
            <Input inputRef={inputRef} type="text" placeholder='City...' defaultValue={'gomel'} name={'input'}/>
            <Button getWeather={getWeather} inputRef={inputRef} setWeather={setWeather} setIsLoading={setIsLoading} />
        </div>
    );
};

export default Search;