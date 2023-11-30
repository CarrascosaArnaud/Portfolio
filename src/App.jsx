import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className="mainItems">
        <section id="about" className="pt-20">
          <h1>A propos de moi</h1>
        </section>
        <section id="formations" className="pt-20 bg-info">
          <h1>Formations</h1>
        </section>
        <section id="experiences" className="pt-20">
          <h1>Expériences professionnelles</h1>
        </section>
        <section id="hobbies" className="pt-20 bg-info">
          <h1>Hobbies</h1>
        </section>
        <section id="contact" className="pt-20">
          <h1>Contactez moi</h1>
        </section>
      </div>
      {/* <Footer />*/}
    </main>
  );
}

export default App;
