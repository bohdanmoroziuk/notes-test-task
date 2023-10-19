<script setup lang="ts">
import { fromMarkdown } from '~/utils'
import { Note } from '~/entities/Note'

interface Props {
  note: Note
}

defineProps<Props>()
</script>

<template>
  <form class="note-preview">
    <p class="note-preview__title">
      {{ note.title }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="note-preview__text" v-html="fromMarkdown(note.text)" />
  </form>
</template>

<style scoped>
.note-preview {
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  height: 100%;
}

.note-preview__title,
.note-preview__text {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
