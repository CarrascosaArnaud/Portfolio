import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import liens from "../Liens";
import sunIcon from "../assets/symbole-de-temps-soleil.png";
import moonIcon from "../assets/croissant-de-lune.png";

const DesktopNavbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -20% 0px", threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 w-full bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-sm py-2 z-50 transition-colors duration-500">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a
                    href="#about"
                    className="text-gray-700 dark:text-gray-400 text-2xl font-semibold transition-all duration-300 hover:text-black dark:hover:text-white"
                >
                    Arnaud Carrascosa
                </a>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-10">
                        {liens.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.url}
                                    className={`relative inline-block whitespace-nowrap text-lg transition duration-300 hover:text-black dark:hover:text-white 
                                    ${activeSection === link.url.substring(1)
                                        ? "text-black dark:text-white font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black dark:after:bg-white"
                                        : "text-gray-700 dark:text-gray-400"}`}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className={`whitespace-nowrap btn btn-ghost text-xl px-4 py-2 rounded-lg transition-all duration-300 
                        ${activeSection === "contact"
                            ? "text-black dark:text-white font-bold bg-gray-200/50 dark:bg-gray-800/50"
                            : "text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                    >
                        Contactez moi
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 bg-gray-300 dark:bg-gray-700"
                    >
                        <img
                            src={theme === "dark" ? sunIcon : moonIcon}
                            alt="Toggle Theme"
                            className="w-5 h-5 object-contain"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DesktopNavbar;