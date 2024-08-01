import React from 'react';
import Hero from '@/components/Hero';
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Timeline from "@/components/ui/Timeline"; 
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center text-white items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={[
          { name: '', link: '#home', icon: <FaHome size={30} /> }
        ]} />
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
        <section id="about">
          <Timeline /> 
        </section>
        <section id="footer">
          <Footer /> 
        </section>
      </div>
    </main>
  );
}
