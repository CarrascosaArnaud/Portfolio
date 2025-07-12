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
        <section id="contact" className="flex flex-col items-center justify-center h-screen px-4">
            <h1 className="text-2xl font-bold mb-6 text-white">Me Contacter</h1>

            <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl shadow-2xl w-full max-w-md space-y-4"
            >
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Votre email"
                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Votre message"
                    rows="5"
                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                ></textarea>

                <button
                    type="submit"
                    className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
                >
                    Envoyer
                </button>

                {status === "success" && (
                    <p className="text-green-400">Message envoyé avec succès !</p>
                )}
                {status === "error" && (
                    <p className="text-red-400">Une erreur est survenue, vous pouvez m'envoyer votre mail directement ici : carrascosarnaud@gmail.com.</p>
                )}
            </form>
        </section>
    );
};

export default Contact;
