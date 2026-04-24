import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const messageSuggestions = [
    "Une opportunité d'emploi...",
    "Une remarque sur le site...",
    "Une idée de projet..."
];

const Contact = () => {
    const [status, setStatus] = useState("idle");
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [typedPlaceholder, setTypedPlaceholder] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const generatedBubbles = skillAssets.map((skill, index) => ({
            id: `bubble-${index}`,
            ...skill,
            left: `${Math.random() * 85 + 7}%`,
            size: `${Math.random() * 30 + 80}px`,
            duration: Math.random() * 6 + 10,
            delay: Math.random() * 15,
            wobbleDelay: `-${Math.random() * 4}s`,
            targetY: `-${Math.random() * 50 + 10}vh`,
            zIndex: Math.floor(Math.random() * 5)
        }));
        setBubbles(generatedBubbles);
    }, []);

    useEffect(() => {
        const currentFullText = messageSuggestions[suggestionIndex];

        if (!isDeleting && typedPlaceholder === currentFullText) {
            const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(pauseTimer);
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setTypedPlaceholder(currentFullText.substring(0, typedPlaceholder.length + 1));
            } else {
                const nextText = currentFullText.substring(0, typedPlaceholder.length - 1);
                setTypedPlaceholder(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setSuggestionIndex((prev) => (prev + 1) % messageSuggestions.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timer);
    }, [typedPlaceholder, isDeleting, suggestionIndex]);

    const handlePop = (id) => {
        setBubbles(prev => prev.map(b => b.id === id ? {
            ...b,
            id: `bubble-${Date.now()}`,
            delay: 0,
            left: `${Math.random() * 85 + 7}%`
        } : b));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const form = e.target;
        const data = new FormData(form);
        const res = await fetch("https://formspree.io/f/xanjrqep", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        });

        if (res.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-[100dvh] pt-[12vh] pb-[5vh] flex flex-col items-center justify-start relative overflow-hidden">

            {/* Système de bulles en arrière-plan */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence>
                    {bubbles.map((bubble) => (
                        <motion.div
                            key={bubble.id}
                            className="absolute bottom-0 pointer-events-auto cursor-pointer"
                            style={{ left: bubble.left, zIndex: bubble.zIndex }}
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

            <div className="z-20 w-full max-w-md md:max-w-2xl px-4 text-center">
                <h2 className="section-title">Me Contacter</h2>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 md:p-10 rounded-2xl shadow-2xl w-full space-y-5 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10"
                >
                    <div className="space-y-1 text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="votre@email.com"
                            className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-1 text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Message</label>
                        <textarea
                            name="message"
                            required
                            placeholder={typedPlaceholder}
                            rows="5"
                            className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600 dark:text-green-400 text-center font-medium animate-bounce">Message envoyé avec succès !</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 text-center text-sm">Échec de l'envoi. Contactez-moi à : carrascosarnaud@gmail.com</p>
                    )}
                </form>
            </div>

            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                <svg className="relative block w-full h-[100px] md:h-[150px]" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax-waves">
                        <use href="#wave-path" x="48" y="0" className="fill-blue-400/40 dark:fill-blue-900/20" />
                        <use href="#wave-path" x="48" y="3" className="fill-blue-500/50 dark:fill-blue-800/30" />
                        <use href="#wave-path" x="48" y="5" className="fill-blue-600/30 dark:fill-[#020617]" />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Contact;