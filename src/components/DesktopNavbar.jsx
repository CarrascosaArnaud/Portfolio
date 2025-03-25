import React, { useState, useEffect } from "react";
import liens from "../Liens";

const DesktopNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting);
          if (visibleSection) {
            setActiveSection(visibleSection.target.id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" } // Détecte quand la section est bien centrée dans l'écran
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
      <header className="fixed top-0 w-full bg-base-100 shadow-md py-2 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#about" className="text-secondary text-2xl font-semibold">
            Arnaud.C
          </a>
          <ul className="flex items-center gap-10">
            {liens.map((link) => (
                <li key={link.id}>
                  <a
                      href={link.url}
                      className={`relative text-secondary text-lg transition duration-300 hover:text-primary 
                  ${activeSection === link.url.substring(1) ? "active-link" : ""}`}
                  >
                    {link.text}
                  </a>
                </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-ghost text-xl animate-pulse">
                Contactez moi
              </a>
            </li>
          </ul>
        </div>
      </header>
  );
};

export default DesktopNavbar;
