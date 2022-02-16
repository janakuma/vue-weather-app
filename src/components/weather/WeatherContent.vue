<template>
    <div class="weather-wrapper">
        <ContentHeader />
        <CitySelector />
    </div>

</template>

<script>
import ContentHeader from './ContentHeader';
import CitySelector from './CitySelector';
export default {
    name: 'WeatherContent',
    components: {
        ContentHeader,
        CitySelector,
    },
}
</script>

<style>

</style>