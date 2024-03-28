import React from 'react'
import {motion} from "framer-motion";
import {slideIn} from "../utils/motion.js";
import {styles} from "../style.js";
import {SectionWrapper} from "./hoc/index.js";

const Contact = () => {
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>
                    Get in touch
                </p>
                <h3 className={styles.sectionHeadText}>
                    Contact.
                </h3>
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, "contact");