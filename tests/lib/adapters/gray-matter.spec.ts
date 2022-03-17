import { mocked } from 'jest-mock'
import fs from 'fs'
import { matterAdapter } from '../../../src/lib/adapters/gray-matter'
import { makeArticleData } from '../../makers/articleData'

jest.mock('fs')
describe('GrayMatterAdapter', () => {
  const articleData = makeArticleData()

  beforeEach(() => {
    const readFileSyncStub = jest.fn().mockImplementation(() => {
      return '---\n title: any_title\n sumary: any_sumary\n author: any_author\n function: any_function\n date: any_date\n tag: any_tag\n image: any_image\n content: any_content \n---\nany_content'
    })
    mocked(fs.readFileSync).mockImplementation(readFileSyncStub)
  })

  it('Should return article and content if sucess', () => {
    const sut = matterAdapter('any_filePath', 'any_fileName')
    expect(sut).toEqual({
      article: articleData,
      content: 'any_content'
    })
  })
})

export {}
