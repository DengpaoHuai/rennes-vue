<script setup lang="ts">

const { title } = defineProps<{

    title: string;

}>();
</script>

<template>
    <div class="list-item">
        <input type="text" :readonly="true" :value="title" />
    </div>
</template>
