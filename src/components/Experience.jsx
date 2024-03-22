import {motion} from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import {styles} from "../style.js";
import {SectionWrapper} from './hoc';
import {experiences} from "../constants/index.js";
import {textVariant} from "../utils/motion.js";


// eslint-disable-next-line react/prop-types
const ExperienceCard = ({experience}) => (

    <div>
        <h3 className="text-white text-[24px] font-bold">
            {/* eslint-disable-next-line react/prop-types */}
            {experience.title}
        </h3>
    </div>

)

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    What I have done so far
                </p>
                <h2 className={styles.sectionHeadText}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <div>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </div>
            </div>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience);