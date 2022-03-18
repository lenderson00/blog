import fs from 'fs'
import path from 'path'
import { matterAdapter } from '../adapters/gray-matter'
import { Article, Articles } from '../models/articles'

export const getArticleFromFolder = (value: string): Articles => {
  const articlesList: Article[] = []
  const filePath = `src/articles/${value}`
  const paths = getAllSlugByFolder(value)

  for (const fileName of paths) {
    const { article, content } = matterAdapter(filePath, fileName)

    articlesList.push({
      ...article,
      content
    })
  }

  return {
    tag: value,
    articles: articlesList
  }
}

export const getAllSlugByFolder = (folder: string): string[] => {
  const filePath = `src/articles/${folder}`
  const slugs = fs.readdirSync(path.join(process.cwd(), filePath)).map(item => item.split('.')[0])
  return slugs
}
