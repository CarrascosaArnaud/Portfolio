import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin-icon.png.webp";
import githubIcon from "../assets/github-logo.png";
import mailIcon from "../assets/mail-logo.png";
import itchIcon from "../assets/itch-logo.png";

const qualitiesList = ["Front", "Back", "Fullstack", "Créatif", "Rigoureux", "Passionné", "Curieux", "Organisé", "Autonome", "Polyvalent", "Agile"];

export default function About() {
    const [typedText, setTypedText] = useState("");
    const [dynamicWord, setDynamicWord] = useState("");
    const [showContact, setShowContact] = useState(false);
    const [stars, setStars] = useState([]);
    const [clouds, setClouds] = useState([]);

    const [isDeleting, setIsDeleting] = useState(false);
    const [pool, setPool] = useState([...qualitiesList]);
    const [currentQuality, setCurrentQuality] = useState("");

    const baseText = "Concepteur | Développeur | ";

    useEffect(() => {
        const generatedStars = Array.from({ length: 120 }).map((_, i) => ({
            id: `star-${i}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            duration: Math.random() * 8 + 4,
            delay: Math.random() * 30,
        }));
        setStars(generatedStars);

        const generatedClouds = Array.from({ length: 6 }).map((_, i) => ({
            id: `cloud-${i}`,
            top: `${Math.random() * 50}%`,
            duration: Math.random() * 40 + 60,
            delay: Math.random() * 20 * -1,
            scale: Math.random() * 0.6 + 0.4,
            opacity: Math.random() * 0.4 + 0.9,
        }));
        setClouds(generatedClouds);

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

    return (
        <section id="about" className="min-h-[100dvh] flex flex-col justify-center items-center px-6 relative overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100 dark:from-[#020617] dark:to-[#081421] transition-colors duration-500">
            <div className="absolute inset-0 pointer-events-none z-0 opacity-0 dark:opacity-100 transition-none">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full shadow-[0_0_6px_1px_white]"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            backgroundColor: "white"
                        }}
                        animate={{ opacity: [0, 1, 0.3] }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 pointer-events-none z-0 opacity-100 dark:opacity-0 transition-none">
                {clouds.map((cloud) => (
                    <motion.div
                        key={cloud.id}
                        className="absolute"
                        style={{ top: cloud.top, opacity: cloud.opacity, scale: cloud.scale }}
                        initial={{ left: "-20%" }}
                        animate={{ left: "120%" }}
                        transition={{ duration: cloud.duration, delay: cloud.delay, repeat: Infinity, ease: "linear" }}
                    >
                        <svg width="150" height="90" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1325 20.1772 10.2014 17.8596 10.0153C17.3916 6.62106 14.4841 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01146 11.4645 4.03387 11.6917C2.28132 12.3551 1 14.0252 1 16C1 18.2091 2.79086 20 5 20H17.5V19Z" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center mt-10">
                <motion.h1 className="text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}>
                    Salut, moi c'est <span className="text-blue-600 dark:text-gray-400">Arnaud</span>
                </motion.h1>

                <div className="mt-4 text-sm md:text-lg text-gray-800 dark:text-gray-300 font-medium h-8 flex items-center whitespace-nowrap overflow-visible">
                    <span className="shrink-0">{typedText}</span>
                    <span className="text-blue-600 dark:text-blue-400 ml-1 flex items-center flex-nowrap">
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
                className="absolute bottom-8 left-1/2 flex flex-col items-center z-20 text-gray-600 dark:text-gray-400 opacity-80"
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 1, x: "-50%" }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Défiler</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}