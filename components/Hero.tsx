"use client";

import React from "react";
import { FaBusinessTime, FaHandHoldingUsd, FaDigitalTachograph } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import MagicBadge from "./ui/MagicBadge";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import imgJohan from '../public/johan.jpg';
import scrollFoto from '../public/heroJohan.webp';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { motion } from "framer-motion";

// Definir las animaciones
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

// JOHAN
const Hero = () => {
  const phrases = [
    "SOFTWARE",
    "PAGINAS WEB",
    "ECOMMERCE",
    "ANDROID APPS"
  ];

  return (
    <motion.div
      className="relative pb-20 pt-36"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4">
            <motion.img
              src={imgJohan.src}
              alt="Profile Image"
              className="rounded-full w-24 h-24"
              variants={itemVariants}
            />
            <motion.div variants={itemVariants}>
              <MagicBadge title="Curriculum" />
            </motion.div>
          </div>
          <motion.h1 className="text-white text-5xl font-bold mt-4" variants={itemVariants}>
            Desarrollo de <FlipWords words={phrases} />
          </motion.h1>
          <motion.p className="text-white mt-4" variants={itemVariants}>
            <span className="text-yellow-500 font-bold">+7 años de experiencia </span>creando soluciones personalizadas a empresas y negocios pequeños. <br /> ¡Hablemos! Contáctame para:
          </motion.p>
          <motion.ul className="mt-6 space-y-4 text-left" variants={itemVariants}>
            <li className="flex items-center">
              <FaBusinessTime className="text-yellow-500 w-6 h-6 mr-2" />
              <span>Descubrir cómo puedo ayudarte a alcanzar tus objetivos de negocio</span>
            </li>
            <li className="flex items-center">
              <FaHandHoldingUsd className="text-yellow-500 w-6 h-6 mr-2" />
              <span>Obtener una consulta gratuita y personalizada</span>
            </li>
            <li className="flex items-center">
              <FaDigitalTachograph className="text-yellow-500 w-6 h-6 mr-2" />
              <span>Empezar a construir la solución digital que necesitas para destacarte en el mercado</span>
            </li>
          </motion.ul>
        </motion.div>
      </div>

      {/* ContainerScroll Component */}
      <motion.div
        className="mt-5"
        style={{ marginTop: "-380px" }}
        variants={itemVariants}
      >
        <ContainerScroll titleComponent={
          <div className="text-center text-white">
            <h2 className="text-xl md:text-2xl opacity-0">Unleash the power of</h2>
          </div>
        }>
          <motion.img
            src={scrollFoto.src}
            alt="Scroll Animation Image"
            className="rounded-2xl w-full h-auto"
            variants={itemVariants}
          />
        </ContainerScroll>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
