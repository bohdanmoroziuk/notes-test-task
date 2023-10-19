<script setup lang="ts">
interface Props {
  name: string
}

defineProps<Props>()
</script>

<template>
  <FontAwesomeIcon
    class="app-icon"
    :icon="name"
  />
</template>
