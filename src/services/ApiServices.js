import axios

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetch = function (city) {
    console.log('d', API_KEY);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
};
