export const useToggle = (key: string, initialState = false) => {
  const state = useState(key, () => initialState)

  const toggle = () => {
    state.value = !state.value
  }

  return [readonly(state), toggle] as const
}
