import React from 'react'
import {SectionWrapper} from "./hoc/index.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";
import {styles} from "../style.js";

const Works = () => {
    return (
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                My work
            </p>
            <h2 className={styles.sectionHeadText}>
                Projects.
            </h2>
        </motion.div>

    )
}

export default SectionWrapper(Works, "");