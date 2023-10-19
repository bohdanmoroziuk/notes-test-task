<script setup lang="ts">
import { toTime, goToNotePage } from '~/utils'
import { Note } from '~/entities/Note'

interface Props {
  note: Note
  active: boolean
}

const props = defineProps<Props>()

const title = computed(() => props.note.title)

const text = computed(() => props.note.text ? props.note.text.slice(0, 10) : 'No additional text')

const time = computed(() => toTime(props.note.createdAt))
</script>

<template>
  <li
    class="note-list-item"
    :class="{ 'note-list-item--active': active }"
    @click="goToNotePage(note.id)"
  >
    <h4 class="note-list-item__title">
      {{ title }}
    </h4>
    <div class="note-list-item__extra">
      <p class="note-list-item__time">
        {{ time }}
      </p>
      <p class="note-list-item__text">
        {{ text }}
      </p>
    </div>
  </li>
</template>

<style scoped>
.note-list-item {
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: all 0.25s linear;
}

.note-list-item:hover:not(.note-list-item--active) {
  background-color: rgba(0, 0, 0, 0.05);
}

.note-list-item--active {
  background-color: yellow;
}

.note-list-item__extra {
  display: flex;
  grid-gap: 0.5rem;
}

.note-list-item__text {
  color: lightgrey;
}
</style>
