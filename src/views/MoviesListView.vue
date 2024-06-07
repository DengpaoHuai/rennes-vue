<script setup lang="ts">
import type { Movie } from '@/schemas/movie.schema';
import { deleteMovie, getMovie, getMovies } from '@/services/movies.service';
import useMovies from '@/store/useMoviesStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';

const movieStore = useMovies()
const { deleteMovieById } = movieStore

const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: () => getMovies()
})

const { mutate } = useMutation({
    mutationFn: async (id: string) => {
        await deleteMovie(id)
    },
    onMutate: async (id) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries({ queryKey: ['movies'] })

        // Snapshot the previous value
        const previousMovies = queryClient.getQueryData(['movies'])

        // Optimistically update to the new value
        queryClient.setQueryData(['movies'], (old: Movie[]) => old.filter((movie) => movie._id !== id))

        // Return a context object with the snapshotted value
        return { previousMovies }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['movies'] }),
    mutationKey: ['deleteMovie'],
})

const deleteItem = async (id: string) => {
    await deleteMovie(id)
    deleteMovieById(id)
}
const queryClient = useQueryClient()
const merciParmis = (id: string) => {
    queryClient.prefetchQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovie(id)
    })
}

</script>


<template>
    <MyButton @chevre="e => console.log(e)"></MyButton>
    <RouterLink to="/create_movie">Create Movie</RouterLink>
    <div>
        <h1>Movies</h1>
        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }}
                <button @click="mutate(movie._id)">supprimer</button>
                <RouterLink @mouseover="merciParmis(movie._id)" :to="{ name: 'EditMovie', params: { id: movie._id } }">
                    update</RouterLink>

            </li>

        </ul>
    </div>
</template>