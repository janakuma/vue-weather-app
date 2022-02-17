<template>
    <div class="weather-wrapper">
        <ContentHeader />
        <CitySelector @selectCity="selectCity" />
        <WeatherList :weatherList="weatherList"  />
    </div>

</template>

<script>
import weatherMixin from "@/mixins/weatherMixin";
import ContentHeader from './ContentHeader';
import CitySelector from './CitySelector';
import WeatherList from './WeatherList';
export default {
    name: 'WeatherContent',
    components: {
        ContentHeader,
        CitySelector,
        WeatherList
    },
    mixins: [
        weatherMixin
    ],
    data() {
        return {
            weatherList: []
        }
    },
    methods: {
        async selectCity(city) {
            //console.log('parent recieved', city);
            if(city.selected) {
                const weather = await this.getWeatherInfo(city);
                this.weatherList.push(weather);

            } else {
                const index = this.weatherList.findIndex(weather =>
                    weather.code === city.code
                );
                this.weatherList.splice(index,1);
            }
        }
    },
}
</script>

<style>

</style>