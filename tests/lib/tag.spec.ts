import fs from 'fs'
import { getAllTags } from '../../src/lib/tags'

import { mocked } from 'jest-mock'

jest.mock('fs')

describe('GetAllTags', () => {
  it('Should return an empty array if has not folder in article folder', () => {
    const arrayOfFolders: string[] = []
    const FSReadFileSync = jest.fn().mockImplementationOnce(() => {
      return arrayOfFolders
    })
    mocked(fs.readdirSync).mockImplementationOnce(FSReadFileSync)

    const sut = getAllTags()

    expect(sut).toEqual([])
  })
})

export {}
