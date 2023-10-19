<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'

const { filteredNotes } = await useNotes()

const [leftDrawer] = useToggle('leftDrawer')
</script>

<template>
  <aside class="left-drawer" :class="{ 'left-drawer--shown': leftDrawer }">
    <Toolbar />
    <NoteList :notes="filteredNotes" />
  </aside>
</template>

<style scoped>
.left-drawer {
  height: 100vh;
  border-right: 1px solid lightgrey;
  background-color: white;
}

@media screen and (max-width: 767px) {
  .left-drawer {
    display: none;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 1024;
    width: 100vw;
    transition: all 0.25s linear;
  }

  .left-drawer--shown {
    display: initial;
    left: 0;
  }
}

@media screen and (min-width: 768px) {
  .left-drawer {
    grid-row: 1 / 3;
  }
}
</style>
