import { v4 as uuidv4 } from 'uuid'
import { parse as parseMarkdown } from 'marked'

export const uuid = () => uuidv4()

export const fromMarkdown = (markdown: string) => parseMarkdown(markdown)

export const createDateTimeFormatter = (locales: string | string[], options: Intl.DateTimeFormatOptions) =>
  (value: number) => (
    new Intl.DateTimeFormat(locales, options).format(value)
  )

export const toDateTime = createDateTimeFormatter('uk-UA', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
})

export const toTime = createDateTimeFormatter('uk-UA', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
})
