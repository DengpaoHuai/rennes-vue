<script setup lang="ts">

const emit = defineEmits(['chevre'])

</script>
<template>
  <button type="button" @click="e => emit('chevre', e)">toto</button>
</template>
