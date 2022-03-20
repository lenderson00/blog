import { getArticlesByTag } from './articlesByTag'
import { Article } from './models/articles'
import { getAllTags } from './tags'

export const getArticleBySlug = (slug: string): Article => {
  const tags = getAllTags()

  let article: Article[] = []

  for (const tag of tags) {
    const listOfArticles = getArticlesByTag(tag)

    article = listOfArticles.articles.filter(item => item.slug === slug)
  }

  return article[0]
}
