import axios from 'axios';

const weatherMixin = {
    data() {
        return {};
    },
    methods: {
        async getWeatherInfo(city) {
            const APP_KEY="d8f89c1308b7c1760d6cb2e1eb9b561d"
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${APP_KEY}`;
            const res = await axios.get(url);
            const { main, wind, weather } = res.data;
            const weatherResult = {
                label: city.label,
                code: city.code,
                temperature: this.displayTemperature(main.temp),
                humidity: main.humidity,
                wind: wind.speed,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
            };
            return weatherResult;
        },
        displayTemperature(temperature) {
            return (temperature - 273).toFixed(1);
        }
    }
}

export default weatherMixin;