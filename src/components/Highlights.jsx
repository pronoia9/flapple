import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { VideoCarousel } from '../components';
import { rightImg, watchImg } from '../utils';

export const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>

          <div className='flex flex-wrap items-end gap-5'>
            <a className='link' href='#' alt='film'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </a>
            <a
              className='link'
              href='https://www.apple.com/105/media/us/iphone/2023/6b9c38c9-8f1a-4df1-9c02-5b45b7531401/films/guided-tour/iphone-guided-tour-tpl-us-2023_16x9.m3u8' alt='event' target='_blank'
            >
              Watch the event
              <img src={rightImg} alt='right' className='ml-2' />
            </a>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};
