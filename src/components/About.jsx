import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin-icon.png.webp";

export default function About() {
    const [typedText, setTypedText] = useState("");
    const [showContact, setShowContact] = useState(false);
    const fullText = "Concepteur | Développeur | Passionné";
    const typingSpeed = 80;

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
            className="h-screen flex flex-col justify-center items-center bg-black text-white px-6"
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

            {/* Réservation de l'espace pour éviter le décalage */}
            <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl min-h-[24px]">
                {typedText}
            </p>

            <div className="mt-6 h-16 flex justify-center items-center relative">
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContact ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.a
                        href="https://www.linkedin.com/in/arnaud-carrascosa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-5 w-10 h-10"
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
                        href="#contact"
                        className="text-2xl px-6 py-2 border-2 border-gray-400 rounded-lg text-gray-400 hover:bg-gray-400 hover:text-black transition animate-pulse"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        Me Contacter
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
