import React from 'react';
import Image from 'next/image';
import photo from '../public/johan.jpg'; // Ajusta la ruta según la estructura de tu proyecto

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-24 bg-white text-gray-900 font-poppins">
      <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-light text-black">Johan Riascos</h1>
        <h2 className="text-xl lg:text-3xl font-semibold my-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900">
          Desarrollador de Software
        </h2>
        <p className="text-base lg:text-lg font-normal leading-7 text-gray-700">
          Desarrollador Full Stack con una habilidad innata para crear aplicaciones web robustas y escalables. Mi enfoque autodidacta, complementado por el 50% de mi carrera en análisis y desarrollo de software, así como mi experiencia práctica, me ha permitido perfeccionar mis habilidades en tecnologías front-end como React, así como en tecnologías back-end como Node.js, MySQL, PostgreSQL y MongoDB. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.
        </p>
      </div>
      <div className="max-w-xs lg:max-w-md">
        <Image src={photo} alt="Johan Riascos" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default AboutMe;
