import {useRef, useState} from 'react'
import {motion} from "framer-motion";

import {slideIn} from "../utils/motion.js";
import {styles} from "../style.js";
import {SectionWrapper} from "./hoc/index.js";
import {EarthCanvas} from "./canvas/index.js";

import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);


    // There's a friend named "e" who brings you something (like a new toy!).
    const handleChange = (e) => {
        // The name of the toy (stored in "name").The toy itself (stored in "value").
        const {name, value} = e.target;
        // Our helper takes your whole toy box ("form") and makes a copy.
        // Then, it opens the copy and puts the new toy ("value") inside, but only in a special spot. This spot has a label that matches the toy's name ("name").
        setForm({...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_s2qhw2p',
            'template_5fd6fz4',
            {
                from_name: form.name,
                to_name: 'Xndr',
                from_email: form.email,
                to_email: 'mymails.xander@gmail.com',
                message: form.message
            },
            'VtXGuUBQIo9KZQd94'
        )
            .then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible.');

                setForm({
                    name: "",
                    email: "",
                    message: "",
                }, (error) => {
                    setLoading(false);
                    console.log(error);
                    alert('Something went wrong.');
                })

            })
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
                            className="mb-4 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Mail
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="mb-4 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="mb-4 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        onClick={handleSubmit} // Call handleSubmit function on click

                    >
                        {loading ? '<Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, "contact");