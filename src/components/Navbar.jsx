import { navLists } from '../data';
import { appleImg, bagImg, searchImg } from '../utils';

export const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='w-full screen-max-width flex'>
        <img src={appleImg} alt='logo' width={14} height={18} />

        <div className='flex gap-10 flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav, index) => (
            <a key={`nav-${index}`} href={nav.link} className='text-sm text-gray hover:text-white transition-all'>
              {nav.title}
            </a>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <a href='https://www.apple.com/us/search'>
            <img src={searchImg} alt='search' width={18} height={18} />
          </a>
          <a href='https://www.apple.com/us/shop/goto/bag'>
            <img src={bagImg} alt='bag' width={18} height={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};
