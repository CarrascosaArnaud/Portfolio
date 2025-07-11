import React from "react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="pt-20">
      <div className="flex-col">
        <h1 className="flex justify-center">Hobbies</h1>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
              <p className="mb-4">Mes projets de jeux vidéos</p>
              <a
                  href="https://iokko.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                  Itch.Io
              </a>
          </div>
      </div>
    </section>
  );
};

export default Hobbies;
