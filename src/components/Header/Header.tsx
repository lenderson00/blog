import { ThemeToggle } from 'components/ThemeToggle'
import Link from 'next/link'

const Menu = [
  {
    title: 'Artigos',
    link: '/artigos'
  },
  {
    title: 'Tags',
    link: '/tags'
  },
  {
    title: 'Eu',
    link: '/eu'
  }
]

const Header: React.FC = () => {
  return (
  <div className='flex items-center justify-between h-16 mx-auto max-w-5xl  px-[5vw] backdrop-blur-2xl'>
    <div className='flex text-xl font-bold'>
      <Link href='/' passHref>
        <div className='flex items-center gap-2 mr-4 cursor-pointer text-primary dark:text-primaryDark'>Blog do Lend</div>
      </Link>
      <div className='flex gap-4'>
        {
          Menu.map(item => {
            return (
              <Link href={item.link} key={item.title}>
                {item.title}
              </Link>
            )
          })
        }
      </div>

    </div>

    <ThemeToggle />
  </div>)
}

export default Header
