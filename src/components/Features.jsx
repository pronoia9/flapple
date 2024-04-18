import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { animateWithGsap, exploreVideo } from '../utils';

export const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-wdith'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>
            Explore the full story.
          </h1>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-24'>
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
          </div>

          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video id='exploreVideo' ref={videoRef} className='w-full h-full object-cover object-center' preload='none' playsInline muted autoPlay>
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
