import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
// eslint-disable-next-line no-unused-vars
import React, {Suspense} from "react";

import CanvasLoader from '../Loader';

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh>
            {/* Hemisphere Light */}
            <hemisphereLight intensity={0.15} groundColor="black"/>

            {/* Point Light */}
            <pointLight intensity={1}/>

            {/* Spot Light with correct properties */}
            <spotLight
                position={[-20, 50, 10]}
                angle={Math.PI / 6} // Converted from 0.12 (assumed degrees) to radians
                penumbra={1}
                intensity={1}
                castShadow={true}
                shadowMapSize={1024}
            />

            <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
        </mesh>
    );
};


const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};


export default ComputersCanvas;