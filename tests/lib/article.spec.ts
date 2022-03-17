import { mocked } from 'jest-mock'
import { getAllTags } from '../../src/lib/tags'
import fs from 'fs'
import path from 'path'

jest.mock('../../src/lib/tags')
jest.mock('fs')

type Articles = {
  tag: string
  articles: string[]
}
const getAllArticles = (): Articles[] => {
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

describe('Article Helpers', () => {
  describe('GetAllArticles', () => {
    it('Should return an empty array of Article if [tag] folder is empty', () => {
      const getAllTagsStub = jest.fn().mockImplementationOnce(() => {
        return []
      })
      mocked(getAllTags).mockImplementationOnce(getAllTagsStub)
      const sut = getAllArticles()

      expect(sut).toEqual([])
    })

    it('Should return an list of Article if tag folder is not empty', () => {
      const getAllTagsStub = jest.fn().mockImplementationOnce(() => {
        return ['css']
      })
      mocked(getAllTags).mockImplementationOnce(getAllTagsStub)

      const readdirSyncStub = jest.fn().mockImplementationOnce(() => {
        return ['hello-world']
      })
      mocked(fs.readdirSync).mockImplementationOnce(readdirSyncStub)

      const sut = getAllArticles()

      expect(sut).toEqual([{
        tag: 'css',
        articles: [
          'hello-world'
        ]
      }])
    })
  })
})

export {}
