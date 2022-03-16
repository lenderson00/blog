import fs from 'fs'
import path from 'path'

export const getAllTags = (): string[] => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/articles'))

  const tags = files.filter(item => item.split('.').length <= 1)

  return tags
}
