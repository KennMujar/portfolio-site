"use client";

import { Card } from "@/components/ui/card";
// import Link from "next/link"; // Removed to fix build error

const experiences = [
  {
    period: "January 2025 — June 2025",
    title: "Junior Software Engineer",
    company: "BU Health Sync+",
    slug: "bu-health-sync-plus",
    description:
      "Worked with a team to develop a telemedicine platform using Laravel, Vue.js, and MySQL for the web and React Native with Expo for mobile. Focused on building seamless, secure, and user-friendly experiences for patients and healthcare providers.",
    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "JavaScript",
      "React Native",
      "Expo",
    ],
  },
  {
    period: "October 2024 — December 2025",
    title: "Mobile App Developer Intern",
    company: "Fit2gether",
    slug: "fit2gether",
    description:
      "Built and maintained multiple client-facing web applications. Collaborated with designers and product managers to deliver high-quality features. Improved application performance by 40% through optimization.",
    technologies: ["Dart", "Figma", "Firebase", "Flutter", "Postman"],
  },
  {
    period: "August 2022 – July 2023",
    title: "Core Team Member—Mobile App Developer",
    company: "Google Developer Student Club",
    slug: "gdsc",
    description:
      "Collaborated with a team to design and develop mobile applications using Flutter. Contributed to creating engaging and functional app prototypes for community projects and events. Worked closely with other developers to share knowledge, improve code quality, and promote best practices in mobile development.",
    technologies: ["Dart", "Flutter", "Git"],
  },
];

// --- Define slugs that should not be clickable ---
// To add more non-clickable slugs, just add them to this array
// e.g., const nonClickableSlugs = ["gdsc", "another-slug"];
const nonClickableSlugs = ["gdsc", "fit2gether"];

export function Experience() {
  const handleNavigation = () => {
    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
  };

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
        {experiences.map((exp, index) => {
          // Check if the current slug is in the non-clickable list
          const isNonClickable = nonClickableSlugs.includes(exp.slug);

          // 1. Define the card content as a reusable variable
          const cardContent = (
            <Card
              className={`border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 md:hover:-translate-y-1 ${
                isNonClickable
                  ? "cursor-default" // Makes it look non-clickable
                  : "active:scale-95" // Apply hover effects only if not in the list
              }`}
            >
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  {exp.period}
                </p>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 2. Conditionally render the "Click to view" text */}
              {!isNonClickable && (
                <p className="mt-4 text-sm text-primary">
                  Click to view detailed work →
                </p>
              )}
            </Card>
          );

          // 3. Conditionally wrap the card in an <a> or a <div>
          return isNonClickable ? (
            <div key={index}>{cardContent}</div>
          ) : (
            <a // Changed from <Link> to <a> to resolve build error
              key={index}
              href={`/work/${exp.slug}`}
              className="block"
              onClick={handleNavigation}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
