import React, {useState} from 'react';
import './index.scss';
import axios from "axios";
import Loader from "react-loaders";

function Whether () {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d44fe64ff2e12485694a45893621b601`

    const searchLocation = (event) => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
        setLocation('');
    }

    return (
        <>
            <div className="whether">
                <form className="whether-search">
                    <label>{!data.name ? 'You need write city:' : ''}</label>
                    <input
                        value={location}
                        onChange={event => {
                            event.preventDefault();
                            setLocation(event.target.value);
                        }}
                        placeholder='Enter Location'
                        type="text" required />
                    <button onClick={() => searchLocation(location)} className='whether-button'>Search</button>
                    <p>{!data.name ? 'City not found' : ''}</p>
                </form>
                <section className="whether-package">
                    <div className="top">
                        <div className="location">
                            <p>{data.name}</p>
                        </div>
                        <div className="temp">
                            {data.main ? <h1>{((data.main.feels_like - 32)*5/9).toFixed()}°C</h1> : null}
                        </div>
                        <div className="description">
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div>
                    </div>

                    {data.name !== undefined &&
                        <section className="bottom">
                            <div className="feels">
                                {data.main ? <p className='bold'>{((data.main.feels_like - 32)*5/9).toFixed()}°C</p> : null}
                                <p>Feels Like</p>
                            </div>
                            <div className="humidity">
                                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                                <p>Wind Speed</p>
                            </div>
                        </section>
                    }
                </section>
            </div>
            <Loader type="pacman" active/>
        </>
    );
}

export default Whether;