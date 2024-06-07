<script setup lang="ts">
import { getPlanets } from '@/services/planets.service';
import type { PlanetResponse } from '@/types/planets.types';
import { useQuery } from '@tanstack/vue-query';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const page = ref(1)
const { data, isLoading } = useQuery<PlanetResponse>(
    {
        queryKey: ["planets", page],
        queryFn: () => getPlanets("https://swapi.dev/api/planets?page=" + page.value),
        refetchOnWindowFocus: true
    }
)

const scrollListener = (e) => {
    console.log(e)
}

onMounted(() => {
    window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener)
})

</script>

<template>
    <a href="/demo">go to demo</a>
    <RouterLink to="/list_movies">go to demo</RouterLink>
    <button @click="router.push('/demo')">go to demo</button>
    <ul>
        <li v-for="(planet, index) in data?.results" :key="index">
            {{ planet.name }}
        </li>
    </ul>
    <div>
        <button @click="data?.previous && page--" :disabled="!data?.previous">Previous</button>
        <button @click="data?.next && page++" :disabled="!data?.next">Next</button>
    </div>
</template>