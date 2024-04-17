import { useRef, useState } from 'react';

import { hightlightsSlides } from '../data';

export const VideoCarousel = () => {
  const videoRef = useRef([]),
    videoSpanRef = useRef([]),
    videoDivRef = useRef([]);
  const [video, setVideo] = useState({ videoId: 0, isPlaying: false, isEnd: false, isLastVideo: false, startPlay: false });
  const { videoId, isPlaying, isEnd, isLastVideo, startPlay } = video;

  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((slide, i) => (
          <div key={slide.id} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video ref={(el) => (videoRef.current[i] = el)} id='video' playsInline preload='auto' muted>
                  <source src={slide.video} type='video/mp4' />
                </video>
              </div>

              <div className='absolute top-12 left-[5%] z-10'>
                {slide.textLists.map((text, j) => (
                  <p key={`slide-${i}-${j}`} className='md:text-2xl text-xl font-medium'>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
