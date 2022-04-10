import Link from 'next/link'

export const Tag: React.FC = ({ children }) => {
  return (
    <Link href={`/tags/${children?.toString().toLocaleLowerCase() ?? ''}`} passHref>

      <div className='px-3 py-1 font-bold tracking-wide rounded-lg cursor-pointer hover:hue-rotate-30 hover:-translate-y-[2px] hover:shadow-xl dark:hover:shadow-none animated bg-slate-300 dark:bg-slate-700 w-fit'>
          { children?.toString().toUpperCase() ?? '' }
      </div>
    </Link>
  )
}
