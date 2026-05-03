import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jeuxVideo from "../assets/the eggscape-gameplay.png";
import jeuxVideoVideo from "../assets/eggscape.gif";
import musique from "../assets/guitar-piano.jpg";
import modelisationVideo from "../assets/Donuts.mp4"
import modelisationImage from "../assets/donuts.png"
import montageVideo from "../assets/zenitsu-loop.mp4"
import montageVideoImage from "../assets/zenitsu.jpg"

import ClickIndicator from "./ClickIndicator";

const hobbiesData = [
    { id: 1, title: "Développement de jeux vidéo", shortDesc: "Développement de jeux indépendants avec Godot", longDesc: "Je monte régulièrement des équipes pour participer à des gamejams organisées sur itch.io. J'ai de l'expérience sur Unity mais depuis plusieurs années j'utilise exclusivement Godot.", image: jeuxVideo, video: jeuxVideoVideo ,link: "https://iokko.itch.io/" },
    { id: 2, title: "Modélisation 3D", shortDesc: "Apprentissage de Blender en autodidacte", longDesc: "J'ai travaillé en autonomie sur différents projets Blender pour apprendre à modéliser des personnages et environnement afin créer des jeux vidéos en 3D.", image: modelisationImage, video: modelisationVideo },
    { id: 3, title: "Musique", shortDesc: "Pratique et écoute", longDesc: "J'ai appris le solfège à mes 8 ans avec des cours de piano, j'ai ensuite continué mon apprentissage de divers instruments en autodidacte comme la guitare ou le violon. J'ai aussi des bases sur FLStudio, pour aggrémenter mes jeux vidéos.", image: musique },
    { id: 4, title: "Sports", shortDesc: "Arts martiaux, musculation, escalade...", longDesc: "Le sport est indispensable à mes yeux, ça entraîne la discipline en plus d'améliorer la santé mentale et physique. J'ai commencé le sport très tôt et j'ai pu pratiquer plein d'activités différentes, en club ou en individuel.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500" },
    { id: 5, title: "Montage vidéo", shortDesc: "Utilisation régulière de Davinci Resolve", longDesc: "Mon amour du montage vidéo est né des vidéos de vacances que faisait mon père, et j'ai appris le montage vidéo seul pour continuer cette tradition.", image: montageVideoImage, video: montageVideo },
];

const HobbyCard = ({ hobby, isMobile, showIndicator, onInteract }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const videoRef = useRef(null);

    const isGif = hobby.video?.toLowerCase().includes("gif");

    return (
        <div
            className="relative w-full h-[320px] md:h-[500px] group cursor-pointer isolate transform-gpu"
            onClick={() => {
                setIsExpanded(!isExpanded);
                if (onInteract) onInteract();
            }}
        >
            {showIndicator && (
                <ClickIndicator className="absolute -top-0.5 -right-0.5 md:-top-0.5 md:-right-0.5 z-50" />
            )}

            <div className={`absolute inset-0 rounded-3xl overflow-hidden bg-black border-4 border-gray-800 dark:border-gray-700 shadow-2xl transition-all duration-700 ease-out
                ${!isExpanded ? 'group-hover:scale-[1.04] group-hover:-translate-y-5 group-hover:shadow-blue-500/10' : ''}`}>

                <img
                    src={hobby.image}
                    alt={hobby.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out absolute inset-0 z-0 will-change-transform
                    ${isExpanded ? 'scale-105 opacity-30 md:scale-110 md:blur-md md:opacity-40' : 'opacity-70'} 
                    ${!isMobile && !isExpanded ? 'blur-0' : ''}`}
                />

                {!isMobile && hobby.video && (
                    isGif ? (
                        <img
                            src={hobby.video}
                            alt=""
                            className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-500 ease-in-out
                            ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
                        />
                    ) : (
                        <video
                            ref={videoRef}
                            src={hobby.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-500 ease-in-out
                            ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
                        />
                    )
                )}

                <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 z-20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{hobby.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed">{hobby.shortDesc}</p>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gray-900/95 md:bg-gray-900/90 p-6 md:p-10 flex flex-col justify-center items-center text-center z-30 md:backdrop-blur-md"
                        >
                            <h3 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">{hobby.title}</h3>
                            <p className="text-gray-200 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">{hobby.longDesc}</p>

                            {hobby.link && (
                                <a
                                    href={hobby.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Lien vers mon Itch.io
                                </a>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const Hobbies = () => {
    const loopData = [...hobbiesData, ...hobbiesData];
    const [isMobile, setIsMobile] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="hobbies"
            className="min-h-[100dvh] pt-[10vh] pb-[5vh] flex flex-col items-center relative overflow-hidden transition-colors duration-500
            bg-gradient-to-b from-[#f3e8ff] to-[#e0e7ff]
            dark:from-[#1e1b4b] dark:to-[#0f172a]"
        >
            {!isMobile && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full blur-3xl ${
                                i % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"
                            }`}
                            style={{
                                width: Math.random() * 200 + 200,
                                height: Math.random() * 200 + 200,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, Math.random() * 50 - 25, 0],
                                y: [0, Math.random() * 100 - 50, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.15, 0.3, 0.15]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className="section-title">Hobbies</h2>

                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        breakpoints={{
                            768: { slidesPerView: 2.2, spaceBetween: 30 },
                            1280: { slidesPerView: 3.5, spaceBetween: 40 },
                        }}
                        className="px-4 md:px-10 pb-12"
                    >
                        {loopData.map((hobby, index) => (
                            <SwiperSlide key={`${hobby.id}-${index}`} className="py-6 md:py-10">
                                <HobbyCard
                                    hobby={hobby}
                                    isMobile={isMobile}
                                    showIndicator={!hasInteracted && hobby.id === 1}
                                    onInteract={() => setHasInteracted(true)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;