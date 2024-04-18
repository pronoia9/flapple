import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';

import { Lights } from '../components';

export const ModelView = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }) => {
  return (
    <View id={gsapType} index={index} className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* lights */}
      <ambientLight intensity={0.3} />
      <Lights />
    </View>
  );
};
