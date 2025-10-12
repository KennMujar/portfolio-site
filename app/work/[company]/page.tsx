"use client";

import { Navigation } from "@/components/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const companyWork = {
  "bu-health-sync-plus": {
    name: "BU HealthSync+",
    period: "2020 — Present",
    role: "Senior Software Engineer",
    description:
      "Leading development of core platform features serving millions of users. Architecting scalable microservices infrastructure and mentoring engineering teams.",
    projects: [
      {
        title: "Distributed Caching System",
        description:
          "Built a high-performance distributed caching layer that reduced API latency by 40% and improved user experience for 10M+ users. Implemented custom load balancing algorithms and failover mechanisms to ensure 99.99% uptime.",
        longDescription:
          "The system handles over 1 billion requests per day, processing data across multiple geographic regions. I architected the entire infrastructure from scratch, choosing Redis as the core technology and implementing custom sharding logic to distribute load efficiently. The project involved deep performance optimization, including connection pooling, pipeline batching, and intelligent cache invalidation strategies.",
        technologies: ["Go", "Redis", "Kubernetes", "gRPC", "Prometheus"],
        impact: [
          "40% latency reduction",
          "10M+ users impacted",
          "99.99% uptime",
          "1B+ daily requests",
        ],
        responsibilities: [
          "Architected distributed caching infrastructure",
          "Implemented custom load balancing algorithms",
          "Led team of 4 engineers",
          "Established monitoring and alerting systems",
        ],
        screenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
      },
      {
        title: "Real-Time Analytics Dashboard",
        description:
          "Developed analytics platform processing millions of events daily. Led frontend architecture decisions and mentored 3 junior engineers. Reduced dashboard load time by 60% through optimization.",
        longDescription:
          "Created a comprehensive analytics platform that provides real-time insights into user behavior and system performance. The dashboard uses WebSocket connections for live data streaming and implements virtual scrolling for handling large datasets. I led the frontend architecture, choosing React with TypeScript and implementing a custom state management solution optimized for real-time updates.",
        technologies: [
          "React",
          "TypeScript",
          "D3.js",
          "WebSocket",
          "AWS",
          "DynamoDB",
        ],
        impact: [
          "60% faster load times",
          "5M+ events processed daily",
          "Real-time data updates",
          "3 engineers mentored",
        ],
        responsibilities: [
          "Led frontend architecture design",
          "Implemented real-time data streaming",
          "Optimized rendering performance",
          "Mentored junior engineers",
        ],
        screenshots: [
          "/modern-analytics-dashboard.png",
          "/real-time-data-visualization-with-live-updates.jpg",
          "/analytics-dashboard-mobile-responsive-view.jpg",
        ],
      },
      {
        title: "Authentication Microservice",
        description:
          "Redesigned authentication flow reducing login failures by 60%. Integrated multiple OAuth providers and implemented security best practices including rate limiting and fraud detection.",
        longDescription:
          "Completely rebuilt the authentication system to support modern security standards and multiple authentication methods. The service handles millions of authentication requests daily with sub-100ms response times. Implemented comprehensive security measures including rate limiting, fraud detection using machine learning, and multi-factor authentication support.",
        technologies: ["Node.js", "PostgreSQL", "JWT", "OAuth 2.0", "Redis"],
        impact: [
          "60% fewer login failures",
          "5 OAuth providers integrated",
          "Zero security incidents",
          "2FA support",
        ],
        responsibilities: [
          "Designed secure authentication architecture",
          "Integrated OAuth providers (Google, GitHub, etc.)",
          "Implemented rate limiting and fraud detection",
          "Conducted security audits",
        ],
        screenshots: [
          "/modern-login-interface-with-oauth-buttons.jpg",
          "/two-factor-authentication-setup-screen.jpg",
          "/authentication-security-dashboard.jpg",
        ],
      },
    ],
  },
  fit2gether: {
    name: "Startup Inc",
    period: "2018 — 2020",
    role: "Software Engineer",
    description:
      "Built and maintained multiple client-facing web applications. Collaborated with designers and product managers to deliver high-quality features.",
    projects: [
      {
        title: "Customer Portal Redesign",
        description:
          "Led complete redesign of customer-facing portal, improving user satisfaction scores by 45%. Implemented modern React architecture with TypeScript and improved page load times by 50%.",
        longDescription:
          "Created a comprehensive analytics platform that provides real-time insights into user behavior and system performance. The dashboard uses WebSocket connections for live data streaming and implements virtual scrolling for handling large datasets. I led the frontend architecture, choosing React with TypeScript and implementing a custom state management solution optimized for real-time updates.",
        technologies: [
          "React",
          "TypeScript",
          "Redux",
          "Material-UI",
          "Node.js",
        ],
        impact: [
          "45% higher satisfaction",
          "50% faster load times",
          "30% increase in engagement",
        ],
        responsibilities: [
          "Led frontend redesign initiative",
          "Collaborated with UX designers",
          "Implemented responsive design",
          "Conducted user testing sessions",
        ],
        screenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
      },
      {
        title: "API Gateway Service",
        description:
          "Built centralized API gateway handling authentication, rate limiting, and request routing for all microservices. Reduced API response times by 35% and improved system reliability.",
        technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
        impact: [
          "35% faster API responses",
          "Centralized authentication",
          "Improved monitoring",
        ],
        responsibilities: [
          "Designed API gateway architecture",
          "Implemented rate limiting",
          "Set up monitoring and logging",
          "Documented API specifications",
        ],
        screenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
      },
    ],
  },
  gdsc: {
    name: "Digital Agency",
    period: "2016 — 2018",
    role: "Junior Developer",
    description:
      "Developed responsive websites and web applications for various clients. Worked closely with senior developers to learn best practices.",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built custom e-commerce solution for retail client with product catalog, shopping cart, and payment integration. Handled thousands of transactions monthly.",
        longDescription:
          "The system handles over 1 billion requests per day, processing data across multiple geographic regions. I architected the entire infrastructure from scratch, choosing Redis as the core technology and implementing custom sharding logic to distribute load efficiently. The project involved deep performance optimization, including connection pooling, pipeline batching, and intelligent cache invalidation strategies.",
        technologies: ["JavaScript", "jQuery", "PHP", "MySQL", "Stripe"],
        impact: [
          "1000+ monthly transactions",
          "Mobile-responsive design",
          "Payment integration",
        ],
        responsibilities: [
          "Developed frontend features",
          "Integrated payment gateway",
          "Implemented responsive design",
          "Performed cross-browser testing",
        ],
        screenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
      },
      {
        title: "Content Management System",
        description:
          "Created custom CMS for content-heavy websites with drag-and-drop page builder and media management. Used by 5+ clients.",
        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        impact: [
          "5+ clients using system",
          "Drag-and-drop builder",
          "Media management",
        ],
        responsibilities: [
          "Built CMS backend",
          "Implemented page builder",
          "Created admin interface",
          "Provided client training",
        ],
        screenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
      },
    ],
  },
};

export default function CompanyWorkPage({
  params,
}: {
  params: { company: string };
}) {
  const company = companyWork[params.company as keyof typeof companyWork];
  const [activeScreenshot, setActiveScreenshot] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!company) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href="/#experience"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem(
                "homeScrollPosition",
                sessionStorage.getItem("homeScrollPosition") || "0"
              );
              window.location.href = "/#experience";
            }}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary active:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" />
            Back to Experience
          </Link>

          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
              {company.name}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-4 text-lg">
              <span className="font-semibold text-primary">{company.role}</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-mono text-muted-foreground">
                {company.period}
              </span>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground">
              {company.description}
            </p>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="space-y-32">
          {company.projects.map((project, index) => (
            <article key={project.title} className="group">
              {/* Project Header */}
              <div className="mb-8">
                <h2 className="mb-4 text-4xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Screenshot Gallery */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-12">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg border border-border/50 bg-muted/30">
                    <Image
                      src={
                        project.screenshots[
                          activeScreenshot[project.title] || 0
                        ]
                      }
                      alt={`${project.title} screenshot ${
                        (activeScreenshot[project.title] || 0) + 1
                      }`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Screenshot Thumbnails */}
                  {project.screenshots.length > 1 && (
                    <div className="mt-4 flex gap-4">
                      {project.screenshots.map((screenshot, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setActiveScreenshot((prev) => ({
                              ...prev,
                              [project.title]: idx,
                            }))
                          }
                          className={`relative aspect-video w-32 overflow-hidden rounded border-2 transition-all ${
                            (activeScreenshot[project.title] || 0) === idx
                              ? "border-primary"
                              : "border-border/50 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project Details Grid */}
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                      Overview
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/50 bg-card/50 px-4 py-1.5 font-mono text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                      Key Impact
                    </h3>
                    <ul className="space-y-3">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                      Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {project.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider between projects */}
              {index < company.projects.length - 1 && (
                <div className="mt-32 border-t border-border/40" />
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
