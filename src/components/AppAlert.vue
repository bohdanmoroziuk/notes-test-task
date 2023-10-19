<script setup lang="ts">
interface Props {
  variant?: 'info' | 'error'
  message?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'info',
  message: ''
})
</script>

<template>
  <p
    class="app-alert"
    :class="`app-alert--${variant}`"
  >
    <slot>
      {{ message }}
    </slot>
  </p>
</template>

<style scoped>
.app-alert {
  font-size: 1.5rem;
}

.app-alert--info {
  color: lightgrey;
}

.app-alert--error {
  color: crimson;
}
</style>
