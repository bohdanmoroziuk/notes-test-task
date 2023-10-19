import { IDB } from '~/services/IDB'
import { Note, NoteId, createNote } from '~/entities/Note'

export const useNotes = async () => {
  const idb = await IDB.initialize<Note>('notes')

  const searchTerm = useState('searchTerm', () => '')

  const notes = useState<Note[]>('notes', () => [])

  const filteredNotes = computed(() => {
    if (notes.value.length === 0) { return notes.value }

    if (searchTerm.value.length === 0) { return notes.value }

    return notes.value.filter(note => (
      note.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      note.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    ))
  })

  const hasNotes = computed(() => notes.value.length > 0)

  const getNotes = async () => {
    try {
      notes.value = await idb.getItems()
    } catch (error) {
      notes.value = []

      throw error
    }
  }

  const getNote = (noteId: NoteId) => {
    return notes.value.find(note => note.id === noteId)
  }

  const addNote = async (title: string, text: string) => {
    const note = createNote(title, text)

    await idb.addItem(note)

    notes.value = [note, ...notes.value]

    return note
  }

  const updateNote = async (note: Note) => {
    await idb.updateItem({ ...note })

    notes.value = notes.value.map(oldNote => (
      oldNote.id === note.id
        ? note
        : oldNote
    ))
  }

  const removeNote = async (noteId: NoteId) => {
    await idb.deleteItem(noteId)

    notes.value = notes.value.filter(note => note.id !== noteId)
  }

  return {
    searchTerm,
    notes,
    filteredNotes,
    hasNotes,
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
  }
}
