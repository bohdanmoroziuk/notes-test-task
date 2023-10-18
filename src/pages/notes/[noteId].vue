<script setup lang="ts">
const activeRouteId = useActiveNoteId()
</script>

<template>
  <div class="note-page">
    {{ activeRouteId }}
  </div>
</template>
