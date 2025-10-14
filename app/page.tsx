"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("homeScrollPosition");
    if (savedPosition) {
      // Use setTimeout instead of requestAnimationFrame for more reliable restoration
      setTimeout(() => {
        window.scrollTo(0, Number.parseInt(savedPosition));
        sessionStorage.removeItem("homeScrollPosition");
      }, 50);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
