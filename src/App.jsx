import "./App.css";
import { useEffect } from "react";
import About from "./components/About.jsx";
import Projets from "./components/Projets.jsx";
import Contact from "./components/Contact.jsx";
import Formations from "./components/./Parcours.jsx";
import Hobbies from "./components/Hobbies";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark =
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    //const sections = [About, Projets, Formations, Hobbies, Contact];
    const sections = [About, Formations, Hobbies, Contact];
    return (
        <main>
            <ThemeToggle />
            <Navbar />
            <div className="mainItems">
                {sections.map((SectionComponent) => (
                    <FadeIn>
                        <SectionComponent />
                    </FadeIn>
                ))}
            </div>
        </main>
    );
}

export default App;