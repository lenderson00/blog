import { mocked } from 'jest-mock'
import { getAllTags } from '../../src/lib/tags'
import fs from 'fs'
import { getAllArticles } from '../../src/lib/articles'

jest.mock('../../src/lib/tags')
jest.mock('fs')

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
        return ['css', 'nextjs']
      })
      mocked(getAllTags).mockImplementationOnce(getAllTagsStub)

      const readdirSyncStub = jest.fn().mockImplementation(() => {
        return ['hello-world']
      })
      mocked(fs.readdirSync).mockImplementation(readdirSyncStub)

      const sut = getAllArticles()

      expect(sut).toEqual([{
        tag: 'css',
        articles: [
          'hello-world'
        ]
      }, {
        tag: 'nextjs',
        articles: [
          'hello-world'
        ]
      }])
    })
  })
})

export {}
