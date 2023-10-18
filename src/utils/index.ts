import { v4 as uuidv4 } from 'uuid'
import { parse as parseMarkdown } from 'marked'

export const uuid = () => uuidv4()

export const fromMarkdown = (markdown: string) => parseMarkdown(markdown)
