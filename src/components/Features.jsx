import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { animateWithGsap, explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

export const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // video
    animateWithGsap(
      '#exploreVideo',
      {
        onComplete: () => void videoRef.current.play(),
      },
      {
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      }
    );
    // title
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    // images
    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    // subtitles
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
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
            {/* video */}
            <div className='relative h-[50vh] w-full flex items-center'>
              <video id='exploreVideo' ref={videoRef} className='w-full h-full object-cover object-center' preload='none' playsInline muted autoPlay>
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>

            {/* images */}
            <div className='flex flex-col w-full relative gap-5'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img className='feature-video g_grow' src={explore1Img} alt='titanium' />
                </div>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img className='feature-video g_grow' src={explore2Img} alt='titanium 2' />
                </div>
              </div>

              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    iPhone 15 Pro is <span className='text-white'>the first iPhone to feature an aerospace-grade titanium design</span>, using the
                    same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                    <span className='text-white'>lightest Pro models ever.</span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
