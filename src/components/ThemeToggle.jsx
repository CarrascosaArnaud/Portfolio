import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme.jsx";
import sunIcon from "../assets/symbole-de-temps-soleil.png";
import moonIcon from "../assets/croissant-de-lune.png";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-blue-500/40 dark:border-white/20 shadow-2xl flex items-center justify-center md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img
                src={theme === "dark" ? sunIcon : moonIcon}
                alt="Toggle Theme"
                className="w-8 h-8 object-contain dark:invert"
            />
        </motion.button>
    );
}