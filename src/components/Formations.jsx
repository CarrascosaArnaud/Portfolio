import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import informatiqueImage from "../assets/informatique.jpg";

const formations = [
    {
        title: "Développement Web Full Stack",
        image: informatiqueImage,
        description: "Formation approfondie en JavaScript, React, Node.js et bases de données."
    },
    {
        title: "Intelligence Artificielle & Machine Learning",
        image: "ai-ml.jpg",
        description: "Comprendre et implémenter des modèles de deep learning avec Python."
    },
    {
        title: "Game Development avec Godot",
        image: "godot-dev.jpg",
        description: "Créer des jeux vidéo interactifs en utilisant Godot Engine et GDScript."
    },
    {
        title: "UI/UX Design",
        image: "ui-ux.jpg",
        description: "Apprendre les bases du design d'interface et de l'expérience utilisateur."
    }
];

const Formations = () => {
    const [selectedFormation, setSelectedFormation] = useState(null);

    return (
        <section id="formations" className="pt-20 relative">
            <h1 className="text-center text-2xl font-bold mb-6">Formations</h1>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 1.8 },
                    1024: { slidesPerView: 2.8 },
                }}
                className="w-[85%] mx-auto custom-swiper"
            >
                {formations.map((formation, index) => (
                    <SwiperSlide
                        key={index}
                        className="group bg-gray-900 p-6 rounded-xl shadow-lg h-[500px] flex flex-col transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedFormation(formation)}
                    >
                        <div className="relative w-full h-60">
                            <img
                                src={formation.image}
                                alt={formation.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                <h2 className="text-white text-center text-xl md:text-2xl font-bold px-4">
                                    {formation.title}
                                </h2>
                            </div>
                        </div>

                        <div className="flex-grow flex items-center justify-center p-4">
                            <p className="text-sm text-gray-400 text-center">
                                {formation.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {selectedFormation && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedFormation(null)}
                >
                    <div
                        className="bg-gray-800 p-6 rounded-lg w-4/5 md:w-1/2 lg:w-1/3 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-300 hover:text-white"
                            onClick={() => setSelectedFormation(null)}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-bold text-white text-center mb-4">
                            {selectedFormation.title}
                        </h2>
                        <img
                            src={selectedFormation.image}
                            alt={selectedFormation.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-300 text-center">{selectedFormation.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Formations;
