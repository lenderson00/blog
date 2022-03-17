import { mocked } from 'jest-mock'
import { getAllTags } from '../../src/lib/tags'
import fs from 'fs'
import { getAllArticles } from '../../src/lib/articles'
import { matterAdapter } from '../../src/lib/adapters/gray-matter'
import { makeArticleData } from '../makers/articleData'

jest.mock('../../src/lib/tags')
jest.mock('fs')
jest.mock('../../src/lib/adapters/gray-matter')

describe('Article Helpers', () => {
  const articleData = makeArticleData()

  beforeEach(() => {
    const getAllTagsStub = jest.fn().mockImplementation(() => {
      return ['css', 'nextjs']
    })
    mocked(getAllTags).mockImplementation(getAllTagsStub)

    const readdirSyncStub = jest.fn().mockImplementation(() => {
      return ['hello-world']
    })
    mocked(fs.readdirSync).mockImplementation(readdirSyncStub)

    const matterAdapterStub = jest.fn().mockImplementation(() => {
      return { article: articleData, content: 'any_content' }
    })
    mocked(matterAdapter).mockImplementation(matterAdapterStub)
  })

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
      const sut = getAllArticles()

      expect(sut).toEqual([{
        tag: 'css',
        articles: [
          articleData
        ]
      }, {
        tag: 'nextjs',
        articles: [
          articleData
        ]
      }])
    })
  })
})

export {}
