"use client";

import React from "react";
import { FaCopy } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import MagicBadge from "./ui/MagicBadge";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import imgJohan from '../public/johan.jpg';
import scrollFoto from '../public/scrollfoto.png';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
//JOHAN
const Hero = () => {
  const phrases = [
    "SOFTWARE",
    "PAGINAS WEB",
    "ECOMMERCE",
    "ANDROID APPS"
  ];

  return (
    <div className="relative pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <div className="flex items-center space-x-4">
            <img src={imgJohan.src} alt="Profile Image" className="rounded-full w-24 h-24" />
            <MagicBadge title="Curriculum" />
          </div>
          <h1 className="text-white text-5xl font-bold mt-4">
            Desarrollo de <FlipWords words={phrases} />
          </h1>
          <p className="text-white mt-4">
            Tecnologo en Desarrollo de Software egresado del SENA.
            <span className="text-yellow-500 font-bold">
              de Cucuta, Colombia.
            </span>  
            Especializado en el desarrollo full stack con React, Next, Node y bases de datos.
          </p>

         
        </div>
      </div>

      {/* ContainerScroll Component */}
      <div className="mt-5" style={{ marginTop: "-380px" }}> {/* Ajuste de margen superior */}
        <ContainerScroll titleComponent={
          <div className="text-center text-white">
            <h2 className="text-xl md:text-2xl opacity-0">Unleash the power of</h2>

    
          </div>
        }>
          <img src={scrollFoto.src} alt="Scroll Animation Image" className="rounded-2xl w-full h-auto" />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Hero;
