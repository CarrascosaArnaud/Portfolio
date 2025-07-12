import React, { useState, useRef, useEffect } from "react";

const formations = [
    { year: "2021", title: "BTS SNIR", details: "Effectué à Toulouse, j'étais Major de promotion pendant les deux ans. J'ai fait ma deuxième année en alternance aux Ateliers de la Haute Garonne" },
    { year: "2023", title: "Bachelor en Marketing Commerce & Négociation", details: "Alterance effectuée au sein de FeelU, (une startup dans la VR), puis Lundi Matin (une ESN)" },
    { year: "2024", title: "Titre Professionnel CDA", details: "Bac +3 de Concepteur Développeur d'Applications, effectué après une POE Développeur Java" }
];
const experiences = [
    { year: "2022", title: "Développeur Web", details: "Stage chez DevCorp, création de dashboards React." },
    { year: "2023", title: "Freelance Frontend", details: "Projets pour des startups (Next.js, animations, SEO)." },
];


const Formations = () => {
    const [activeTab, setActiveTab] = useState("formations");
    const formationsData = activeTab === "formations" ? formations : experiences;
    const [selectedFormation, setSelectedFormation] = useState(null);
    const containerRef = useRef(null);
    const [lineStyle, setLineStyle] = useState({ top: "0px", height: "0px" });

    useEffect(() => {
        if (containerRef.current) {
            const points = containerRef.current.querySelectorAll(".timeline-point");
            if (points.length > 1) {
                const firstPoint = points[0].getBoundingClientRect();
                const lastPoint = points[points.length - 1].getBoundingClientRect();

                setLineStyle({
                    top: `${firstPoint.top - containerRef.current.getBoundingClientRect().top}px`,
                    height: `${lastPoint.bottom - firstPoint.top}px`
                });
            }
        }
    }, [formationsData]);

    return (
        <section id="formations" className="relative flex flex-col items-center py-16">
            <h1 className="text-2xl font-bold mb-10 text-white">Formations</h1>
            <div className="flex justify-center gap-6 mb-10">
                <button
                    className={`px-4 py-2 rounded-full transition ${
                        activeTab === "formations" ? "bg-gray-200 text-black" : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setActiveTab("formations")}
                >
                    Formations
                </button>
                <button
                    className={`px-4 py-2 rounded-full transition ${
                        activeTab === "experiences" ? "bg-gray-950 text-white" : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setActiveTab("experiences")}
                >
                    Expériences Pro
                </button>
            </div>

            <div ref={containerRef} className="relative w-full max-w-4xl">
                {/* Barre verticale dynamique */}
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500"
                    style={{ top: lineStyle.top, height: lineStyle.height }}
                ></div>

                {formationsData.map((formation, index) => (
                    <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                        {/* Point de la timeline */}
                        <div className="timeline-point absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"></div>

                        {/* Contenu de la formation */}
                        <div
                            className="cursor-pointer  shadow-2xl text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-64"
                            onClick={() => setSelectedFormation(formation)}
                        >
                            <h2 className="font-bold">{formation.year}</h2>
                            <p className="text-sm opacity-75">{formation.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modale au clic */}
            {selectedFormation && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedFormation(null)}
                >
                    <div className="bg-gray-800 p-6 rounded-lg w-4/5 md:w-1/2 lg:w-1/3 text-white relative" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setSelectedFormation(null)}>✖</button>
                        <h2 className="text-xl font-bold text-center">{selectedFormation.title}</h2>
                        <p className="mt-2">{selectedFormation.details}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Formations;
