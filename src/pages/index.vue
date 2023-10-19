<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'

const { hasNotes } = await useNotes()

const message = computed(() => (
  hasNotes.value
    ? 'Select an existing note or create a new one.'
    : 'No notes. Try adding one.'
))
</script>

<template>
  <div class="index-page">
    <AppAlert>
      {{ message }}
    </AppAlert>
  </div>
</template>

<style scoped>
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}
</style>
