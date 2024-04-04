import React from 'react'
import {styles} from "../style.js";
import {ComputersCanvas} from "./canvas/index.js";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>

                <div>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span
                        className="text-[#915eff]">Xndr</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user interfaces and web applications.
                    </p>
                </div>
            </div>
            <ComputersCanvas/>

            <div
                className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center  transition-transform hover:scale-105">
                <a href="#about">
                    <div
                        className="w-[200px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-center p-2">
                        <p>
                            Scopri di più
                        </p>
                        {/*<motion.dev*/}
                        {/*    animate={{*/}
                        {/*        y:[0, 24, 0]*/}
                        {/*    }}*/}
                        {/*    transition={{*/}
                        {/*        duration: 1.5,*/}
                        {/*        repeat: Infinity,*/}
                        {/*        repeatType: 'loop'*/}
                        {/*    }}*/}
                        {/*    className="w-2 h-3 rounded-full bg-secondary mb-1"*/}
                        {/*/>*/}
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero