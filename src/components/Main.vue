<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  height: 100%;
}

@media screen and (min-width: 768px) {
  .main {
    grid-column: 2 / 3;
  }
}
</style>
