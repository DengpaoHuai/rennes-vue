<script setup lang="ts">

type Props = {
    title: string;
};

const { title } = defineProps<Props>();

</script>


<template>
    <slot name="header"></slot>
    <h1>
        {{ title }}
    </h1>
    <slot></slot>
</template>