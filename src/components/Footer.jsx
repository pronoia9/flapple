import { footerLinks } from '../data';

export const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop: <a className='underline text-blue' href='https://apple.com' target='_blank'>Find an Apple Store </a>
            or <span className='underline text-blue'>other retailer</span> near you.
          </p>
          <p className='font-semibold text-gray text-xs'>Or call 000800-040-1966</p>
        </div>
      </div>
    </footer>
  );
};
