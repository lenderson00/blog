import { getAllTags } from 'lib/tags'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllTags()

  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag
        }
      }
    }),
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  tag: string
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const { tag } = ctx.params as IParams

  return {
    props: {
      tag
    }
  }
}

const Tag: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ children }) => {
  return (
  <>
    Lenderson Macedo - Tag - Tags
  </>
  )
}

export default Tag
