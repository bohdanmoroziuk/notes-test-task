<template>
  <div class="app-button-group">
    <slot />
  </div>
</template>

<style scoped>
.app-button-group {
  display: flex;
  align-items: center;
  grid-column-gap: 1rem;
}
</style>
