import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';

import { IPhone, Lights, Loader } from '.';

export const Scene = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }) => {
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

      {/* model */}
      <group ref={groupRef} name={`iphone pro${index === 1} ? '' : ' max`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};