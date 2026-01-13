import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Formations from "./components/Formations.jsx";
import Hobbies from "./components/Hobbies";
import Navbar from "./components/Navbar";
import {useEffect} from "react";

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
  return (
    <main>
      <Navbar />
      <div className="mainItems">
        <About />
        <Formations />
        <Hobbies />
        <Contact />
      </div>
    </main>
  );
}

export default App;
