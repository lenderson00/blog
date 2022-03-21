import Header from 'components/Header/Header'
import { PostHeader } from 'components/PostHeader'
import { getArticleBySlug } from 'lib/getArticle'
import { getAllTags } from 'lib/tags'
import { getAllSlugByFolder } from 'lib/utils/getArticleFromFolder'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { ParsedUrlQuery } from 'querystring'

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

  return {
    props: {
      article
    }
  }
}

const Slug: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ article }) => {
  return (
  <Wrapper>
    <Header />
    <PostHeader {...article}/>
    <article>
      {article.content}
    </article>

  </Wrapper>
  )
}

export default Slug

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-500 dark:text-white dark:bg-black lg:px-0 ">
      {children}
    </div>
  )
}
