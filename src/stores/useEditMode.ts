export const useEditMode = () => {
  const editMode = useState('editMode', () => false)

  const toggleEditMode = () => {
    editMode.value = !editMode.value
  }

  const enableEditMode = () => {
    editMode.value = true
  }

  const disableEditMode = () => {
    editMode.value = false
  }

  return {
    editMode,
    toggleEditMode,
    enableEditMode,
    disableEditMode
  }
}
