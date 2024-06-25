import React from 'react';
import Image from 'next/image';
import johanImg from '../../public/johan.jpg';

const Timeline = () => {
  return (
    <div className="relative p-20 mt-12 bg-transparent text-white mx-4 md:mx-10 lg:mx-20">
      <div className="text-3xl font-semibold flex items-center space-x-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6h18M3 12h18m-6 6h6"
          />
        </svg>
        <span>Experiencia laboral</span>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

        {/* Primera experiencia */}
        <div className="relative flex items-start mb-12 flex-row-reverse">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black-900 border-2 border-yellow-500 overflow-hidden z-10 relative left-1/2 transform -translate-x-1/2">
            <Image src={johanImg} alt="Johan" className="rounded-full object-cover" width={48} height={48} />
          </div>
          <div className="mr-20 w-1/2 text-right">
            <h3 className="text-lg font-semibold text-yellow-500">
              Creador de Contenido
            </h3>
            <h4 className="text-md text-gray-400">Twitch</h4>
            <p className="text-sm text-gray-500">Actualmente...</p>
            <p className="text-sm text-gray-300 mt-2">
              Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
            </p>
            <a href="#" className="text-yellow-500 hover:underline mt-2 inline-block">
              Saber más &gt;
            </a>
          </div>
        </div>

        {/* Segunda experiencia */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black-900 border-2 border-yellow-500 overflow-hidden z-10 relative left-1/2 transform -translate-x-1/2">
            <Image src={johanImg} alt="Johan" className="rounded-full object-cover" width={48} height={48} />
          </div>
          <div className="ml-20 w-1/2">
            <h3 className="text-lg font-semibold text-yellow-500">
              Principal Frontend Engineer
            </h3>
            <h4 className="text-md text-gray-400">Adevinta Spain</h4>
            <p className="text-sm text-gray-500">Septiembre 2022</p>
            <p className="text-sm text-gray-300 mt-2">
              Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.
            </p>
          </div>
        </div>

        {/* Tercera experiencia */}
        <div className="relative flex items-start mb-12 flex-row-reverse">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black-900 border-2 border-yellow-500 overflow-hidden z-10 relative left-1/2 transform -translate-x-1/2">
            <Image src={johanImg} alt="Johan" className="rounded-full object-cover" width={48} height={48} />
          </div>
          <div className="mr-20 w-1/2 text-right">
            <h3 className="text-lg font-semibold text-yellow-500">
              Backend Developer
            </h3>
            <h4 className="text-md text-gray-400">Tech Company</h4>
            <p className="text-sm text-gray-500">Junio 2021 - Agosto 2022</p>
            <p className="text-sm text-gray-300 mt-2">
              Desarrollo y mantenimiento de servicios backend utilizando Node.js y Express. Implementación de bases de datos y optimización de consultas para mejorar el rendimiento.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
