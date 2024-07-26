"use client"; // Indicamos que este componente debe ser renderizado en el cliente

import React, { useState, useEffect } from "react";
import { Meteors } from "../ui/Meteors";

const Timeline: React.FC = () => {
  const tasks = [
    { title: "Página Web", icon: "globe" },
    { title: "App Mobile", icon: "mobile" },
    { title: "Marketing Digital", icon: "megaphone" },
    { title: "Tienda Virtual", icon: "shopping-cart" },
    { title: "Software Personalizado", icon: "camera" },
    { title: "Creación de Contenido", icon: "camera" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`p-4 flex flex-col items-center ${isMobile ? 'h-auto' : 'h-screen lg:h-auto lg:py-12'}`}>
      <div className="mb-6">
        <h1 className="heading text-2xl md:text-4xl font-bold text-center">
          A small selection of{" "}
          <span className="text-yellow-500">Software</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {tasks.map((task, index) => (
          <div key={index} className="relative w-full max-w-xs m-2" style={{ height: '320px' }}>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black-100 border border-gray-800 px-4 py-8 h-full rounded-2xl flex flex-col justify-end items-start overflow-hidden">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {task.title}
              </h1>

              <div className="mb-4 relative z-50">
                <p className="font-normal text-base text-slate-500">
                  I don&apos;t know what to write so I&apos;ll just paste something cool here. One more sentence because lorem ipsum is just unacceptable. Won&apos;t ChatGPT the shit out of this.
                </p>
              </div>

              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 relative z-50">
                Explore
              </button>

              <div className="absolute inset-0 z-40">
                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
