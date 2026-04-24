import React, { useState, useEffect } from "react";

const messageSuggestions = [
    "Une opportunité d'emploi...",
    "Une remarque sur le site...",
    "Une idée de projet...",
    "Un simple bonjour..."
];

const Contact = () => {
    const [status, setStatus] = useState("idle");

    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [typedPlaceholder, setTypedPlaceholder] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = messageSuggestions[suggestionIndex];

        if (!isDeleting && typedPlaceholder === currentFullText) {
            const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(pauseTimer);
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setTypedPlaceholder(currentFullText.substring(0, typedPlaceholder.length + 1));
            } else {
                const nextText = currentFullText.substring(0, typedPlaceholder.length - 1);
                setTypedPlaceholder(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setSuggestionIndex((prev) => (prev + 1) % messageSuggestions.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timer);
    }, [typedPlaceholder, isDeleting, suggestionIndex]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        const res = await fetch("https://formspree.io/f/xanjrqep", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-[100dvh] pt-[12vh] pb-[5vh] flex flex-col items-center justify-start relative overflow-hidden">
            <div className="z-20 w-full max-w-md md:max-w-2xl px-4 text-center">
                <h2 className="section-title">Me Contacter</h2>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 md:p-10 rounded-2xl shadow-2xl w-full space-y-5 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10"
                >
                    <div className="space-y-1 text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="votre@email.com"
                            className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-1 text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Message</label>
                        <textarea
                            name="message"
                            required
                            placeholder={typedPlaceholder}
                            rows="5"
                            className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600 dark:text-green-400 text-center font-medium animate-bounce">Message envoyé avec succès !</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 text-center text-sm">Échec de l'envoi. Contactez-moi à : carrascosarnaud@gmail.com</p>
                    )}
                </form>
            </div>

            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                <svg className="relative block w-full h-[100px] md:h-[150px]" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax-waves">
                        <use href="#wave-path" x="48" y="0" className="fill-blue-400/40 dark:fill-blue-900/20" />
                        <use href="#wave-path" x="48" y="3" className="fill-blue-500/50 dark:fill-blue-800/30" />
                        <use href="#wave-path" x="48" y="5" className="fill-blue-600/30 dark:fill-[#020617]" />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Contact;