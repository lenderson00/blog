import fs from 'fs'
import path from 'path'
import { getAllTags } from './tags'

type Articles = {
  tag: string
  articles: string[]
}

export const getAllArticles = (): Articles[] => {
  const tag = getAllTags()

  const getArticleFromFolder = (value: string): Articles => {
    const files = fs
      .readdirSync(path.join(process.cwd(), `src/articles/${value}`))
      .map(item => item.split('.')[0])

    return {
      tag: value,
      articles: files
    }
  }

  const articles = tag.map(getArticleFromFolder)

  return articles
}
