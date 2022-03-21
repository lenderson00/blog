import { Article } from 'lib/models/articles'
import Image from 'next/image'
import Link from 'next/link'

export const PostHeader: React.FC<Partial<Article>> = ({ title, tag, author, occupation, date, image, imageLabel }) => {
  return (
    <section className="flex flex-col max-w-5xl py-8 mx-auto px-[5vw] ">
      <Link href={`/tags/${tag ?? ''}`} passHref>
        <div className='text-xs font-bold text-center uppercase cursor-pointer text-primary dark:text-primaryDark '>{tag}</div>
      </Link>
      <h1 className='text-3xl font-bold text-center'>{title}</h1>
      <div className='flex items-end justify-between mt-8 mb-2 text-xs'>
        <div >
          <h3 className='text-sm font-semibold'>{ author }</h3>
          <p className='leading-4 dark:text-white/50 '> { occupation }</p>
        </div>
        <div className='leading-4 dark:text-white/50'>
          { date }, 5 minutos de leitura
        </div>
      </div>

      <div className='w-full border-b-[1px] dark:border-white/40 border-solid '></div>

      <div className='relative w-full h-64 mt-8 overflow-hidden shadow-xl rounded-xl group'>
        <Image src={image ?? ''} alt={imageLabel} layout='fill' objectFit='cover'/>

        <div className='absolute font-bold translate-y-10 group-hover:translate-y-0 text-[#fff] bottom-4 left-8 w-full z-10 animated '> {imageLabel }</div>

        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent animated'></div>
      </div>

    </section>
  )
}
