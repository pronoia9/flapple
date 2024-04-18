import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { animateWithGsap, chipImg, frameImg, frameVideo } from '../utils';
import { useRef } from 'react';

export const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '#chip', start: '20% bottom' },
    });
  }, []);

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full my-20'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>

          <p className='hiw-subtitle'>It's here. The biggest redesign in the history of Apple GPUs.</p>
        </div>

        <div className='mt-10 md:mt-20 mb-14'>
          <div className='relative h-full flex-center'>
            {/* frame */}
            <div className='overflow-hidden'>
              <img className='bg-transparent relative z-10' src={frameImg} alt='frame' />
            </div>
            {/* video */}
            <div className='hiw-video'>
              <video ref={videoRef} className='pointer-events-none' playsInline preload='none' muted autoPlay>
                <source src={frameVideo} type='video/mp4' />
              </video>
            </div>
          </div>
          <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
        </div>
      </div>
    </section>
  );
};
