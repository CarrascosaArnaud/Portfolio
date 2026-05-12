import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projetsData = [
    {
        id: 1,
        title: "Projet OBOX EHTech",
        category: "Hardware & Software",
        description: "Recherche et développement d'une solution en milieu dégradé",
        media: { type: "image", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhmcjlzNDh3N3Q1Mzh6M2x0M2NyczdhMzU3NDVzNWY5dXZ1YWg2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3RBBSxNGejUl7GfWI/giphy.gif" }
    },
    {
        id: 2,
        title: "DaBot",
        category: "Développement fullstack",
        description: "Création d'un bot discord avec interface administrateur",
        media: { type: "image", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhmcjlzNDh3N3Q1Mzh6M2x0M2NyczdhMzU3NDVzNWY5dXZ1YWg2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3RBBSxNGejUl7GfWI/giphy.gif" }
    },
    {
        id: 3,
        title: "Truc fleur",
        category: "Maquetting",
        description: "Création de maquette pour des sites clients",
        media: { type: "image", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhmcjlzNDh3N3Q1Mzh6M2x0M2NyczdhMzU3NDVzNWY5dXZ1YWg2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3RBBSxNGejUl7GfWI/giphy.gif" }
    },
    {
        id: 4,
        title: "Truc Anouk",
        category: "Maquetting",
        description: "Création de maquette pour des sites clients",
        media: { type: "image", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhmcjlzNDh3N3Q1Mzh6M2x0M2NyczdhMzU3NDVzNWY5dXZ1YWg2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3RBBSxNGejUl7GfWI/giphy.gif" }
    }
];

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState(null);
    const isOdd = projetsData.length % 2 !== 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const renderCardMedia = (media) => {
        const commonClasses = "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out";
        switch (media.type) {
            case "image":
                return <img src={media.url} alt="Aperçu" className={commonClasses} />;
            case "video":
                return (
                    <video className={commonClasses} autoPlay muted loop playsInline>
                        <source src={media.url} type="video/mp4" />
                    </video>
                );
            case "iframe":
                return (
                    <div className={commonClasses}>
                        <iframe className="w-full h-full border-0 pointer-events-none" src={media.url} title="Aperçu" tabIndex="-1"></iframe>
                    </div>
                );
            default:
                return <div className="absolute inset-0 bg-slate-800"></div>;
        }
    };

    return (
        <section id="projets" className="h-[100dvh] pt-[10vh] pb-[5vh] flex flex-col items-center relative overflow-hidden transition-colors duration-500 bg-gradient-to-b from-sky-100 to-blue-50 dark:from-[#081421] dark:to-[#0f172a]">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20 dark:opacity-30"
                    animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    style={{
                        backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                    }}
                />
                <style>{`
                    #projets { --grid-color: rgba(0, 0, 0, 0.2); }
                    .dark #projets { --grid-color: rgba(255, 255, 255, 0.15); }
                `}</style>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center px-6 md:px-8">
                <h2 className="section-title">Projets</h2>

                <div className="w-full flex-1 overflow-y-auto custom-scrollbar pt-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 w-full max-w-none mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {projetsData.map((project, index) => {
                            const isLastAndOdd = isOdd && index === projetsData.length - 1;

                            return (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    onClick={() => setSelectedProject(project)}
                                    className={`group cursor-pointer relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/5 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 flex flex-col min-h-[250px] md:min-h-[350px] bg-gray-200 dark:bg-slate-800 grayscale-[75%] hover:grayscale-0 ${
                                        isLastAndOdd ? "md:col-span-2" : "col-span-1"
                                    }`}
                                >
                                    {renderCardMedia(project.media)}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10"></div>
                                    <div className="relative z-20 p-8 flex flex-col justify-end h-full mt-auto">
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em] mb-3">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 30 }}
                            className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-6 right-6 text-gray-500 hover:text-black dark:hover:text-white" onClick={() => setSelectedProject(null)}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold dark:text-white mb-4">{selectedProject.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">{selectedProject.description}</p>
                            </div>
                            <div className="w-full bg-black/10 dark:bg-black/40 rounded-2xl overflow-hidden">
                                {selectedProject.media.type === "image" && <img src={selectedProject.media.url} alt="Projet" className="w-full h-auto" />}
                                {selectedProject.media.type === "video" && (
                                    <video controls className="w-full h-auto"><source src={selectedProject.media.url} type="video/mp4" /></video>
                                )}
                                {selectedProject.media.type === "iframe" && (
                                    <div className="relative pt-[56.25%]"><iframe className="absolute inset-0 w-full h-full" src={selectedProject.media.url} allowFullScreen title="Projet"></iframe></div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}