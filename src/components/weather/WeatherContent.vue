<template>
    <div class="weather-wrapper">
        <ContentHeader />
        <CitySelector @selectCity="selectCity" />
        <WeatherList :weatherList="weatherList"  />
    </div>

</template>

<script>
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
    data() {
        return {
            weatherList: []

        }
    },
    methods: {
        selectCity(city) {
            console.log('parent recieved', city);
            if(city.selected) {
                this.weatherList.push(city);
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