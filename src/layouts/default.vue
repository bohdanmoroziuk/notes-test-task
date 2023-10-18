<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'

const activeNoteId = useActiveNoteId()

const { searchTerm, filteredNotes, addNote, removeNote } = useNotes()

const goHome = () => {
  navigateTo({ name: 'index' })
}

const handleNoteAdd = () => {
  const note = addNote('New note', '')

  navigateTo({ name: 'notes-noteId', params: { noteId: note.id } })
}

const handleNoteDelete = () => {
  if (!activeNoteId.value) {
    alert('No note selected.')
    return
  }

  const isOk = confirm('Are you sure you want to delete the note?')

  if (isOk) {
    removeNote(activeNoteId.value)
    goHome()
  }
}
</script>

<template>
  <div class="default-layout">
    <aside class="left-drawer">
      <div class="toolbar">
        <AppButton @click="goHome">
          Home
        </AppButton>
        <AppButton @click="handleNoteAdd">
          New
        </AppButton>
        <AppButton @click="handleNoteDelete">
          Delete
        </AppButton>
      </div>
      <NoteList :notes="filteredNotes" />
    </aside>
    <header class="header">
      <div>
        Icon
      </div>
      <AppInput
        v-model="searchTerm"
        type="search"
        placeholder="search"
      />
    </header>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.default-layout {
  height: 100vh;
  display: grid;
  grid-template: auto 1fr / 20vw 1fr;
  /* grid-gap: 1rem; */
}

.default-layout > * {
  padding: 1rem;
  /* border: 1px solid red; */
}

.left-drawer {
  grid-row: 1 / 3;
  border-right: 1px solid lightgrey;
}

.main {
  grid-column: 2 / 3;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 1rem 1rem 1rem;
}
</style>
