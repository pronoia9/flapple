import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { animateWithGsap, chipImg } from '../utils';

export const HowItWorks = () => {
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
      </div>
    </section>
  );
};
