import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Hobbies from "./components/Hobbies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className="mainItems">
        <About />
        <Formations />
        <Experiences />
        <Hobbies />
        <Contact />
      </div>
    </main>
  );
}

export default App;
