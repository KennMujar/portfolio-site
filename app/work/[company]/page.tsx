"use client";

import { Navigation } from "@/components/navigation";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react"; // Removed ChevronLeft, ChevronRight
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

// ... (Your companyWork data structure remains the same) ...
const companyWork = {
  "bu-health-sync-plus": {
    name: "BU HealthSync+",
    period: "2020 — Present",
    role: "Senior Software Engineer",
    description:
      "BU Health Sync+ is a web and mobile app designed to easily manage medical records, book clinic appointments, and access health-related updates — all in one platform.",
    projects: [
      {
        title: "BU HealthSync+ Website",
        platform: "web",
        description:
          "A web application for managing telemedicine and healthcare-related services. This project is built using Laravel, Vue.js, and MySQL, providing a seamless experience for healthcare providers and patients.",
        longDescription:
          "The BU HealthSync+ Website serves as the administrative and management platform for the BU HealthSync+ ecosystem. It is designed to help university medical staff and administrators efficiently manage student health records, appointment schedules, and medical reports in real time. Through an intuitive web interface, authorized personnel can view, update, and monitor student medical data, track clinic activities, and generate analytics for health trends within the university. The platform also supports secure authentication, role-based access control, and integration with the BU HealthSync+ mobile application, ensuring seamless communication between students and the campus health office.",
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
        desktopScreenshots: ["/BUWeb1.png", "/BUWeb2.png", "/BUWeb3.png"],
        mobileScreenshots: [],
      },
      {
        title: "BU HealthSync+ Mobile App",
        platform: "mobile",
        description:
          "A comprehensive mobile healthcare application built with React Native and Expo, designed to provide seamless healthcare services for patients and healthcare providers.",
        longDescription:
          "The BU HealthSync+ Mobile App serves as a companion platform to the BU HealthSync+ web system, offering students, faculty, and healthcare providers a seamless and accessible way to manage telemedicine and health-related services directly from their smartphones. Designed with a user-friendly and modern interface, the app allows users to easily book medical appointments, access health records, communicate with university healthcare staff, and receive real-time updates or notifications. It enhances the overall healthcare experience by bridging the gap between digital convenience and personal wellness.",
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
        mobileScreenshots: [
          "/BUApp1.png",
          "/BUApp2.png",
          "/BUApp3.png",
          "/BUApp4.png",
        ],
        desktopScreenshots: [],
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
        desktopScreenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
        mobileScreenshots: [],
        platform: "web",
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
        platform: "web",
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
        desktopScreenshots: [
          "/distributed-caching-system-dashboard-with-performa.jpg",
          "/redis-cluster-monitoring-interface-with-graphs.jpg",
          "/load-balancing-visualization-dashboard.jpg",
        ],
        mobileScreenshots: [],
      },
    ],
  },
};

type Project =
  (typeof companyWork)["bu-health-sync-plus"]["projects"][number] & {
    platform?: "web" | "mobile" | "both";
    mobileScreenshots: string[];
    desktopScreenshots: string[];
  };

export default function CompanyWorkPage({
  params,
}: {
  params: { company: string };
}) {
  const company = companyWork[params.company as keyof typeof companyWork];
  const [activeDesktopScreenshot, setActiveDesktopScreenshot] = useState<{
    [key: string]: number;
  }>({});
  const [activeMobileScreenshot, setActiveMobileScreenshot] = useState<{
    [key: string]: number;
  }>({});
  // NEW STATE: Used to store the current drag/swipe distance for animation
  const [swipeTranslateX, setSwipeTranslateX] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!company) {
    notFound();
  }

  // --- SWIPE LOGIC FUNCTIONS ---
  const goToNextMobileScreenshot = useCallback(
    (projectTitle: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => ({
        ...prev,
        [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalScreenshots,
      }));
      setSwipeTranslateX((prev) => ({
        // Reset animation position
        ...prev,
        [projectTitle]: 0,
      }));
    },
    []
  );

  const goToPrevMobileScreenshot = useCallback(
    (projectTitle: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => ({
        ...prev,
        [projectTitle]:
          ((prev[projectTitle] || 0) - 1 + totalScreenshots) % totalScreenshots,
      }));
      setSwipeTranslateX((prev) => ({
        // Reset animation position
        ...prev,
        [projectTitle]: 0,
      }));
    },
    []
  );

  // --- HANDLERS FOR SWIPE ---
  const createSwipeHandlers = (project: Project) => {
    const mobileScreenshots = project.mobileScreenshots;
    if (!mobileScreenshots || mobileScreenshots.length <= 1) {
      return {};
    }
    const total = mobileScreenshots.length;
    return useSwipeable({
      // Handles the navigation logic when a swipe is completed
      onSwipedLeft: () => goToNextMobileScreenshot(project.title, total),
      onSwipedRight: () => goToPrevMobileScreenshot(project.title, total),

      // Handles the animation logic WHILE the user is swiping (holding)
      onSwiping: ({ deltaX }) => {
        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: deltaX,
        }));
      },

      // Resets the animation position if the swipe didn't qualify as a full swipe
      onTouchEndOrOnMouseUp: () => {
        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: 0,
        }));
      },

      preventScrollOnSwipe: true,
      trackMouse: true,
    });
  };

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

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="space-y-24">
          {company.projects.map((p, index) => {
            const project = p as Project;
            const mobileSwipeHandlers = createSwipeHandlers(project);
            const hasMultipleMobileScreenshots =
              project.mobileScreenshots.length > 1;
            const currentTranslateX = swipeTranslateX[project.title] || 0;

            // Determine the next and previous image sources for the "peeking" effect
            const currentIdx = activeMobileScreenshot[project.title] || 0;
            const totalScreenshots = project.mobileScreenshots.length;
            const prevIdx =
              (currentIdx - 1 + totalScreenshots) % totalScreenshots;
            const nextIdx = (currentIdx + 1) % totalScreenshots;

            return (
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

                {/* Screenshots Display */}
                <div className="mb-12">
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Desktop View (No changes here) */}
                    {project.desktopScreenshots.length > 0 &&
                      (project.platform === "web" ||
                        project.platform === "both") && (
                        <div
                          className={
                            project.platform === "both"
                              ? "lg:col-span-8"
                              : "lg:col-span-12"
                          }
                        >
                          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Monitor className="h-4 w-4" />
                            Desktop Version
                          </div>

                          {/* Browser Mockup */}
                          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
                              <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                              </div>
                              <div className="ml-4 flex-1 rounded bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                                {project.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}
                                .app
                              </div>
                            </div>
                            {/* Screenshot */}
                            <div className="relative aspect-[16/10] bg-muted/20">
                              <Image
                                src={
                                  project.desktopScreenshots[
                                    activeDesktopScreenshot[project.title] || 0
                                  ]
                                }
                                alt={`${project.title} desktop screenshot`}
                                fill
                                className="object-contain select-none"
                                draggable="false"
                              />
                            </div>
                          </div>
                          {/* Desktop Thumbnails */}
                          {project.desktopScreenshots.length > 1 && (
                            <div className="mt-4 flex gap-3">
                              {project.desktopScreenshots.map(
                                (screenshot: string, idx: number) => (
                                  <button
                                    key={idx}
                                    onClick={() =>
                                      setActiveDesktopScreenshot((prev) => ({
                                        ...prev,
                                        [project.title]: idx,
                                      }))
                                    }
                                    className={`relative aspect-video w-24 overflow-hidden rounded border-2 transition-all ${
                                      (activeDesktopScreenshot[project.title] ||
                                        0) === idx
                                        ? "border-primary"
                                        : "border-border/50 opacity-60 hover:opacity-100 active:opacity-100"
                                    }`}
                                  >
                                    <Image
                                      src={screenshot || "/placeholder.svg"}
                                      alt={`Desktop thumbnail ${idx + 1}`}
                                      fill
                                      className="object-cover select-none"
                                      draggable="false"
                                    />
                                  </button>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )}

                    {/* Mobile View - FLOATING IMAGE WITH SWIPE ANIMATION */}
                    {project.mobileScreenshots.length > 0 &&
                      (project.platform === "mobile" ||
                        project.platform === "both") && (
                        <div
                          className={
                            project.platform === "both"
                              ? "lg:col-span-4"
                              : "lg:col-span-12"
                          }
                        >
                          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Smartphone className="h-4 w-4" />
                            Mobile Version
                          </div>

                          {/* 1. Image Size Adjusted: max-w reduced. */}
                          <div
                            className="relative mx-auto w-full max-w-[200px] lg:max-w-sm"
                            {...mobileSwipeHandlers}
                          >
                            <div className="relative aspect-[9/19.5] overflow-hidden rounded-lg">
                              {/* Container for the active image and the peeking images */}
                              <div
                                className="h-full w-full relative transition-transform duration-300"
                                style={{
                                  // 3. Apply the dynamic translate to the inner container for swipe-and-hold effect
                                  transform: `translateX(${currentTranslateX}px)`,
                                }}
                              >
                                {/* Current Image */}
                                <Image
                                  src={project.mobileScreenshots[currentIdx]}
                                  alt={`${project.title} mobile screenshot`}
                                  fill
                                  className="object-cover select-none"
                                  draggable="false"
                                />

                                {/* Previous Image (Peeks when swiping right) */}
                                {hasMultipleMobileScreenshots && (
                                  <Image
                                    key={`prev-${project.title}`}
                                    src={project.mobileScreenshots[prevIdx]}
                                    alt={`${project.title} previous screenshot`}
                                    fill
                                    className="object-cover select-none absolute top-0 left-0"
                                    style={{
                                      // Position the previous image off-screen to the left
                                      transform: "translateX(-100%)",
                                      opacity: currentTranslateX > 0 ? 1 : 0, // Show when swiping right
                                      transition: "opacity 300ms",
                                    }}
                                    draggable="false"
                                  />
                                )}

                                {/* Next Image (Peeks when swiping left) */}
                                {hasMultipleMobileScreenshots && (
                                  <Image
                                    key={`next-${project.title}`}
                                    src={project.mobileScreenshots[nextIdx]}
                                    alt={`${project.title} next screenshot`}
                                    fill
                                    className="object-cover select-none absolute top-0 left-0"
                                    style={{
                                      // Position the next image off-screen to the right
                                      transform: "translateX(100%)",
                                      opacity: currentTranslateX < 0 ? 1 : 0, // Show when swiping left
                                      transition: "opacity 300ms",
                                    }}
                                    draggable="false"
                                  />
                                )}
                              </div>
                            </div>

                            {/* Mobile Thumbnails (Remains the same) */}
                            {hasMultipleMobileScreenshots && (
                              <div className="mt-4 flex justify-center gap-3">
                                {project.mobileScreenshots.map(
                                  (screenshot: string, idx: number) => (
                                    <button
                                      key={idx}
                                      onClick={() =>
                                        setActiveMobileScreenshot((prev) => ({
                                          ...prev,
                                          [project.title]: idx,
                                        }))
                                      }
                                      className={`relative aspect-[9/19.5] w-12 overflow-hidden rounded-lg border-2 transition-all ${
                                        (activeMobileScreenshot[
                                          project.title
                                        ] || 0) === idx
                                          ? "border-primary"
                                          : "border-border/50 opacity-60 hover:opacity-100 active:opacity-100"
                                      }`}
                                    >
                                      <Image
                                        src={screenshot || "/placeholder.svg"}
                                        alt={`Mobile thumbnail ${idx + 1}`}
                                        fill
                                        className="object-cover select-none"
                                        draggable="false"
                                      />
                                    </button>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                </div>

                {/* Project Details Grid (No changes here) */}
                <div className="grid gap-12 lg:grid-cols-2">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                        Overview
                      </h3>
                      <p className="leading-relaxed text-muted-foreground whitespace-pre-line">
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
                            <span className="text-muted-foreground">
                              {item}
                            </span>
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
                            <span className="text-muted-foreground">
                              {item}
                            </span>
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
            );
          })}
        </div>
      </main>
    </div>
  );
}
