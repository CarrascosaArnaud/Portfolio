import React from "react";
import liens from "../Liens";

const DesktopNavbar = () => {
  return (
    <header className="navbar bg-base-100 shadow shadow-neutral py-2 fixed top-0 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#about"
          className="text-secondary text-2xl transition duration-700 hover:text-primary font-semibold"
        >
          Arnaud.C
        </a>
        <ul className="flex items-center gap-10">
          {liens.map((link) => {
            return (
              <a
                className="text-secondary transition duration-700 text-lg hover:text-primary"
                href={link.url}
                key={link.id}
              >
                {link.text}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn btn-ghost transition duration-500 hover:text-primary text-xl animate-pulse"
          >
            Contactez moi
          </a>
        </ul>
      </div>
    </header>
  );
};

export default DesktopNavbar;
