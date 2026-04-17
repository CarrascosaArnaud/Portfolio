import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin-icon.png.webp";
import githubIcon from "../assets/github-logo.png";
import mailIcon from "../assets/mail-logo.png";
import itchIcon from "../assets/itch-logo.png";

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
            className="min-h-[100dvh] flex flex-col justify-center items-center px-6 relative overflow-hidden bg-white dark:bg-[#0f172a] bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0e7ff] dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#2e1065] text-gray-900 dark:text-white transition-colors duration-500"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
            >
                Salut, moi c'est{" "}
                <span className="text-blue-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white animate-pulse transition-colors duration-300">
                    Arnaud
                </span>
            </motion.h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl min-h-[24px] font-medium">
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
                            // MODIFICATION : Inversion légère sur les icônes si besoin en mode clair
                            className="w-10 h-10 grayscale hover:grayscale-0 transition-all duration-300"
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
                            className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300"
                        />
                    </motion.a>

                    <motion.a
                    href="https://iokko.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={itchIcon}
                        alt="Itch.Io"
                        className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300"
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
                            className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300"
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}