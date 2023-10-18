import { Note, NoteId, createNote } from '~/entities/Note'

export const useNotes = () => {
  const searchTerm = useState('searchTerm', () => '')

  const notes = useState<Note[]>('notes', () => [
    createNote('My first note', 'No text'),
    createNote('My second note', 'Some text...')
  ])

  const filteredNotes = computed(() => {
    if (notes.value.length === 0) { return notes.value }

    if (searchTerm.value.length === 0) { return notes.value }

    return notes.value.filter(note => (
      note.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      note.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    ))
  })

  const hasNotes = computed(() => notes.value.length > 0)

  const addNote = (title: string, text: string) => {
    const note = createNote(title, text)

    notes.value = [note, ...notes.value]

    return note
  }

  const removeNote = (noteId: NoteId) => {
    notes.value = notes.value.filter(note => note.id !== noteId)
  }

  return {
    searchTerm,
    notes,
    filteredNotes,
    hasNotes,
    addNote,
    removeNote
  }
}
