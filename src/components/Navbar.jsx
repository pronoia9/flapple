import { appleImg, bagImg, searchImg } from '../utils';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt='logo' width={14} height={18} />

        <div>
          {['Mac', 'iPad', 'iPhone', 'Watch'].map((nav, index) => (
            <a key={`nav-${index}`} href={`https://www.apple.com/${nav.toLowerCase()}/`} className=''>
              {nav}
            </a>
          ))}
        </div>

        <div>
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
