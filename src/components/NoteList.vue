<script setup lang="ts">
import { Note, NoteId } from '~/entities/Note'

interface Props {
  notes: Note[]
}

defineProps<Props>()

const activeRouteId = useActiveNoteId()

const isNoteActive = (noteId: NoteId) => {
  return activeRouteId.value === noteId
}
</script>

<template>
  <ul class="note-list">
    <NoteListItem
      v-for="note of notes"
      :key="note.id"
      :note="note"
      :active="isNoteActive(note.id)"
    />
  </ul>
</template>

<style scoped>
.note-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
}
</style>
