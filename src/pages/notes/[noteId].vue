<script setup lang="ts">
import { toDateTime, notifyError } from '~/utils'
import { Note } from '~/entities/Note'
import { useNotes } from '~/stores/useNotes'
import { useEditMode } from '~/stores/useEditMode'

const { getNote, updateNote } = await useNotes()

const activeRouteId = useActiveNoteId()

const note = computed(() => getNote(activeRouteId.value!))

const timestamp = computed(() => (
  note.value
    ? toDateTime(note.value.createdAt)
    : ''
))

const { editMode, disableEditMode } = useEditMode()

watch(activeRouteId, disableEditMode, { immediate: true })

const handleNoteUpdate = async (note: Note) => {
  try {
    await updateNote(note)
  } catch (error) {
    notifyError(error)
  }
}
</script>

<template>
  <div class="note-page">
    <template v-if="note">
      <div class="timestamp">
        {{ timestamp }}
      </div>
      <template v-if="editMode">
        <NoteForm
          :note="note"
          @submit="handleNoteUpdate"
        />
      </template>
      <template v-else>
        <NotePreview :note="note" />
      </template>
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

.timestamp {
  padding: 1rem 0;
  text-align: center;
}
</style>
