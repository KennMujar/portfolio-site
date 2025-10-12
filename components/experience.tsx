"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

const experiences = [
  {
    period: "2020 — Present",
    title: "Senior Software Engineer",
    company: "Tech Company",
    slug: "tech-company",
    description:
      "Lead development of core platform features serving millions of users. Architected and implemented scalable microservices infrastructure. Mentored junior engineers and established best practices for the team.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    period: "2018 — 2020",
    title: "Software Engineer",
    company: "Startup Inc",
    slug: "startup-inc",
    description:
      "Built and maintained multiple client-facing web applications. Collaborated with designers and product managers to deliver high-quality features. Improved application performance by 40% through optimization.",
    technologies: ["JavaScript", "React", "Python", "Django", "MongoDB"],
  },
  {
    period: "2016 — 2018",
    title: "Junior Developer",
    company: "Digital Agency",
    slug: "digital-agency",
    description:
      "Developed responsive websites and web applications for various clients. Worked closely with senior developers to learn best practices and modern development workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  },
]

export function Experience() {
  const handleNavigation = () => {
    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString())
  }

  return (
    <section id="experience" className="py-20 lg:ml-32">
      <div className="mb-12">
        <h2 className="mb-4 flex items-center text-3xl font-bold">
          <span className="mr-4 font-mono text-xl text-primary">02.</span>
          <span className="text-balance">Where I've Worked</span>
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Link key={index} href={`/work/${exp.slug}`} className="block" onClick={handleNavigation}>
            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 active:scale-95 md:hover:-translate-y-1">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-primary">Click to view detailed work →</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
