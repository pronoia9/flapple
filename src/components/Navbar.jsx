import { navLists } from '../data';
import { appleImg, bagImg, searchImg } from '../utils';

export const Navbar = () => {
  return (
    <header className='w-full screen-max-width m-auto flex py-5 px-5'>
      <nav className='w-full flex justify-between items-center gap-8'>
        <div className='max-md:grow'>
          <img src={appleImg} alt='logo' width={14} height={18} />
        </div>

        <div className='grow flex justify-evenly items-center max-md:hidden'>
          {navLists.map((nav, index) => (
            <a key={`nav-${index}`} href={nav.link} className='text-sm text-gray hover:text-white transition-all'>
              {nav.title}
            </a>
          ))}
        </div>

        <a href='https://www.apple.com/us/search'>
          <img src={searchImg} alt='search' width={18} height={18} />
        </a>
        <a href='https://www.apple.com/us/shop/goto/bag'>
          <img src={bagImg} alt='bag' width={18} height={18} />
        </a>
      </nav>
    </header>
  );
};
