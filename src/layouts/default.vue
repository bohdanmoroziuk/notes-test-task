<script setup lang="ts">
import { notifyError, confirm } from '~/utils'
import { useNotes } from '~/stores/useNotes'
import { useEditMode } from '~/stores/useEditMode'

const [leftDrawer, toggleLeftDrawer] = useToggle('leftDrawer')

const activeNoteId = useActiveNoteId()

const { searchTerm, filteredNotes, getNotes, addNote, removeNote } = await useNotes()

const { editMode, toggleEditMode } = useEditMode()

const editModeIcon = computed(() => (
  editMode.value
    ? 'material-symbols:markdown'
    : 'material-symbols:edit-square'
))

const goHome = () => {
  navigateTo({ name: 'index' })
}

const handleNotesGet = async () => {
  try {
    await getNotes()
  } catch (error) {
    notifyError(error)
  }
}

const handleNoteAdd = async () => {
  try {
    const note = await addNote('New note', '')

    navigateTo({ name: 'notes-noteId', params: { noteId: note.id } })
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

      goHome()
    } catch (error) {
      notifyError(error)
    }
  }
}

await handleNotesGet()
</script>

<template>
  <div class="default-layout">
    <aside class="left-drawer" :class="{ 'left-drawer--shown': leftDrawer }">
      <div class="toolbar">
        <AppButtonGroup>
          <AppButton @click="goHome">
            <AppIcon name="ic:sharp-home" />
          </AppButton>
          <AppButton @click="handleNoteAdd">
            <AppIcon name="material-symbols:add-box-sharp" />
          </AppButton>
          <AppButton @click="handleNoteDelete">
            <AppIcon name="ic:baseline-delete" />
          </AppButton>
        </AppButtonGroup>
        <AppButton
          class="d-md-none"
          @click="toggleLeftDrawer"
        >
          <AppIcon name="material-symbols:cancel" />
        </AppButton>
      </div>
      <NoteList :notes="filteredNotes" />
    </aside>
    <header class="header">
      <AppButtonGroup>
        <AppButton
          class="d-md-none"
          @click="toggleLeftDrawer"
        >
          <AppIcon name="ic:baseline-menu" />
        </AppButton>
        <AppButton @click="toggleEditMode">
          <AppIcon :name="editModeIcon" />
        </AppButton>
      </AppButtonGroup>
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
}

.default-layout > * {
  padding: 1rem;
}

.left-drawer {
  height: 100vh;
  border-right: 1px solid lightgrey;
  background-color: white;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1rem;
  padding: 0 1rem 1rem 1rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main {
  height: 100%;
}

@media screen and (max-width: 767px) {
  .default-layout {
    position: relative;
  }

  .left-drawer {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 1024;
    width: 100vw;
    transition: all 0.25s linear;
  }

  .left-drawer--shown {
    left: 0;
  }
}

@media screen and (min-width: 768px) {
  .default-layout {
    display: grid;
    grid-template: auto 1fr / 40vw 1fr;
  }

  .left-drawer {
    grid-row: 1 / 3;
  }

  .main {
    grid-column: 2 / 3;
  }
}

@media screen and (min-width: 992px) {
  .default-layout {
    grid-template: auto 1fr / 25vw 1fr;
  }
}
</style>
