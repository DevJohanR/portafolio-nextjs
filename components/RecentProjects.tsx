"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [currentLink, setCurrentLink] = useState<string | null>(null);

  return (
    <div className="-mt-36">
      <h1 className="heading p-4">
        Conoce mis <span className="text-yellow-500">Proyectos</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 lg-plus:pr-20 lg-plus:pl-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onMouseEnter={() => setCurrentLink(item.link)}
            onMouseLeave={() => setCurrentLink(null)}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-auto mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D", opacity: 0 }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-full h-full object-cover rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-yellow-500 font-bold"
                  >
                    Ver en Vivo
                  </a>
                  <FaLocationArrow className="ms-3" color="rgb(234 179 8 / 1)" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
