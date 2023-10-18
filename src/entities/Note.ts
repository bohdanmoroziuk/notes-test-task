import { uuid } from '~/utils'

export type NoteId = string;

export interface Note {
  id: NoteId
  title: string
  text: string
  createdAt: number
}

export const createNote = (title: string, text: string): Note => ({
  id: uuid(),
  title,
  text,
  createdAt: Date.now()
})
