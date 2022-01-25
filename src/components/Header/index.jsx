import { Link } from 'wouter'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  return <header className='flex flex-col items-center py-2'>
    <Link to="/">
      <a className='text-2xl bg-black text-white px-4 py-2'>
        Gif.search
      </a>
    </Link>
    <SearchBar />
  </header>
}