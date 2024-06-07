<script setup lang="ts">
import { ref } from 'vue';

const { state } = defineProps<{
    state: string;
}>();

</script>

<template>
    <div>
        <p>coucou</p>
        <h1>{{ state }}</h1>
    </div>
</template>