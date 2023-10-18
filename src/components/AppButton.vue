<script setup lang="ts">
interface Props {
  label?: string;
}

const { label = '' } = defineProps<Props>()
</script>

<template>
  <button class="app-button">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<style>
.app-button {
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  transition: all 0.25s linear;
}

.app-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
