// eslint-disable-next-line no-unused-vars
import React, {Suspense, useEffect, useState} from "react";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
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

            <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75}
                       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
        </mesh>
    );
};


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        // add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // set the initial value of the 'isMobile' value
        setIsMobile(mediaQuery.matches);

        // define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        // add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, [])

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
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};


export default ComputersCanvas;