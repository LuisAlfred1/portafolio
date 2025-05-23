"use client";
import { useState } from "react";

export default function ContactForm() {
  const [estado, setEstado] = useState("Enviar");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEstado("Enviando...");

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor completa todos los campos requeridos.");
      return;
    }

    // Aquí normalmente enviarías los datos a tu backend
    try {
      // Simular envío con un retardo
      const response = await fetch("https://formspree.io/f/mzzejwbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setEstado("Enviar");
      } else {
        setError(
          "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente."
        );
      }
    } catch (err) {
      setError(
        "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente."
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        {/* Información de contacto */}
        <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white md:w-2/5 p-8">
          <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>
          <p className="mb-8">
            También puedes contactarme directamente usando la siguiente
            información:
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <svg
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>alfredluis177@gmail.com</span>
            </div>
            <div className="flex items-start">
              <svg
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Guatemala</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Redes sociales</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/LuisAlfred1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200 hover:scale-125"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-reyes-5a9a50246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200 hover:scale-125"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/luis_reyesnk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200 hover:scale-125"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="p-8 md:w-3/5">
          {submitted ? (
            <div className="text-center py-12">
              <svg
                className="h-16 w-16 text-green-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600 mt-2">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-[#064e3b] text-white py-2 px-4 rounded-md hover:bg-[#065f46] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíame un mensaje
              </h2>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded mb-6">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#064e3b] text-white py-2 px-4 rounded-md hover:bg-[#065f46] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer"
              >
                {estado}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
