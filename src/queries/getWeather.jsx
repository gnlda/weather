import axios from 'axios';

const getWeather = async ({setWeather, setIsLoading, inputRef}) => {
    const inputCity = inputRef.current.value;
    const link = 'https://api.openweathermap.org/data/2.5/weather?appid=e4a6be0042c2d258edd322ebfca566b6';
    const query = link + `&q=${inputCity}`
    const weatherClone = {
        status: '',
        temp: 0,
        city: '',
        humidity: 0,
        wind: 0,
    }
    setIsLoading(true);
    await axios.get(query)
        .then(res => {
            weatherClone.status = res.data.weather[0].main;
            weatherClone.temp = Math.round(res.data.main.temp - 273.15);
            weatherClone.humidity = res.data.main.humidity;
            weatherClone.wind = res.data.wind.speed;
            weatherClone.city = res.data.name;
        });
    setWeather(weatherClone);
    setIsLoading(false);
};

export default getWeather;