"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

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
              activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.name}
          </span>
          <span
            className={`absolute -left-8 top-1/2 h-px w-6 -translate-y-1/2 bg-border transition-all ${
              activeSection === item.href.slice(1) ? "w-12 bg-primary" : "group-hover:w-8"
            }`}
          />
        </a>
      ))}
    </nav>
  )
}
