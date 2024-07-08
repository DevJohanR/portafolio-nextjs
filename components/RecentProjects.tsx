"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Filtra mis proyectos{" "}
        <span className="text-purple">por tecnologías</span>
      </h1>
      <div className="flex flex-wrap justify-center p-4 mt-10 gap-4">
        <style jsx>{`
          @media (min-width: 640px) {
            .gap-adjustment {
              margin-bottom: 100px; /* separacion vertical*/
              margin-left: 20px; /* separacion horizontal*/
              margin-right: 20px; /* separacion horizontal*/
            }
          }
        `}</style>
        {projects.map((item) => (
          <div
            className="flex flex-col items-center justify-center h-[30rem] sm:h-[25rem] sm:w-96 w-[75vw] lg:w-[35vw] mb-[65px] group perspective-800 gap-adjustment"
            key={item.id}
          >
            <PinContainer
              title="/sitioweb.aqui"
              href="#"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[75vw] lg:w-[35vw] overflow-hidden h-[55vh] sm:h-[20vh] lg:h-[45vh] transition-transform duration-500 group-hover:rotate-y-6 mb-4">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl transform transition-transform duration-500 group-hover:rotate-y-6"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-full h-full object-cover lg:h-[45vh]"
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

              <div className="flex items-center justify-between mt-4 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
