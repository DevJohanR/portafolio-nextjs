"use client"; // Indicamos que este componente debe ser renderizado en el cliente

import React, { useState, useEffect } from "react";
import { Meteors } from "../ui/Meteors";
import { FlipWords } from "../ui/flip-words";

const Timeline: React.FC = () => {
  const tasks = [
    { 
      title: "Página Web", 
      icon: "globe", 
      description: "Muestra tu negocio en línea 24/7, integra chats, encuestas, análisis de tráfico, detalla tus servicios, horarios y convierte visitantes en clientes satisfechos." 
    },
    { 
      title: "App Mobile", 
      icon: "mobile", 
      description: "Lleva tu negocio al siguiente nivel con aplicaciones móviles personalizadas. Optimiza la experiencia del usuario y fortalece la lealtad del cliente." 
    },
    { 
      title: "Marketing Digital", 
      icon: "megaphone", 
      description: "Asegúrate de que tu negocio sea el primero en Google y en redes sociales mediante campañas publicitarias efectivas en Google Ads y Meta Ads." 
    },
    { 
      title: "Tienda Virtual", 
      icon: "shopping-cart", 
      description: "Comercio electrónico seguro: acepta pagos, gestiona inventarios y pedidos, y optimiza tu SEO y estrategias de marketing de manera efectiva." 
    },
    { 
      title: "Software Personalizado", 
      icon: "camera", 
      description: "Administra tu negocio desde cualquier dispositivo; gestiona inventarios, clientes y pedidos, y recibe alertas en tiempo real para mantenerte al tanto." 
    },
    { 
      title: "Creación de Contenido", 
      icon: "camera", 
      description: "Impulsa tu presencia online con catálogos, videos, contenido para redes, blogs, fotos profesionales e infografías que enganchen y expandan tu alcance." 
    },
    // Añade más tareas según lo necesites
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
    <div className={`p-4 flex flex-col items-center lg-plus:pr-20 lg-plus:pl-20 ${isMobile ? 'h-auto' : 'h-screen lg:h-auto lg:py-12'}`}>
      <div className="mb-6">
        <h1 className="heading font-bold text-center p-14">
          Transformando tu negocio{" "} 
          <span className="text-yellow-500">
          con Tecnología
          </span>
        </h1>
       
        <div className="max-w-screen-lg mx-auto p-4 text-center">
          <div className="text-white mt-4 text-lg md:text-xl dark:text-gray-300 space-y-4 leading-relaxed">
          <p>Trabajo para la empresa <a href="https://activosdigitales.com.co"><em>Activos Digitales</em></a>. Combino mis habilidades en <strong>frontend y backend</strong> para integrar microservicios,administrar tokens de acceso o gestionar estados con Redux o Context API. Desarrollo y consumo APIs RESTful, diseño bases de datos utilizando ORMs. Además, aplico patrones de diseño para abstraer la lógica de acceso a datos y mejorar la mantenibilidad del código.</p>

            <p>También, gestiono campañas en Google Ads - Meta Ads, utilizo Figma para el diseño UX/UI. Implemento metodologías ágiles con Scrum y diagramas para levantar requisitos y contextualizar funcionalidades</p>
            <p><strong className="text-yellow-500 dark:text-yellow-200 font-semibold block mt-4">Ya sea que seas un reclutador en busca del mejor talento o un empresario que necesita servicios tecnológicos avanzados,</strong></p>
            <p>puedes estar seguro de que <span className="text-yellow-500 font-bold">cuento con la experiencia</span> y las habilidades necesarias <span className="text-yellow-500 font-bold">para llevar tu proyecto al siguiente nivel.</span></p>
          </div>
          
        </div>
        <div className="flex justify-center text-[20px] text-center whitespace-nowrap p-8">
           <strong> Experiencia:</strong> <span className="ml-2"><FlipWords words={["Empresas +2 años", "Freelance +5 años"]} /></span>
        </div>

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
                  {task.description}
                </p>
              </div>
{/*    <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 relative z-50">
                Explore
              </button> */}
           

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
