import axios from 'axios';

const URL = 'https://api.weatherapi.com/v1/current.json?';
const API_KEY = '3e87fd93e0c54952a75114414210806';

export const getWeather = async (cityname) => {
        const {data} = await axios.get(URL + `key=${API_KEY}&q=${cityname}`);
        return data;
}