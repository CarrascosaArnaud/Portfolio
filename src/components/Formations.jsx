import React, { useState, useRef, useEffect } from "react";

const formations = [
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

const Formations = () => {
    const [activeTab, setActiveTab] = useState("formations");
    const formationsData = activeTab === "formations" ? formations : experiences;
    const [selectedFormation, setSelectedFormation] = useState(null);
    const containerRef = useRef(null);
    const [lineStyle, setLineStyle] = useState({ top: "0px", height: "0px" });

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
            className="min-h-[100dvh] w-full flex flex-col items-center pt-16 md:pt-24 pb-4 relative overflow-hidden bg-[#e0e7ff] dark:bg-[#2e1065] bg-gradient-to-b from-[#e0e7ff] via-[#f3e8ff] to-[#f3e8ff] dark:from-[#2e1065] dark:via-[#1e1b4b] dark:to-[#1e1b4b] transition-colors duration-500"
        >
            <div className="flex-none flex flex-col items-center w-full z-10 bg-inherit pb-4">
                <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Parcours</h1>
                <div className="flex justify-center gap-6">
                    <button
                        className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg ${
                            activeTab === "formations"
                                ? "bg-blue-600 text-white shadow-blue-500/20"
                                : "bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/20"
                        }`}
                        onClick={() => setActiveTab("formations")}
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
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex-1 w-full max-w-4xl overflow-y-auto overflow-x-hidden relative px-4 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className="relative py-4">
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 transition-all duration-500"
                        style={{ top: lineStyle.top, height: lineStyle.height }}
                    ></div>

                    {formationsData.map((formation, index) => (
                        <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                            <div className="timeline-point absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500 z-10"></div>
                            <div
                                className={`cursor-pointer bg-white/40 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 w-[45%] border border-white/50 dark:border-white/10 hover:border-blue-400/50 group
                                            ${index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"}`}
                                onClick={() => setSelectedFormation(formation)}
                            >
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
                    <div className="bg-gray-800 border border-gray-600 p-6 rounded-xl w-full max-w-lg text-white relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-3 right-3 text-gray-400 hover:text-white transition" onClick={() => setSelectedFormation(null)}>
                            ✖
                        </button>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-xs rounded-full mb-3">{selectedFormation.year}</span>
                        <h2 className="text-xl font-bold mb-2">{selectedFormation.title}</h2>
                        <p className="text-gray-300 leading-relaxed">{selectedFormation.details}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Formations;