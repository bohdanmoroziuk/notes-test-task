<script setup lang="ts">
import { notifyError } from '~/utils'
import { useNotes } from '~/stores/useNotes'

const [leftDrawer] = useToggle('leftDrawer')

const { filteredNotes, getNotes } = await useNotes()

const handleNotesGet = async () => {
  try {
    await getNotes()
  } catch (error) {
    notifyError(error)
  }
}

await handleNotesGet()
</script>

<template>
  <div class="default-layout">
    <aside class="left-drawer" :class="{ 'left-drawer--shown': leftDrawer }">
      <Toolbar />
      <NoteList :notes="filteredNotes" />
    </aside>
    <Header />
    <Main>
      <slot />
    </Main>
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
}

@media screen and (min-width: 992px) {
  .default-layout {
    grid-template: auto 1fr / 25vw 1fr;
  }
}
</style>
