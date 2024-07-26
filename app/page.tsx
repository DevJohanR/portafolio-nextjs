import React from 'react';
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Timeline from "@/components/ui/Timeline"; // Importamos el componente Timeline

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center text-white items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/> }
        ]} />
        <Hero />
       {/*   <Timeline />*/}
        <RecentProjects />
      </div>
    </main>
  );
}
