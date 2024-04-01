import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import {PointMaterial, Points, Preload} from "@react-three/drei";
import {random} from "maath";

const Stars = (props) => {
    const ref = useRef();
    // This line uses something called random (like a magic trick box) to create 5,000 tiny stars (stored in sphere)
    const sphere = random.inSphere(new Float32Array(8000), {radius: 1.2})
    useFrame((state, delta) => {

        // delta / 10 controls how fast the stars spin (a smaller number makes them spin slower).
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    return (
        // eslint-disable-next-line react/no-unknown-property
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">

            <Canvas camera={{position: [0, 0, 1]}}>
                <Suspense fallback={null}>
                    <Stars/>
                </Suspense>

                <Preload all/>
            </Canvas>

        </div>
    )
}

export default StarsCanvas