import { mocked } from 'jest-mock'
import { getArticlesByTag } from '../../src/lib/articlesByTag'
import { getArticleFromFolder } from '../../src/lib/utils/getArticleFromFolder'

jest.mock('../../src/lib/utils/getArticleFromFolder')

describe('GetArticlesByTag', () => {
  const getArticleFromFolderReturn = 'some_thing'
  it('Should return the same of getArticleFromFolder', () => {
    mocked(getArticleFromFolder).mockImplementationOnce(jest.fn().mockImplementationOnce(() => {
      return getArticleFromFolderReturn
    }))

    const sut = getArticlesByTag('css')

    expect(sut).toEqual(getArticleFromFolderReturn)
  })
})

export {}
