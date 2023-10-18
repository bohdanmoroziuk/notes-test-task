export const useActiveNoteId = () => {
  const route = useRoute()

  const activeNoteId = computed(() => route.params.noteId as string | undefined)

  return activeNoteId
}
