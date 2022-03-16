const getAllArticles = (): string[] => {
  return []
}

describe('Article Helpers', () => {
  describe('GetAllArticles', () => {
    it('Should return an empty array of Article if [tag] folder is empty', () => {
      const sut = getAllArticles()

      expect(sut).toEqual([])
    })
  })
})

export {}
