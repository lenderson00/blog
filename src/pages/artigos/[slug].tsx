import Header from 'components/Header/Header'
import { PostHeader } from 'components/PostHeader'
import { getArticleBySlug } from 'lib/getArticle'
import { getAllTags } from 'lib/tags'
import { getAllSlugByFolder } from 'lib/utils/getArticleFromFolder'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { ParsedUrlQuery } from 'querystring'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams

  const article = getArticleBySlug(slug)

  const mdxSource = await serialize(article.content ?? '')

  return {
    props: {
      article,
      source: mdxSource
    }
  }
}

const Slug: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ article, source }) => {
  return (
  <Wrapper>
    <Header />
    <PostHeader {...article}/>
    <Article>
      <MDXRemote {...source} />
    </Article>

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

const Article: React.FC = ({ children }) => {
  return (
    <article className="mx-auto max-w-5xl  px-[5vw]">
      {children}
    </article>
  )
}
