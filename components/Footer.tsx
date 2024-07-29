'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import MagicButton from "@/components/ui/MagicButton";

const socialMedia = [
  { id: 1, name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com" },
  { id: 2, name: "GitHub", icon: <FaGithub />, link: "https://github.com" },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center px-4">
        <h1 className="heading lg:max-w-[45vw] text-center text-2xl md:text-3xl lg:text-4xl">
          ¿Listo para llevar tu <span className="text-purple">presencia digital</span> al siguiente nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contáctame hoy y discutamos cómo puedo ayudarte a alcanzar tus objetivos.
        </p>
        <a href="https://wa.link/bl2g07" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Pongámonos en contacto"
            icon={<FaWhatsapp />}
            position="right"
            otherClasses="text-center py-3 px-6 rounded-lg text-white flex items-center justify-center whitespace-nowrap"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2024 Johan Riascos
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
