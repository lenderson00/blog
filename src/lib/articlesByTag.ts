import { Articles } from './models/articles'
import { getArticleFromFolder } from './utils/getArticleFromFolder'

export const getArticlesByTag = (tag: string): Articles => {
  const article = getArticleFromFolder(tag)

  return article
}
