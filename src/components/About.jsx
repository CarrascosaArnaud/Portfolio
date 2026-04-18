import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin-icon.png.webp";
import githubIcon from "../assets/github-logo.png";
import mailIcon from "../assets/mail-logo.png";
import itchIcon from "../assets/itch-logo.png";

import Angular_logo from "../assets/Angular_logo.png";
import Bootstrap_logo from "../assets/Bootstrap_logo.svg.png";
import C from "../assets/C++_logo.png";
import css_logo from "../assets/css_logo.png";
import html_logo from "../assets/html_logo.png";
import Java_logo from "../assets/Java_logo.png";
import JS_logo from "../assets/JS_logo.png";
import Mariadb_logo from "../assets/Mariadb_logo.png";
import Mongodb_logo from "../assets/Mongodb_logo.png";
import MySQL_logo from "../assets/MySQL_logo.png";
import NodeJS_logo from "../assets/NodeJS_logo.png";
import php_logo from "../assets/php_logo.png";
import Python_logo from "../assets/Python_logo.png";
import React_logo from "../assets/React_logo.png";
import Spring_logo from "../assets/Spring_logo.png";
import Tailwind_logo from "../assets/Tailwind_logo.png";
import Typescript_logo from "../assets/Typescript_logo.png";
import VueJS_logo from "../assets/VueJS_logo.png";

const skillAssets = [
    { name: "Angular", src: Angular_logo },
    { name: "Bootstrap", src: Bootstrap_logo },
    { name: "C++", src: C },
    { name: "CSS", src: css_logo },
    { name: "HTML", src: html_logo },
    { name: "Java", src: Java_logo },
    { name: "JavaScript", src: JS_logo },
    { name: "MariaDB", src: Mariadb_logo },
    { name: "MongoDB", src: Mongodb_logo },
    { name: "MySQL", src: MySQL_logo },
    { name: "Node.js", src: NodeJS_logo },
    { name: "PHP", src: php_logo },
    { name: "Python", src: Python_logo },
    { name: "React", src: React_logo },
    { name: "Spring", src: Spring_logo },
    { name: "Tailwind CSS", src: Tailwind_logo },
    { name: "TypeScript", src: Typescript_logo },
    { name: "Vue.js", src: VueJS_logo },
];

export default function About() {
    const [typedText, setTypedText] = useState("");
    const [showContact, setShowContact] = useState(false);
    const [bubbles, setBubbles] = useState([]);
    const fullText = "Concepteur | Développeur | Passionné";
    const typingSpeed = 40;

    useEffect(() => {
        const bubbleTimeout = setTimeout(() => {
            const generatedBubbles = skillAssets.map((skill, index) => {
                const duration = Math.random() * 4 + 7;
                const endHeight = Math.random() * 40 + 30;
                return {
                    id: `bubble-${index}`,
                    ...skill,
                    left: `${Math.random() * 85 + 7}%`,
                    size: `${Math.random() * 30 + 80}px`,
                    duration: duration,
                    delay: Math.random() * 25,
                    wobbleDelay: `-${Math.random() * 4}s`,
                    targetY: `-${100 - endHeight}vh`
                };
            });
            setBubbles(generatedBubbles);
        }, 10);

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

        return () => {
            clearTimeout(bubbleTimeout);
            clearTimeout(startTyping);
        };
    }, []);

    const handlePop = (id) => {
        setBubbles((prev) => prev.map((bubble) => {
            if (bubble.id === id) {
                return {
                    ...bubble,
                    id: `bubble-${Date.now()}-${Math.random()}`,
                    delay: 0,
                    left: `${Math.random() * 85 + 7}%`,
                    targetY: `-${100 - (Math.random() * 40 + 30)}vh`
                };
            }
            return bubble;
        }));
    };

    return (
        <section
            id="about"
            className="min-h-[100dvh] flex flex-col justify-center items-center px-6 relative overflow-hidden bg-white dark:bg-[#0f172a] bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0e7ff] dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#2e1065] text-gray-900 dark:text-white transition-colors duration-500"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence>
                    {bubbles.map((bubble) => (
                        <motion.div
                            key={bubble.id}
                            className="absolute bottom-0 pointer-events-auto cursor-pointer"
                            style={{ left: bubble.left }}
                            initial={{ y: "20vh", opacity: 0, scale: 0.8 }}
                            animate={{
                                y: bubble.targetY,
                                opacity: [0, 1, 1, 0],
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.5,
                                transition: { duration: 0.15, ease: "easeOut" }
                            }}
                            transition={{
                                duration: bubble.duration,
                                delay: bubble.delay,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            onClick={() => handlePop(bubble.id)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div
                                className="bubble-content"
                                style={{
                                    width: bubble.size,
                                    height: bubble.size,
                                    animationDelay: bubble.wobbleDelay
                                }}
                            >
                                <img
                                    src={bubble.src}
                                    alt={bubble.name}
                                    className="w-[60%] h-[60%] object-contain grayscale-[10%] dark:grayscale-[100%] opacity-90 dark:opacity-40 select-none"
                                    draggable="false"
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="relative z-10 flex flex-col items-center pointer-events-auto">
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
                        >
                            <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 grayscale hover:grayscale-0 transition-all duration-300" />
                        </motion.a>

                        <motion.a
                            href="https://github.com/CarrascosaArnaud"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img src={githubIcon} alt="Github" className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300" />
                        </motion.a>

                        <motion.a
                            href="https://iokko.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img src={itchIcon} alt="Itch.Io" className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="w-10 h-10"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img src={mailIcon} alt="Mail" className="w-10 h-10 grayscale hover:grayscale-0 dark:invert transition-all duration-300" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}