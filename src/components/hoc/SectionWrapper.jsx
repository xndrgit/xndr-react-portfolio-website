import {styles} from "../../style.js";
import {motion} from "framer-motion";
import {staggerContainer} from '../../utils/motion.js';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            // eslint-disable-next-line react/jsx-no-undef
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                     &nbsp;
                </span>
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper