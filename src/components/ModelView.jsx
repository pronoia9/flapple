import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';

import { IPhone, Lights, Loader } from '../components';

export const ModelView = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }) => {
  return (
    <View id={gsapType} index={index} className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* lights */}
      <ambientLight intensity={0.3} />
      <Lights />

      {/* controls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotation(controlRef.current.getAzimuthalAngle())}
      />
    </View>
  );
};
