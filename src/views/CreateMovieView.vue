<script setup lang="ts">
import { createMovieSchema } from '@/schemas/movie.schema';
import { createMovie } from '@/services/movies.service';
import useMovies from '@/store/useMoviesStore';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const { addMovie } = useMovies()
import CustomInput from '@/components/CustomInput.vue'
const form = reactive({
    title: '',
    description: '',
    director: '',
})

const submit = async () => {
    const response = createMovieSchema.safeParse(form)
    console.log(response)
    const data = await createMovie(form)
    console.log(data)
    addMovie(data)
    router.push('/list_movies')
}

</script>

<template>

    <form @submit.prevent="submit">
        <CustomInput v-focus v-model="form.title" type="text" placeholder="Title" />
        <CustomInput v-model="form.description" type="text" placeholder="Description" />
        <CustomInput v-model="form.director" type="text" placeholder="Director" />
        <button type="submit">Create Movie</button>
    </form>

</template>