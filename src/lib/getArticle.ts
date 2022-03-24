import { getArticlesByTag } from './articlesByTag'
import { Article } from './models/articles'
import { getAllTags } from './tags'

export const getArticleBySlug = (slug: string): Article => {
  const tags = getAllTags()

  let article: Article[] = []

  for (const tag of tags) {
    const listOfArticles = getArticlesByTag(tag)

    const articleFromlist = listOfArticles.articles.filter(item => item.slug === slug)
    if (articleFromlist.length > 0) {
      article = articleFromlist
    }
  }

  return article[0]
}
