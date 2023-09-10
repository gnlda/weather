import React from 'react';
import Loader from './UI/loader/Loader';

const Info = ({ weather, isLoading }) => {

    let weatherImgSrc = '';

    if (weather.status !== 'Snow'
        && weather.status !== 'Rain'
        && weather.status !== 'Drizzle'
        && weather.status !== 'Thunderstorm'
        && weather.status !== 'Clear'
        && weather.status !== 'Clouds') {
        weatherImgSrc = `src/img/Clouds.svg`;
    } else {
        weatherImgSrc = `src/img/${weather.status}.svg`;
    }

    return (
        <div className="info">
            {isLoading
                ? <div style={{top: '70px', position: 'absolute'}}><Loader /></div>
                : <div>
                    <div className="info__main-box">
                        <img src={weatherImgSrc} alt="weather" width={'160px'} height={'160px'} />
                        <h1>{weather.temp}°C</h1>
                        <h2>{weather.city}</h2>
                    </div>
                    <div className="info__sub-box">
                        <div className="humidity">
                            <img src="src/img/humidity.svg" alt="humidity" width={'60px'} />
                            <div className="humidity__text">
                                <h3>{weather.humidity}%</h3>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="wind">
                            <img src="src/img/wind.svg" alt="wind" width={'60px'} />
                            <div className="wind__text">
                                <h3>{weather.wind} km/h</h3>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Info;