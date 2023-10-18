<script setup lang="ts">
import { Note } from '~/entities/Note'

interface Props {
  note: Note
  readonly: boolean
}

defineProps<Props>()
</script>

<template>
  <form class="note-form">
    <input
      :value="note.title"
      :readonly="readonly"
      class="note-form__input"
      type="text"
    >
    <textarea
      :value="note.text"
      :readonly="readonly"
      class="note-form__textarea"
    />
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  height: 100%;
}

.note-form__input,
.note-form__textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
}

.note-form__textarea {
  resize: none;
  height: 100%;
}
</style>
