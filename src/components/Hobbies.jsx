import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jeuxVideo from "../assets/the eggscape-gameplay.png";
import musique from "../assets/guitar-piano.jpg";
import modelisationVideo from "../assets/Donuts.mp4"
import modelisationImage from "../assets/donuts.png"
import montageVideo from "../assets/zenitsu-loop.mp4"
import montageVideoImage from "../assets/zenitsu.jpg"

const hobbiesData = [
    {
        id: 1,
        title: "Développement de jeux vidéo",
        shortDesc: "Développement de jeux indépendants avec Godot",
        longDesc: "Je monte régulièrement des équipes pour participer à des gamejams organisées sur itch.io. J'ai de l'expérience sur Unity mais depuis plusieurs années j'utilise exclusivement Godot.",
        image: jeuxVideo,
        link: "https://iokko.itch.io/"
    },
    {
        id: 2,
        title: "Modélisation 3D",
        shortDesc: "Apprentissage de Blender en autodidacte",
        longDesc: "J'ai commencé différents projets Blender pour apprendre à modéliser des personnages et environnement pour créer des jeux vidéos en 3D.",
        image: modelisationImage,
        video: modelisationVideo
    },    {
        id: 3,
        title: "Musique",
        shortDesc: "Composition et écoute active",
        longDesc: "J'ai appris le solfège à mes 8 ans avec des cours de piano, j'ai ensuite continué mon apprentissage de divers instruments en autodidacte comme la guitare ou le violon. J'ai aussi des bases sur FLStudio, pour aggrémenter mes jeux vidéos.",
        image: musique,
    },
    {
        id: 4,
        title: "Sports",
        shortDesc: "Arts martiaux, musculation, escalade...",
        longDesc: "Le sport est indispensable à mes yeux, ça apprend la discipline en plus d'améliorer la santé mentale et physique. J'ai commencé le sport très tôt et j'ai pu pratiquer plein d'activités différentes, en club comme en solitaire.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",
    },
    {
        id: 5,
        title: "Montage vidéo",
        shortDesc: "Utilisation régulière de Davinci Resolve",
        longDesc: "Mon amour du montage vidéo est né des vidéos de vacances que faisait mon père, et j'ai appris le montage vidéo seul pour continuer cette tradition.",
        image: montageVideoImage,
        video: montageVideo
    },

];

const HobbyCard = ({ hobby }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented", error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && !isExpanded) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-black group cursor-pointer border-4 border-gray-800 dark:border-gray-700 shadow-2xl transition-all duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={hobby.image}
                alt={hobby.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out absolute inset-0 z-0
          ${isExpanded ? 'scale-110 blur-md opacity-40' : 'group-hover:scale-105 group-hover:blur-0 blur-[2px] opacity-70'}`}
            />

            {hobby.video && (
                <video
                    ref={videoRef}
                    src={hobby.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-500 ease-in-out
                    ${isExpanded ? 'opacity-0' : 'opacity-0 md:group-hover:opacity-100 opacity-100'}`}
                />
            )}

            <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 z-20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-white text-3xl font-bold">{hobby.title}</h3>
                <p className="text-gray-300 text-base mt-3 leading-relaxed">{hobby.shortDesc}</p>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute inset-0 bg-gray-900/90 p-10 flex flex-col justify-center items-center text-center backdrop-blur-md z-30"
                    >
                        <h3 className="text-white text-4xl font-bold mb-6">{hobby.title}</h3>
                        <p className="text-gray-200 text-lg leading-relaxed mb-8">{hobby.longDesc}</p>

                        <div className="flex flex-col gap-4">
                            {hobby.link && (
                                <a
                                    href={hobby.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Lien vers mon Itch.io
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Hobbies = () => {
    const loopData = [...hobbiesData, ...hobbiesData];
    return (
        <section
            id="hobbies"
            className="min-h-[100dvh] pt-[10vh] pb-[5vh] flex flex-col items-center bg-gradient-to-tr from-[#f3e8ff] to-[#ccfbf1] dark:from-[#2e1065] dark:to-[#042f2e] transition-colors duration-500 overflow-hidden"
        >   <style>{`
                .swiper-pagination-bullet {
                    background-color: #6b7280;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background-color: #3b82f6 !important;
                    opacity: 1;
                    transform: scale(1.3);
                }
                .dark .swiper-pagination-bullet {
                    background-color: #9ca3af;
                }
                .dark .swiper-pagination-bullet-active {
                    background-color: #ffffff !important;
                }
            `}</style>

            <h1 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white tracking-widest">
                Hobbies
            </h1>

            <div className="w-full">
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    spaceBetween={20}
                    slidesPerView={1.35}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 40
                        },
                        1280: {
                            slidesPerView: 3.8,
                            spaceBetween: 40
                        },
                    }}
                    className="px-10 pb-12"
                >

                    {loopData.map((hobby, index) => (
                        <SwiperSlide key={hobby.id} className="py-10">
                            <p className="text-sm md:text-base leading-relaxed">
                            <HobbyCard hobby={hobby} />
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Hobbies;