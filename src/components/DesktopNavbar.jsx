import React, { useState, useEffect } from "react";
import liens from "../Liens";
import sunIcon from "../assets/symbole-de-temps-soleil.png";
import moonIcon from "../assets/croissant-de-lune.png";

const DesktopNavbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        const applyTheme = () => {
            const isDark =
                theme === "dark" ||
                (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
            if (isDark) {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
        };
        applyTheme();
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <header className="fixed top-0 w-full bg-[#ededed] dark:bg-[#292929] shadow-md py-2 z-50 transition-colors duration-300">
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
                                    className={`relative text-gray-700 dark:text-gray-400 text-lg transition duration-300 hover:text-black dark:hover:text-white 
                  ${activeSection === link.url.substring(1) ? "active-link !text-black dark:!text-white font-bold" : ""}`}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white btn btn-ghost text-xl">
                        Contactez moi
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 bg-gray-300 dark:bg-gray-700"
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