import {useRef, useState} from 'react'
import {motion} from "framer-motion";

import {slideIn} from "../utils/motion.js";
import {styles} from "../style.js";
import {SectionWrapper} from "./hoc/index.js";

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
    }
    const handleSubmit = (e) => {
    }

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

                <form>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        onChange={handleSubmit}
                    >
                        {loading ? '<Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, "contact");