<script setup lang="ts">
import { Note } from '~/entities/Note'

interface Props {
  note: Note
}

interface Emits {
  (event: 'submit', note: Note): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const model = useState('model', () => ({} as Note))

watch(
  () => props.note,
  (note) => { model.value = { ...note } },
  { deep: true, immediate: true }
)

const handleSubmit = () => {
  emit('submit', model.value)
}

onUnmounted(handleSubmit)
</script>

<template>
  <form class="note-form">
    <input
      v-model="model.title"
      class="note-form__input"
      type="text"
    >
    <textarea
      v-model="model.text"
      class="note-form__textarea"
    />
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  height: 100%;
}

.note-form__input,
.note-form__textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
}

.note-form__textarea {
  resize: none;
  height: 100%;
}
</style>
