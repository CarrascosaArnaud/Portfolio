import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className="mainItems">
        <section id="about" className="pt-20 bg-white about">
          <h1>A propos de moi</h1>
        </section>
        <section id="formations" className="pt-20 bg-red formations">
          <h1>Formations</h1>
        </section>
        <section id="experiences" className="pt-20 bg-white experiences">
          <h1>Expériences professionnelles</h1>
        </section>
        <section id="hobbies" className="pt-20 bg-red hobbies">
          <h1>Hobbies</h1>
        </section>
        <section id="contact" className="pt-20 bg-white contact">
          <h1>Contactez moi</h1>
        </section>
      </div>
      {/* <Footer />*/}
    </main>
  );
}

export default App;
