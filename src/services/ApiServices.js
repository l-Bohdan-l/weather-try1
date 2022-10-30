import axios from 'axios';

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

export const fetchCurrentWeather = async function (city) {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    console.log('d', API_KEY);
    console.log('city', city);
    try {
        const response = await axios.get(`lat={lat}&lon={lon}&appid=${API_KEY}`);
        console.log(response);
        return response
    } catch (error) {
        console.log(error)
    }    
};

export const fetchCity = async function (city) {
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
    try {
        const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}