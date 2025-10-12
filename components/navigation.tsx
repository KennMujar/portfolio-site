"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ This hook is already imported

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  // 1. Get the current pathname
  const pathname = usePathname();

  useEffect(() => {
    // This useEffect handles Intersection Observer logic for the front page.
    // We only need to run this if we are on the front page (pathname === '/').
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Note: The Intersection Observer only works on the front page because
    // the sections with IDs are only present there.
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]); // Add pathname to dependency array to re-run when path changes

  // 2. Conditional Rendering Logic:
  // If the current path is NOT the root '/', return null (render nothing).
  if (pathname !== "/") {
    return null;
  }

  // If the path IS the root '/', render the navigation bar.
  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-32 flex-col items-start justify-center gap-8 px-8 lg:flex">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group relative text-sm font-medium uppercase tracking-wider transition-colors"
        >
          <span
            className={`${
              activeSection === item.href.slice(1)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.name}
          </span>
          <span
            className={`absolute -left-8 top-1/2 h-px w-6 -translate-y-1/2 bg-border transition-all ${
              activeSection === item.href.slice(1)
                ? "w-12 bg-primary"
                : "group-hover:w-8"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
