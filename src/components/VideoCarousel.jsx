import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { hightlightsSlides } from '../data';
import { pauseImg, playImg, replayImg } from '../utils';

export const VideoCarousel = () => {
  const videoRef = useRef([]),
    videoSpanRef = useRef([]),
    videoDivRef = useRef([]);

  const [video, setVideo] = useState({ videoId: 0, isPlaying: false, isEnd: false, isLastVideo: false, startPlay: false }),
    [loadedData, setLoadedData] = useState([]);

  // video and indicator
  const { videoId, isPlaying, isEnd, isLastVideo, startPlay } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useGSAP(() => {
    // video animation to play the video when it is in the view
    gsap.to('#video', {
      scrollTrigger: { trigger: '#video', toggleActions: 'restart none none none' },
      onComplete: () => void setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true })),
    });
  }, [isEnd, videoId]);

  // TODO
  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of the video
      let animation = gsap.to(span[videoId], { onUpdate: () => {}, onComplete: () => {} });
    }

    return () => {};
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case 'video-last':
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case 'video-reset':
        setVideo((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;
      case 'play':
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case 'pause':
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((slide, i) => (
          <div key={slide.id} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video
                  id='video'
                  ref={(el) => (videoRef.current[i] = el)}
                  playsInline
                  preload='auto'
                  muted
                  onPlay={() => void setVideo((prev) => ({ ...prev, isPlaying: true }))}
                >
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

      {/* carousel stuff */}
      <div className='relative flex-center mt-10'>
        {/* carousel progress */}
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {videoRef.current.map((_, i) => (
            <span key={`${i}`} ref={(el) => (videoDivRef.current[i] = el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
              <span ref={(el) => (videoSpanRef.current[i] = el)} className='absolute h-full w-full rounded-full' />
            </span>
          ))}
        </div>

        {/* play/pause button */}
        <button className='control-btn'>
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={() => handleProcess(isLastVideo ? 'video-reset' : !isPlaying ? 'play' : 'pause')}
          />
        </button>
      </div>
    </>
  );
};
