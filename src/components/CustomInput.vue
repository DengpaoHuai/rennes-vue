<script setup lang="ts">

type PropsType = {
    modelValue: string
}
const { modelValue } = defineProps<PropsType>()

const emit = defineEmits(['update:modelValue'])

</script>


<template>

    <input :value="modelValue" @input="(e: Event) => {
        if (e.target) {
            let { value } = e.target as HTMLInputElement
            emit('update:modelValue', value)
        }
    }" type="text" />

</template>

<style scoped>
input {
    padding: 10px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    width: 100%;
    box-shadow: 10px -1px 5px -5px rgba(0, 0, 0, 0.63);
}
</style>