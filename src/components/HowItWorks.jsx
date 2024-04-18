import { chipImg } from '../utils';

export const HowItWorks = () => {
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full my-20'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            A17 Pro chip.<br />
            A monster win for gaming.
          </h2>

          <p className='hiw-subtitle'>It's here. The biggest redesign in the history of Apple GPUs.</p>
        </div>
      </div>
    </section>
  );
};
