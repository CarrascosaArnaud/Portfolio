import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CV from "../assets/CV Arnaud CARRASCOSA.pdf";
import ClickIndicator from "./ClickIndicator";

const parcours = [
    {
        year: "2024 - 2025",
        entity: "Dawan",
        title: "Titre Professionnel CDA",
        tags: ["Java", "React", "SQL", "JS", "Agile"],
        details: "Titre RNCP niveau 6 (équivalent bac +4) de <b>Concepteur Développeur d'Applications</b>, effectué en alternance chez Dawan."
    },
    {
        year: "2023 - 2024",
        entity: "Dawan",
        title: "POEI Développeur Java",
        tags: ["Java", "Spring Boot", "Hibernate", "Maven"],
        details: "Formation spécialisée dans le développement <b>Java</b>."
    },
    {
        year: "2022 - 2023",
        entity: "IPAC Bachelor Factory",
        title: "Bachelor en Marketing Commerce & Négociation",
        tags: ["Marketing", "Négociation", "Vente"],
        details: "Année effectuée en alternance dans deux entreprises différentes : <b>FeelU</b> puis <b>Lundi Matin</b>."
    },
    {
        year: "2021 - 2022",
        entity: "3iL Rodez",
        title: "Ecole d'ingénieur en informatique",
        tags: ["Java", "SQL", "Algo"],
        details: "Première année à <b>3iL Rodez</b>, en alternance à Sopra Steria."
    },
    {
        year: "2019-2021",
        entity: "Lycée Pierre Paul Riquet",
        title: "BTS SNIR",
        tags: ["C", "C++", "IOT", "Réseaux", "Cisco"],
        details: `<b>BTS SNIR</b> : Brevet de Technicien Supérieur en Système Numériques option Informatique & Réseau.`
    }
];

const experiences = [
    {
        year: "2024 - 2025",
        entity: "Dawan",
        title: "Concepteur Développeur d'Applications Fullstack",
        tags: ["React", "Node.js", "Tailwind", "Java"],
        details: "Alternance d'un an chez <b>Dawan Montpellier</b>."
    },
    {
        year: "2023",
        entity: "Lundi Matin",
        title: "Proxy Product Owner",
        tags: ["Agile", "Scrum", "Backlog", "Tests"],
        details: "Alternance chez <b>Lundi Matin</b>, une ESN à la croissance importante."
    },
    {
        year: "2022 - 2023",
        entity: "FeelU",
        title: "Business Developper",
        tags: ["CRM", "Cold call", "Suivi client", "Prospection"],
        details: "Alternance chez <b>FeelU</b>, une petite startup spécialisée dans la réalité virtuelle."
    },
    {
        year: "2022",
        entity: "General Electric",
        title: "Technicien Infrastructures Réseaux",
        tags: ["Infrastructure", "Support IT", "JIRA"],
        details: "Mission d'intérim effectuée chez <b>General Electric</b>."
    },
    {
        year: "2021 - 2022",
        entity: "Sopra Steria",
        title: "Ingénieur d'études et développement .NET",
        tags: [".NET", "C#", "SQL", "JIRA", "Scrum"],
        details: "Alternance chez <b>Sopra Steria</b> sur un logiciel d'assurance."
    },
    {
        year: "2020 - 2021",
        entity: "Ateliers de la Haute Garonne",
        title: "Technicien Infrastructures Réseaux",
        tags: ["Windows Server", "Active Directory", "Support IT"],
        details: "Alternance d'un an chez les <b>Ateliers de la Haute Garonne</b>."
    }
];

const Parcours = () => {
    const [activeTab, setActiveTab] = useState("parcours");
    const formationsData = activeTab === "parcours" ? experiences : parcours;
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
                            Expériences Pro
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg ${
                                activeTab === "experiences"
                                    ? "bg-blue-600 text-white shadow-blue-500/20"
                                    : "bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/20"
                            }`}
                            onClick={() => setActiveTab("experiences")}
                        >
                            Formations
                        </button>

                        <a
                            href={CV}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400/50 dark:bg-gray-500/50 transition-all duration-500"
                            style={{ top: lineStyle.top, height: lineStyle.height }}
                        ></div>

                        {formationsData.map((formation, index) => (
                            <div key={index} className={`group relative flex items-start py-0.5 mb-1 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

                                <div className="timeline-point absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 z-10 mt-4 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>

                                <div className={`flex flex-col w-[45%] ${index % 2 === 0 ? "mr-6 md:mr-10 items-end" : "ml-6 md:ml-10 items-start"}`}>
                                    <div
                                        className={`cursor-pointer relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-md text-gray-900 dark:text-white p-3 md:p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/50 dark:border-white/10 hover:border-blue-400/50 w-full
                                                    ${index % 2 === 0 ? "text-right" : "text-left"}`}
                                        onClick={() => {
                                            setSelectedFormation(formation);
                                            setHasInteracted(true);
                                        }}
                                    >
                                        {!hasInteracted && index === 0 && (
                                            <ClickIndicator className={`absolute -top-2 ${index % 2 === 0 ? '-right-2' : '-left-2'} z-20`} />
                                        )}

                                        <div className={`flex flex-col ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                                            <h2 className={`font-bold text-sm md:text-base text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors flex flex-wrap items-center gap-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                                <span>{formation.year}</span>
                                                {formation.entity && (
                                                    <>
                                                        <span className="text-gray-400 dark:text-gray-500">•</span>
                                                        <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium">{formation.entity}</span>
                                                    </>
                                                )}
                                            </h2>
                                        </div>

                                        <p className="text-xs md:text-sm font-semibold tracking-tight mt-0.5">
                                            {formation.title}
                                        </p>
                                    </div>

                                    <div className={`flex flex-wrap gap-1.5 mt-1.5 px-0.5 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                        {formation.tags?.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-0.5 text-[11px] md:text-xs font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-100 rounded-full border border-blue-300 dark:border-blue-700 shadow-sm"
                                            >
            {tag}
        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedFormation && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedFormation(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto text-white relative shadow-2xl custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" onClick={() => setSelectedFormation(null)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold rounded-full shadow-lg shadow-blue-500/20">
                                    {selectedFormation.year}
                                </span>
                                {selectedFormation.entity && (
                                    <span className="text-slate-300 font-semibold text-sm md:text-base border-l border-slate-600 pl-3">
                                        {selectedFormation.entity}
                                    </span>
                                )}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-slate-700 pb-4">
                                {selectedFormation.title}
                            </h2>

                            <p
                                className="text-slate-300 leading-relaxed text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: selectedFormation.details }}
                            />
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Parcours;