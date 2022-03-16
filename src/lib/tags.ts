import fs from 'fs'
import path from 'path'

export const getAllTags = (): string[] => {
    const files = fs.readdirSync(path.join(process.cwd(), 'src/articles'))

    const tags = files.map(item => item)

    return tags
}