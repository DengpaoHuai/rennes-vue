<script setup lang="ts">
import useMovies from '@/store/useMoviesStore';
import { storeToRefs } from 'pinia';

const { movies } = storeToRefs(useMovies())

</script>


<template>
    <RouterLink to="/create_movie">Create Movie</RouterLink>
    <div>
        <h1>Movies</h1>
        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }}
            </li>
        </ul>
    </div>
</template>