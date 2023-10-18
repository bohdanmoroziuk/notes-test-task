import { Note, NoteId, createNote } from '~/entities/Note'

export const useNotes = () => {
  const notes = useState<Note[]>('notes', () => [
    createNote('My first note', 'No text'),
    createNote('My second note', 'Some text...')
  ])

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
    notes,
    hasNotes,
    addNote,
    removeNote
  }
}
