import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("idle");

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
        <section
            id="contact"
            className="min-h-[100dvh] pt-[10vh] pb-[5vh] flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-t from-[#e2e8f0] to-[#ccfbf1] dark:from-[#020617] dark:to-[#042f2e] transition-colors duration-500"
        >   <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Me Contacter</h1>
            <form
                onSubmit={handleSubmit}
                className="p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-5 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10"
            >
                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Votre email"
                        className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Message</label>
                    <textarea
                        name="message"
                        required
                        placeholder="Votre message"
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
                    <p className="text-red-500 text-center text-sm">Votre mail ne s'est pas envoyé, n'hésitez pas à me contacter directement à cette adresse : carrascosarnaud@gmail.com.</p>
                )}

            </form>
        </section>
    );
};

export default Contact;
