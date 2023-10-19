<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (event: 'update:modelValue', modelValue: string): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const modelValue = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input
    v-model="modelValue"
    class="app-input"
  >
</template>

<style scoped>
.app-input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid lightgrey;
  outline: none;
  transition: all 0.25s linear;
}

.app-input:focus {
  border: 2px solid lightskyblue;
}
</style>
