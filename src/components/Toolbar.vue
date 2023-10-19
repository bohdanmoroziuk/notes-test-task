<script setup lang="ts">
import { notifyError, confirm, goToHomePage, goToNotePage } from '~/utils'
import { useNotes } from '~/stores/useNotes'

const { addNote, removeNote } = await useNotes()

const [, toggleLeftDrawer] = useToggle('leftDrawer')

const activeNoteId = useActiveNoteId()

const handleNoteAdd = async () => {
  try {
    const note = await addNote('New note', '')

    goToNotePage(note.id)
  } catch (error) {
    notifyError(error)
  }
}

const handleNoteDelete = async () => {
  if (!activeNoteId.value) {
    alert('No note selected.')
    return
  }

  const isOk = confirm('Are you sure you want to delete the note?')

  if (isOk) {
    try {
      await removeNote(activeNoteId.value)

      goToHomePage()
    } catch (error) {
      notifyError(error)
    }
  }
}
</script>

<template>
  <div class="toolbar">
    <AppButtonGroup>
      <AppButton @click="goToHomePage">
        <AppIcon name="fa-solid fa-house" />
      </AppButton>
      <AppButton @click="handleNoteAdd">
        <AppIcon name="fa-solid fa-plus" />
      </AppButton>
      <AppButton @click="handleNoteDelete">
        <AppIcon name="fa-solid fa-trash" />
      </AppButton>
    </AppButtonGroup>
    <AppButton
      class="d-md-none"
      @click="toggleLeftDrawer"
    >
      <AppIcon name="fa-solid fa-xmark" />
    </AppButton>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1rem;
  padding: 0 1rem 1rem 1rem;
}
</style>
