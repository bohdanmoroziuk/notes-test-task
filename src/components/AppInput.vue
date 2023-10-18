<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <input
    v-model="modelValue"
    class="app-input"
  >
</template>

<style scoped>
.app-input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid lightgrey;
  outline: none;
  transition: all 0.25s linear;
}

.app-input:focus {
  border: 2px solid lightskyblue;
}
</style>
