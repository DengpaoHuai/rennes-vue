<script setup lang="ts">
import { getPlanets } from '@/services/planets.service';
import type { PlanetResponse } from '@/types/planets.types';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

console.log(router)
console.log(route)
const planets = ref<PlanetResponse>({
    count: 0,
    next: "",
    previous: "",
    results: []
})

onMounted(() => {
    getPlanets("https://swapi.dev/api/planets").then((data) => {
        planets.value = data
    })
})
</script>

<template>
    <a href="/demo">go to demo</a>
    <RouterLink to="/demo">go to demo</RouterLink>
    <button @click="router.push('/demo')">go to demo</button>
    <ul>
        <li v-for="(planet, index) in planets.results" :key="index">
            {{ planet.name }}
        </li>
    </ul>
    <div>
        <button @click="planets.previous && getData(planets.previous)" :disabled="!planets.previous">Previous</button>
        <button @click="planets.next && getData(planets.next)" :disabled="!planets.next">Next</button>
    </div>
</template>