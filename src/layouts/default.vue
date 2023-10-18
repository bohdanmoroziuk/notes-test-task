<template>
  <div class="default-layout">
    <aside class="left-drawer">
      Left Drawer
    </aside>
    <header class="header">
      Header
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
</style>
