
export type Article = {
  title: string
  sumary: string
  author: string
  function: string
  date: string
  tag: string
  image?: string
  imageLabel?: string

  content?: string
}

export type Articles = {
  tag: string
  articles: Article[]
}
