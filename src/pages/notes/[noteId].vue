<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'
import { useEditMode } from '~/stores/useEditMode'

const { getNote } = useNotes()

const activeRouteId = useActiveNoteId()

const note = computed(() => getNote(activeRouteId.value!))

const { editMode, disableEditMode } = useEditMode()

const readonly = computed(() => editMode.value === false)

watch(activeRouteId, disableEditMode, { immediate: true })
</script>

<template>
  <div class="note-page">
    <template v-if="note">
      <NoteForm
        :note="note"
        :readonly="readonly"
      />
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
