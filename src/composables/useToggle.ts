export const useToggle = (key: string, initialState = false) => {
  const state = useState(key, () => initialState)

  const toggle = () => {
    state.value = !state.value
  }

  const setOn = () => {
    state.value = true
  }

  const setOff = () => {
    state.value = false
  }

  return [readonly(state), toggle, setOn, setOff] as const
}
