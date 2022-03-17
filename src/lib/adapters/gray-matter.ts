import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Article } from 'lib/models/articles'

type MatterAdapterResult = {
  article: Article
  content?: string
}

export const matterAdapter = (filePath: string, fileName: string): MatterAdapterResult => {
  const markdownWithMeta = fs.readFileSync(path.join(filePath, fileName + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  return {
    article: frontMatter as Article,
    content: content
  }
}
