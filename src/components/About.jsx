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
    { name: "Angular", src: Angular_logo }, { name: "Bootstrap", src: Bootstrap_logo },
    { name: "C++", src: C }, { name: "CSS", src: css_logo },
    { name: "HTML", src: html_logo }, { name: "Java", src: Java_logo },
    { name: "JavaScript", src: JS_logo }, { name: "MariaDB", src: Mariadb_logo },
    { name: "MongoDB", src: Mongodb_logo }, { name: "MySQL", src: MySQL_logo },
    { name: "Node.js", src: NodeJS_logo }, { name: "PHP", src: php_logo },
    { name: "Python", src: Python_logo }, { name: "React", src: React_logo },
    { name: "Spring", src: Spring_logo }, { name: "Tailwind CSS", src: Tailwind_logo },
    { name: "TypeScript", src: Typescript_logo }, { name: "Vue.js", src: VueJS_logo },
];

const qualitiesList = ["Front", "Back", "Fullstack", "Créatif", "Rigoureux", "Passionné", "Curieux", "Organisé", "Autonome", "Polyvalent", "Agile"];

export default function About() {
    const [typedText, setTypedText] = useState("");
    const [dynamicWord, setDynamicWord] = useState("");
    const [showContact, setShowContact] = useState(false);
    const [bubbles, setBubbles] = useState([]);

    const [isDeleting, setIsDeleting] = useState(false);
    const [pool, setPool] = useState([...qualitiesList]);
    const [currentQuality, setCurrentQuality] = useState("");

    const baseText = "Concepteur | Développeur | ";

    useEffect(() => {
        const generated = skillAssets.map((skill, index) => ({
            id: `bubble-${index}`,
            ...skill,
            left: `${Math.random() * 85 + 7}%`,
            size: `${Math.random() * 30 + 80}px`,
            duration: Math.random() * 6 + 10,
            delay: Math.random() * 12,
            wobbleDelay: `-${Math.random() * 4}s`,
            targetY: `-${Math.random() * 50 + 90}vh`,
            zIndex: Math.floor(Math.random() * 40)
        }));
        setBubbles(generated);

        let i = 0;
        const interval = setInterval(() => {
            setTypedText(baseText.substring(0, i));
            i++;
            if (i > baseText.length) {
                clearInterval(interval);
                setCurrentQuality("Passionné");
                setShowContact(true);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!currentQuality) return;

        if (!isDeleting && dynamicWord === currentQuality) {
            const pauseTimer = setTimeout(() => setIsDeleting(true), 700);
            return () => clearTimeout(pauseTimer);
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDynamicWord(currentQuality.substring(0, dynamicWord.length + 1));
            } else {
                const nextText = currentQuality.substring(0, dynamicWord.length - 1);
                setDynamicWord(nextText);

                if (nextText === "") {
                    setIsDeleting(false);

                    let newPool = pool.filter(word => word !== currentQuality);
                    if (newPool.length === 0) {
                        newPool = [...qualitiesList].filter(word => word !== currentQuality);
                    }

                    const nextWord = newPool[Math.floor(Math.random() * newPool.length)];
                    setPool(newPool);
                    setCurrentQuality(nextWord);
                }
            }
        }, isDeleting ? 50 : 130);

        return () => clearTimeout(timer);
    }, [dynamicWord, isDeleting, currentQuality, pool]);

    const handlePop = (id) => {
        setBubbles(prev => prev.map(b => b.id === id ? {
            ...b,
            id: `bubble-${Date.now()}`,
            delay: 0,
            left: `${Math.random() * 85 + 7}%`
        } : b));
    };

    return (
        <section id="about" className="min-h-[100dvh] flex flex-col justify-center items-center px-6 relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#e0e7ff] to-[#f3e8ff] dark:from-[#0f172a] dark:to-[#2e1065] transition-colors duration-500">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence>
                    {bubbles.map((bubble) => (
                        <motion.div
                            key={bubble.id}
                            className="absolute bottom-0 pointer-events-auto cursor-pointer"
                            style={{
                                left: bubble.left,
                                zIndex: bubble.zIndex
                            }}
                            initial={{ y: "20vh", opacity: 0 }}
                            animate={{ y: bubble.targetY, opacity: [0, 1, 1, 0] }}
                            exit={{ opacity: 0, scale: 1.5, transition: { duration: 0.2 } }}
                            transition={{ duration: bubble.duration, delay: bubble.delay, repeat: Infinity, ease: "linear" }}
                            onClick={() => handlePop(bubble.id)}
                        >
                            <div className="bubble-content" style={{ width: bubble.size, height: bubble.size, animationDelay: bubble.wobbleDelay }}>
                                <img src={bubble.src} alt="" className="w-[60%] h-[60%] object-contain grayscale-[10%] dark:grayscale-[100%] opacity-90 dark:opacity-40" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="relative z-20 flex flex-col items-center">
                <motion.h1 className="text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}>
                    Salut, moi c'est <span className="text-blue-600 dark:text-gray-400">Arnaud</span>
                </motion.h1>

                <div className="mt-4 text-sm md:text-lg text-gray-600 dark:text-gray-400 font-medium h-8 flex items-center whitespace-nowrap overflow-visible">
                    <span className="shrink-0">{typedText}</span>
                    <span className="text-blue-500 dark:text-blue-300 ml-1 flex items-center flex-nowrap">
                        {dynamicWord}
                        <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 shrink-0">|</motion.span>
                    </span>
                </div>

                <motion.div className="mt-6 flex space-x-6" initial={{ opacity: 0 }} animate={{ opacity: showContact ? 1 : 0 }}>
                    <motion.a href="https://www.linkedin.com/in/arnaud-carrascosa/" target="_blank" className="w-10 h-10" whileHover={{ scale: 1.2 }}>
                        <img src={linkedinIcon} alt="LinkedIn" className="grayscale hover:grayscale-0 transition-all" />
                    </motion.a>
                    <motion.a href="https://github.com/CarrascosaArnaud" target="_blank" className="w-10 h-10" whileHover={{ scale: 1.2 }}>
                        <img src={githubIcon} alt="Github" className="grayscale dark:invert hover:grayscale-0 transition-all" />
                    </motion.a>
                    <motion.a href="https://iokko.itch.io/" target="_blank" className="w-10 h-10" whileHover={{ scale: 1.2 }}>
                        <img src={itchIcon} alt="Itch" className="grayscale dark:invert hover:grayscale-0 transition-all" />
                    </motion.a>
                    <motion.a href="#contact" className="w-10 h-10" whileHover={{ scale: 1.2 }}>
                        <img src={mailIcon} alt="Mail" className="grayscale dark:invert hover:grayscale-0 transition-all" />
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 flex flex-col items-center z-30 text-gray-500 dark:text-gray-400 opacity-80"
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 1, x: "-50%" }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Défiler</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>

        </section>
    );
}