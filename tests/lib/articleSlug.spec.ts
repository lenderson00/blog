import { getAllSlugByFolder } from '../../src/lib/utils/getArticleFromFolder'
import { getAllTags } from '../../src/lib/tags'
import { mocked } from 'jest-mock'

jest.mock('../../src/lib/tags')
jest.mock('../../src/lib/utils/getArticleFromFolder')

const getArticleSlug = (): string[] => {
  const tags = getAllTags()
  const slugs: string[] = []

  for (const tag of tags) {
    const slugsOfTag = getAllSlugByFolder(tag)
    slugs.push(...slugsOfTag)
  }

  return slugs
}

describe('ArticleSlug', () => {
  it('should return all article slugs on article folder', () => {
    const expectedResult = ['hello-world', 'any-other']
    mocked(getAllTags).mockImplementationOnce(() => (['css']))
    mocked(getAllSlugByFolder).mockImplementationOnce(jest.fn().mockImplementationOnce(() => (expectedResult)))

    const sut = getArticleSlug()

    expect(sut).toEqual(expectedResult)
  })
})

export {}
