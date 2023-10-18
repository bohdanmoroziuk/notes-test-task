<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'

const { getNote } = useNotes()

const activeRouteId = useActiveNoteId()

const note = computed(() => getNote(activeRouteId.value!))
</script>

<template>
  <div class="note-page">
    <template v-if="note">
      <NoteForm :note="note" />
    </template>
    <div v-else>
      Note not found
    </div>
  </div>
</template>

<style scoped>
.note-page {
  height: 100%;
}
</style>
