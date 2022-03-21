import { getArticleBySlug } from 'lib/getArticle'
import { getAllTags } from 'lib/tags'
import { getAllSlugByFolder } from 'lib/utils/getArticleFromFolder'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { ThemeToggle } from '../../components/ThemeToggle'

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllTags()

  const paths = []

  for (const tag of tags) {
    const slugs = getAllSlugByFolder(tag)

    for (const slug of slugs) {
      paths.push({
        params: {
          slug
        }
      })
    }
  }

  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const { slug } = ctx.params as IParams
  const article = getArticleBySlug(slug)

  if (!article.active) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      article
    }
  }
}

const Slug: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (article) => {
  return (
  <Wrapper>

      <ThemeToggle />

    Lenderson Macedo - Slug
  </Wrapper>
  )
}

export default Slug

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen dark:text-white dark:bg-black ">
      {children}
    </div>
  )
}
