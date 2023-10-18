<script setup lang="ts">
interface Props {
  name: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  size: '1.75em'
})
</script>

<template>
  <Icon
    class="app-icon"
    :name="name"
    :size="size"
  />
</template>
