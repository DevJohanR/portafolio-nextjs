import React from 'react';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa"; 

const Timeline = () => {
  return (
    <div className="relative px-4 md:px-10 lg:px-20 mt-12 bg-transparent text-white">
      <div className="text-3xl font-semibold flex items-center justify-center mb-8 text-center flex-col">
        <span>Experiencia</span>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

        {/* Experience Item */}
        {[
          {
            title: 'Desarrollador Full Stack',
            company: 'Activos Digitales SAS',
            date: '23/11/2023 - Actualmente',
            description:
              'Creación y consumo de APIs RESTful. Desarrollo de aplicaciones web con React, Node.js, Laravel y MySQL, despliegue de servidores, administración de VPS a través de ubuntu y uso de WordPress. Integración de Google Analytics y el píxel de Facebook mediante Google Tag Manager para el desarrollo de campañas con Google Ads y Facebook Ads...',
            linkText: 'Saber más >',
            linkHref: '#',
            icon: <HiOutlineOfficeBuilding className="text-yellow-500 w-8 h-8 mb-2" />
          },
          {
            title: 'Desarrollador Freelance',
            date: '06/01/2021 - Actualmente',
            description:
              'Manejo de equipos colaborativos, incluyendo la subcontratación de personal especializado en diseño gráfico y fotografía para proyectos integrales, utilizando tecnologías como WordPress, HTML, CSS y JavaScript.',
            linkText: 'Saber más >',
            linkHref: '#',
            icon: <FaLaptopCode className="text-yellow-500 w-8 h-8 mb-2" />
          },
      
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center w-full max-w-3xl mb-12"
          >
            <div className="relative flex flex-col items-center w-full overflow-hidden rounded-lg p-[1px]">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <div className="relative w-full bg-slate-950 rounded-lg p-6 flex flex-col items-center text-center">
                {item.icon}
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-yellow-500">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-gray-400">{item.company}</h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <div className="w-full mt-4">
                  <p className="text-sm text-gray-300">{item.description}</p>
                  {item.linkText && (
                    <a
                      href={item.linkHref}
                      className="text-yellow-500 hover:underline mt-2 inline-block"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
