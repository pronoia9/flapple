import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import { hightlightsSlides } from '../data';
import { pauseImg, playImg, replayImg } from '../utils';

gsap.registerPlugin(ScrollTrigger);

export const VideoCarousel = () => {
  const videoRef = useRef([]),
    videoSpanRef = useRef([]),
    videoDivRef = useRef([]);

  const [video, setVideo] = useState({ videoId: 0, isPlaying: false, isEnd: false, isLastVideo: false, startPlay: false }),
    [loadedData, setLoadedData] = useState([]);

  // video and indicator
  const { videoId, isPlaying, isEnd, isLastVideo, startPlay } = video;

  useGSAP(() => {
    // slider animation to move the video out of the screen and playing the next video
    gsap.to('#slider', { transform: `translateX(${-100 * videoId}%)`, duration: 2, ease: 'power2.inOut' });

    // video animation to play the video when it is in the view
    gsap.to('#video', {
      scrollTrigger: { trigger: '#video', toggleActions: 'restart none none none' },
      onComplete: () => void setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true })),
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    let currentProgress = 0,
      span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let animation = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animation.progress() * 100); // get the progress of the video

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760 ? '10vw' /* mobile */ : window.innerWidth < 1200 ? '10vw' /* tablet */ : '4vw' /* laptop */,
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], { width: `${currentProgress}%`, backgroundColor: 'white' });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: '12px' });
            gsap.to(span[videoId], { backgroundColor: '#afafaf' });
          }
        },
      });

      if (videoId == 0) animation.restart();

      // update the progress bar
      const animationUpdate = () => void animation.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration);

      if (isPlaying) gsap.ticker.add(animationUpdate); // ticker to update the progress bar
      else gsap.ticker.remove(animationUpdate); // remove the ticker when the video is paused (progress bar is stopped)
    }
  }, [videoId, startPlay]);

  // vd id is the id for every video until id becomes number 3
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

  const handleLoadedMetaData = (i, e) => void setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((slide, i) => (
          <div key={`slide-${slide.id}`} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video
                  id='video'
                  ref={(el) => (videoRef.current[i] = el)}
                  className={`${slide.id === 2 && 'translate-x-44'} pointer-events-none`}
                  playsInline
                  preload='auto'
                  muted
                  onPlay={() => void setVideo((prev) => ({ ...prev, isPlaying: true }))}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  onEnded={() => handleProcess(i !== 3 ? ('video-end', i) : 'video-last')}
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
            <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
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
