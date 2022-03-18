import fs from 'fs'
import path from 'path'
import { matterAdapter } from '../adapters/gray-matter'
import { Article, Articles } from '../models/articles'

export const getArticleFromFolder = (value: string): Articles => {
  const filePath = `src/articles/${value}`
  const paths = fs.readdirSync(path.join(process.cwd(), filePath)).map(item => item.split('.')[0])

  const articlesList: Article[] = []

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
