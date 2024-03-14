import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
// eslint-disable-next-line no-unused-vars
import React, {Suspense} from "react";

import CanvasLoader from '../Loader';

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf')

    return (
        <mesh>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <hemisphereLight intensity={0.15} groundColor='black'/>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight intensity={1}/>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <primitive object={computer.scene}/>
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