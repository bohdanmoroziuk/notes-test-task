<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'

const { searchTerm } = await useNotes()

const [, toggleLeftDrawer] = useToggle('leftDrawer')

const [editMode, toggleEditMode] = useToggle('editMode')

const editModeIcon = computed(() => editMode.value ? 'fa-brands fa-markdown' : 'fa-solid fa-pen-to-square')
</script>

<template>
  <header class="header">
    <AppButtonGroup>
      <AppButton
        class="d-md-none"
        @click="toggleLeftDrawer"
      >
        <AppIcon name="fa-solid fa-bars" />
      </AppButton>
      <AppButton @click="toggleEditMode">
        <AppIcon :name="editModeIcon" />
      </AppButton>
    </AppButtonGroup>
    <AppInput
      v-model="searchTerm"
      type="search"
      placeholder="search"
    />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
