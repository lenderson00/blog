
export type Article = {
  title: string
  sumary: string
  author: string
  function: string
  date: string
  tag: string
  image?: string
  imageLabel?: string
  active?: boolean
  slug?: string

  content?: string
}

export type Articles = {
  tag: string
  articles: Article[]
}
