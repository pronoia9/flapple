import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import { ModelView } from '../components';
import { models } from '../data';
import { yellowImg } from '../utils';

export const Model = () => {
  const [size, setSize] = useState('small'),
    [model, setModel] = useState({
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
      img: yellowImg,
    });

  // camera control for the model view
  const cameraControlSmall = useRef(),
    cameraControlLarge = useRef();
  // models
  const small = useRef(new THREE.Group()),
    large = useRef(new THREE.Group());
  // rotation for models
  const [smallRotation, setSmallRotation] = useState(0),
    [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 id='heading' className='section-heading'>
          Take a closer look.
        </h1>

        <div className='flex flex-col items-center mt-5'>
          <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
            {['pro', 'pro max'].map((_, i) => (
              <ModelView
                key={`model-${_}`}
                index={1}
                groupRef={_ === 'pro' ? small : large}
                gsapType='view1'
                controlRef={_ === 'pro' ? cameraControlSmall : cameraControlLarge}
                setRotation={_ === 'pro' ? setSmallRotation : setLargeRotation}
                item={model}
                size={size}
              />
            ))}

            <Canvas
              className='w-full h-full'
              style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className='mx-auto w-full'>
            <p className='text-sm font-light text-center mb-5'>{model.title}</p>

            <div className='flex-center'>
              <ul className='color-container'>
                {models.map((item, i) => (
                  <li
                    key={`models-${i}`}
                    className='w-6 h-6 rounded-full mx-2 cursor-pointer'
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
