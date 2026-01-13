import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin-icon.png.webp";
import githubIcon from "../assets/github-logo.png";
import mailIcon from "../assets/mail-logo.png";


export default function About() {
    const [typedText, setTypedText] = useState("");
    const [showContact, setShowContact] = useState(false);
    const fullText = "Concepteur | Développeur | Passionné";
    const typingSpeed = 40;

    useEffect(() => {
        const startTyping = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setTypedText((prev) => fullText.substring(0, index));
                index++;
                if (index > fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => setShowContact(true), 500);
                }
            }, typingSpeed);
        }, 1000);

        return () => clearTimeout(startTyping);
    }, []);

    return (
        <section
            id="about"
            className="h-screen flex flex-col justify-center items-center text-white px-6 relative overflow-hidden"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
            >
                Salut, moi c'est{" "}
                <span className="text-gray-300 hover:text-white animate-pulse">
                    Arnaud
                </span>
            </motion.h1>


            <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl min-h-[24px]">
                {typedText}
            </p>

            <div className="mt-6 h-16 flex justify-center items-center relative">
                <motion.div
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContact ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.a
                        href="https://www.linkedin.com/in/arnaud-carrascosa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="w-10 h-10 grayscale"
                        />
                    </motion.a>

                    <motion.a
                        href="https://github.com/CarrascosaArnaud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={githubIcon}
                            alt="Github"
                            className="w-10 h-10 grayscale"
                        />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="w-10 h-10"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={mailIcon}
                            alt="Mail"
                            className="w-10 h-10 grayscale"
                        />
                    </motion.a>
                </motion.div>

            </div>

        </section>
    );
}
