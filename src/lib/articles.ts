import { Articles } from './models/articles'

import { getAllTags } from './tags'
import { getArticleFromFolder } from './utils/getArticleFromFolder'

export const getAllArticles = (): Articles[] => {
  const tag = getAllTags()

  const articles = tag.map(getArticleFromFolder)

  return articles
}
