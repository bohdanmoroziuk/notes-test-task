<script setup lang="ts">
import { notifyError } from '~/utils'
import { useNotes } from '~/stores/useNotes'

const { getNotes } = await useNotes()

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
    <LeftDrawer />
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

@media screen and (max-width: 767px) {
  .default-layout {
    position: relative;
  }
}

@media screen and (min-width: 768px) {
  .default-layout {
    display: grid;
    grid-template: auto 1fr / 40vw 1fr;
  }
}

@media screen and (min-width: 992px) {
  .default-layout {
    grid-template: auto 1fr / 25vw 1fr;
  }
}
</style>
