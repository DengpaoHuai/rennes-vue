<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import type { Movie } from '@/schemas/movie.schema';
import { toRefs } from 'vue';
const demo = useFetch<Movie[]>(`https://crudcrud.com/api/9c6cb3e8adf34de79a6280930b2d6a19/movies`)
const { data, loading } = toRefs(demo)

</script>


<template>
    <RouterLink to="/create_movie">Create Movie</RouterLink>
    <div v-if="loading">Loading...</div>
    <div>
        <h1>Movies</h1>
        <ul v-if="data">
            <li v-for="movie in data" :key="movie._id">
                {{ movie.title }}
            </li>
        </ul>
    </div>
</template>