import { useState, useEffect } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

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

    return { theme, toggleTheme };
};