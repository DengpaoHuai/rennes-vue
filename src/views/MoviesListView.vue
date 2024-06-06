<script setup lang="ts">
import { deleteMovie } from '@/services/movies.service';
import useMovies from '@/store/useMoviesStore';
import { storeToRefs } from 'pinia';

const movieStore = useMovies()
const { movies } = storeToRefs(movieStore)
const { deleteMovieById } = movieStore

const deleteItem = async (id: string) => {
    await deleteMovie(id)
    deleteMovieById(id)
}

</script>


<template>
    <RouterLink to="/create_movie">Create Movie</RouterLink>
    <div>
        <h1>Movies</h1>
        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }}
                <button @click="deleteItem(movie._id)">supprimer</button>
            </li>

        </ul>
    </div>
</template>