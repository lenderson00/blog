import { Article } from '../../src/lib/models/articles'

export const makeArticleData = (): Article => {
  return {
    title: 'any_title',
    sumary: 'any_sumary',
    author: 'any_author',
    occupation: 'any_occupation',
    date: 'any_date',
    tag: 'any_tag',
    active: false,
    image: 'any_image',
    content: 'any_content'
  }
}
