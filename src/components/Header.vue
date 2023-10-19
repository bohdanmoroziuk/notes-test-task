<script setup lang="ts">
import { useNotes } from '~/stores/useNotes'
import { useEditMode } from '~/stores/useEditMode'

const { searchTerm } = await useNotes()

const [, toggleLeftDrawer] = useToggle('leftDrawer')

const { editMode, toggleEditMode } = useEditMode()

const editModeIcon = computed(() => (
  editMode.value
    ? 'material-symbols:markdown'
    : 'material-symbols:edit-square'
))
</script>

<template>
  <header class="header">
    <AppButtonGroup>
      <AppButton
        class="d-md-none"
        @click="toggleLeftDrawer"
      >
        <AppIcon name="ic:baseline-menu" />
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
