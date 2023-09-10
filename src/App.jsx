import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Search from './components/Search'
import Info from './components/Info'
import getWeather from './queries/getWeather'


function App() {
	const inputRef = useRef();
	const [isLoading, setIsLoading] = useState(true);
	const [weather, setWeather] = useState({
		status: 'Clouds',
		temp: 21,
		city: 'Gomel',
		humidity: 71,
		wind: 5.24,
	});

	useEffect(() => {
		getWeather({setWeather, setIsLoading, inputRef})
	}, [])

	return (
		<div className='all'>
			<Search getWeather={getWeather} inputRef={inputRef} setWeather={setWeather} setIsLoading={setIsLoading}/>
			<Info isLoading={isLoading} weather={weather} />
		</div>
	)
}

export default App
