import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { heroVideo, smallHeroVideo } from '../utils';

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const updateVideo = () => void setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta a', { opacity: 1, y: -50, delay: 2 });
    gsap.to('#cta p', { opacity: 1, y: -50, delay: 2.1 });
  }, []);

  useEffect(() => {
    updateVideo();
    window.addEventListener('resize', updateVideo);
    return () => void window.removeEventListener('resize', updateVideo);
  }, []);

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>

        <div className='md:w-10/12 w-9/12'>
          {videoSrc && (
            <video key={videoSrc} className='pointer-events-none' autoPlay muted playsInline>
              <source src={videoSrc} type='video/mp4' />
            </video>
          )}
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center'>
        <a href='#highlights' className='btn opacity-0 translate-y-20'>
          Buy
        </a>
        <p className='font-normal text-xl opacity-0 translate-y-20'>
          For $199/mo or $999
        </p>
      </div>
    </section>
  );
};
