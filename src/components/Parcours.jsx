import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CV from "../assets/CV_2026-04-24_Arnaud_Carrascosa.pdf"

const parcours = [
    { year: "2019-2021", title: "BTS SNIR", details: "Effectué à Toulouse, j'étais Major de promotion pendant les deux ans. J'ai fait ma deuxième année en alternance aux Ateliers de la Haute Garonne" },
    { year: "2021-2022", title: "Ecole d'ingénieur en informatique", details: "Première année à 3iL Rodez, en alternance à Sopra Steria" },
    { year: "2022-2023", title: "Bachelor en Marketing Commerce & Négociation", details: "Année effectuée en alternance dans deux entreprises différentes, FeelU puis Lundi Matin" },
    { year: "2023-2024", title: "POE Développeur Java", details: "Formation spécialisée dans le développement Java" },
    { year: "2024-2025", title: "Titre Professionnel CDA", details: "Titre professionnel de niveau 6, équivalent bac +3/4 de Concepteur Développeur d'Applications, effectué en alternance chez Dawan" }
];
const experiences = [
    { year: "2020-2021", title: "Alternant technicien en informatique", details: "Alternance d'un an chez les Ateliers de la Haute Garonne, le leader mondial du rivet aéronautique" },
    { year: "2021-2022", title: "Apprenti ingénieur en informatique", details: "Alternance d'un an chez Sopra Steria, une des ESN les plus impactantes en Europe" },
    { year: "2022", title: "Mission d'intérim en technicien réseau", details: "Mission d'intérim effectuée chez General Electric, une multinationale présente dans plus de 150 pays" },
    { year: "2022-2023", title: "Apprenti commercial", details: "Alternance chez FeelU, une petite startup spécilaisée dans la réalitée virtuelle" },
    { year: "2023", title: "Assistant Product Owner", details: "Alternance chez Lundi Matin, une ESN à la croissance importante" },
    { year: "2024-2025", title: "Concepteur Développeur d'Applications", details: "Alternance d'un an chez Dawan Montpellier" }
];

const Parcours = () => {
    const [activeTab, setActiveTab] = useState("parcours");
    const formationsData = activeTab === "parcours" ? parcours : experiences;
    const [selectedFormation, setSelectedFormation] = useState(null);
    const containerRef = useRef(null);
    const [lineStyle, setLineStyle] = useState({ top: "0px", height: "0px" });
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (containerRef.current) {
                const points = containerRef.current.querySelectorAll(".timeline-point");
                if (points.length > 1) {
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const firstPoint = points[0].getBoundingClientRect();
                    const lastPoint = points[points.length - 1].getBoundingClientRect();
                    const scrollTop = containerRef.current.scrollTop;

                    setLineStyle({
                        top: `${firstPoint.top - containerRect.top + scrollTop}px`,
                        height: `${lastPoint.bottom - firstPoint.top}px`
                    });
                }
            }
        }, 50);
        return () => clearTimeout(timer);
    }, [formationsData, activeTab]);

    return (
        <section
            id="formations"
            className="h-[100dvh] w-full flex flex-col items-center pt-16 md:pt-24 pb-4 relative overflow-hidden bg-white dark:bg-[#0f172a] bg-gradient-to-b from-[#e0e7ff] via-[#f3e8ff] to-[#f3e8ff] dark:from-[#2e1065] dark:via-[#1e1b4b] dark:to-[#1e1b4b] transition-colors duration-500"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute border-2 border-blue-600/40 dark:border-blue-400/25"
                        style={{
                            width: 120 + i * 60,
                            height: 120 + i * 60,
                            top: `${10 * i - 5}%`,
                            left: i % 2 === 0 ? "-10%" : "auto",
                            right: i % 2 !== 0 ? "-10%" : "auto",
                        }}
                        animate={{
                            rotate: i % 2 === 0 ? [0, 90] : [0, -90],
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full flex flex-col items-center h-full overflow-hidden">
                <div className="flex-none flex flex-col items-center w-full z-10 bg-transparent pb-4 md:pb-6">
                    <h2 className="section-title">Parcours</h2>
                    <div className="flex justify-center gap-4 md:gap-6 flex-wrap px-4">
                        <button
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg ${
                                activeTab === "parcours"
                                    ? "bg-blue-600 text-white shadow-blue-500/20"
                                    : "bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/20"
                            }`}
                            onClick={() => setActiveTab("parcours")}
                        >
                            Formations
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg ${
                                activeTab === "experiences"
                                    ? "bg-blue-600 text-white shadow-blue-500/20"
                                    : "bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/20"
                            }`}
                            onClick={() => setActiveTab("experiences")}
                        >
                            Expériences Pro
                        </button>

                        <a
                            href={CV}
                            download="CV_Carrascosa_Arnaud.pdf"
                            className="px-6 py-2 rounded-full bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-300 text-sm font-semibold shadow-lg flex items-center gap-2"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Mon CV
                        </a>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="flex-1 w-full max-w-4xl overflow-y-auto overflow-x-hidden relative px-4 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <div className="relative py-2">
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 transition-all duration-500"
                            style={{ top: lineStyle.top, height: lineStyle.height }}
                        ></div>

                        {formationsData.map((formation, index) => (
                            <div key={index} className={`relative flex items-center py-1 mb-4 md:mb-5 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                <div className="timeline-point absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500 z-10"></div>
                                <div
                                    className={`cursor-pointer relative bg-white/40 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 w-[45%] border border-white/50 dark:border-white/10 hover:border-blue-400/50 group
                                                ${index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"}`}
                                    onClick={() => {
                                        setSelectedFormation(formation);
                                        setHasInteracted(true);
                                    }}
                                >
                                    {!hasInteracted && index === 0 && (
                                        <span className={`absolute -top-2 ${index % 2 === 0 ? '-right-2' : '-left-2'} flex h-4 w-4 z-20`}>
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white dark:border-gray-800"></span>
                                        </span>
                                    )}

                                    <h2 className="font-bold text-lg text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">{formation.year}</h2>
                                    <p className="text-sm font-semibold tracking-wide">{formation.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedFormation && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedFormation(null)}
                    >
                        <div className="bg-gray-800 border border-gray-600 p-6 rounded-xl w-full max-lg text-white relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-3 right-3 text-gray-400 hover:text-white transition" onClick={() => setSelectedFormation(null)}>
                                ✖
                            </button>
                            <span className="inline-block px-3 py-1 bg-blue-600 text-xs rounded-full mb-3">{selectedFormation.year}</span>
                            <h2 className="text-xl font-bold mb-2">{selectedFormation.title}</h2>
                            <p className="text-gray-300 leading-relaxed">{selectedFormation.details}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Parcours;