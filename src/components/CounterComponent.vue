<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

/*
const counter = ref(0)

const increment = () => {
    counter.value++
    console.log(counter)
}*/

const counter = reactive({
    counter: 0
})
console.log(counter)


type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

type PlanetResponse = {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}


const increment = () => {
    counter.counter++
    console.log(counter);
}

const planets = ref<PlanetResponse>({
    count: 0,
    next: "",
    previous: "",
    results: []
})

const getData = async () => {
    const response = await fetch("https://swapi.dev/api/planets?page=1");
    const data: PlanetResponse = await response.json();
    console.log(data);
    planets.value = data;
}

onMounted(() => {
    getData();
})

</script>


<template>


    <ul>
        <li v-for="(planet, index) in planets.results" :key="index">
            {{ planet.name }}
        </li>
    </ul>


    <button @click="increment">Je veux monter</button>
</template>