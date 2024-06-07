<script setup lang="ts">
import { createMovieSchema } from '@/schemas/movie.schema';
import { updateMovie } from '@/services/movies.service';
import useMovies from '@/store/useMoviesStore';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const moviesStore = useMovies();
const { movies } = storeToRefs(moviesStore);
const { getMovieById, updateMovieById, setAllMovies } = moviesStore

const asyncAction = await setAllMovies();

const id = route.params.id as string;

const form = reactive({
    title: "",
    description: "",
    director: "",
});

const setMovie = () => {
    const currentMovie = getMovieById(id);
    if (currentMovie) {
        form.title = currentMovie.title;
        form.description = currentMovie.description;
        form.director = currentMovie.director;
    }

}

onMounted(() => {
    setMovie()
});

watch(movies, () => {
    setMovie()
})



const router = useRouter()
const onSubmit = async () => {
    const formMovie = createMovieSchema.parse(form);
    await updateMovie(id, formMovie);
    updateMovieById({
        ...formMovie,
        _id: id,
    });
    router.push("/list_movies");
}
</script>


<template>

    <form @submit.prevent="onSubmit">
        <input v-model="form.title" type="text" placeholder="Title" />
        <input v-model="form.description" type="text" placeholder="Description" />
        <input v-model="form.director" type="text" placeholder="Director" />
        <button type="submit">Create Movie</button>
    </form>

</template>