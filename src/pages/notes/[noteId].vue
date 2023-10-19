<script setup lang="ts">
import { toDateTime, notifyError } from '~/utils'
import { Note } from '~/entities/Note'
import { useNotes } from '~/stores/useNotes'

const { getNote, updateNote } = await useNotes()

const activeRouteId = useActiveNoteId()

const note = computed(() => getNote(activeRouteId.value!))

const timestamp = computed(() => note.value ? toDateTime(note.value.createdAt) : '')

const [editMode,,, disableEditMode] = useToggle('editMode')

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
      <NoteForm
        v-if="editMode"
        :note="note"
        @submit="handleNoteUpdate"
      />
      <NotePreview
        v-else
        :note="note"
      />
    </template>
    <AppAlert
      v-else
      variant="error"
    >
      Note not found
    </AppAlert>
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
