import React from "react";
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

  return (
    <div className="h-screen bg-gray-900 p-4 flex flex-wrap justify-center">
      {tasks.map((task, index) => (
        <div key={index} className="relative w-full max-w-xs m-2">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Explore
            </button>

            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
