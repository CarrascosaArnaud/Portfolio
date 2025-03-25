import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const formations = [
    {
        title: "Développement Web Full Stack",
        image: "web-dev.jpg",
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
    return (
        <section id="formations" className="pt-20">
            <h1 className="text-center text-2xl font-bold mb-6">Formations</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    320: { slidesPerView: 1 },
                }}
                className="w-4/5 mx-auto"
            >
                {formations.map((formation, index) => (
                    <SwiperSlide key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg">
                        <img src={formation.image} alt={formation.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                        <h2 className="text-lg font-bold">{formation.title}</h2>
                        <p className="text-sm text-gray-400">{formation.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Formations;
