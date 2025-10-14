"use client";

import { Navigation } from "@/components/navigation";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// FIX 1: Import useParams along with notFound
import { notFound, useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

// --- START: Data Structure (Kept the same) ---
const companyWork = {
  "bu-health-sync-plus": {
    name: "BU HealthSync+",
    period: "January 2025-June 2025",
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
          "The BU HealthSync+ Website serves as the administrative and management platform for the BU HealthSync+ ecosystem. It is designed to help university medical staff and administrators efficiently manage student health records, appointment schedules, and medical reports in real time. \n\n Through an intuitive web interface, authorized personnel can view, update, and monitor student medical data, track clinic activities, and generate analytics for health trends within the university. The platform also supports secure authentication, role-based access control, and integration with the BU HealthSync+ mobile application, ensuring seamless communication between students and the campus health office.",
        technologies: [
          "Laravel",
          "Vue.js",
          "PHP",
          "MySQL",
          "JavaScript",
          "Git",
        ],
        impact: [
          "Streamlined telemedicine and health record management for the university community",
          "Improved data accessibility and response times for healthcare staff by 35%",
          "Enabled real-time synchronization between web and mobile platforms",
          "Enhanced system reliability through optimized backend architecture",
        ],
        responsibilities: [
          "Collaborated on building and maintaining a secure and scalable web platform using Laravel, Vue.js, and MySQL",
          "Developed key modules for patient records, appointment scheduling, and admin dashboards",
          "Integrated RESTful APIs for seamless communication with the mobile app",
          "Implemented form validation, authentication, and responsive UI components",
          "Participated in testing, debugging, and deployment processes to ensure smooth operation",
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
          "The BU HealthSync+ Mobile App serves as a companion platform to the BU HealthSync+ web system, offering students, faculty, and healthcare providers a seamless and accessible way to manage telemedicine and health-related services directly from their smartphones. \n\n Designed with a user-friendly and modern interface, the app allows users to easily book medical appointments, access health records, communicate with university healthcare staff, and receive real-time updates or notifications. It enhances the overall healthcare experience by bridging the gap between digital convenience and personal wellness.",
        technologies: [
          "React Native",
          "Expo",
          "Laravel REST API",
          "Figma",
          "Javascript",
        ],
        impact: [
          "Improved accessibility of campus healthcare services for students and staff",
          "Delivered a cross-platform mobile solution ensuring consistent performance on Android and iOS",
          "Enabled real-time synchronization with the web platform for medical records and appointments ",
          "Enhanced user experience through responsive UI and seamless navigation",
        ],
        responsibilities: [
          "Collaborated with the development team to build the mobile counterpart of BU HealthSync+ using React Native and Expo",
          "Integrated RESTful APIs to connect with the Laravel backend for telemedicine and user management features",
          "Developed core functionalities including user registration, login, and appointment scheduling",
          "Implemented reusable UI components following clean code and modular design principles",
          "Assisted in debugging, testing, and deployment processes to ensure smooth app performance",
        ],
        mobileScreenshots: [
          "/BUApp1.png",
          "/BUApp2.png",
          "/BUApp3.png",
          "/BUApp4.png",
          "/BUApp5.png",
          "/BUApp6.png",
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
// --- END: Data Structure ---

// FIX 1: Remove the 'params' prop from the function signature
export default function CompanyWorkPage() {
  // FIX 1: Use the useParams hook to get the params object
  const params = useParams();
  const companyKey = params.company as string;

  // FIX 1: Use the safely retrieved companyKey
  const company = companyWork[companyKey as keyof typeof companyWork];

  const [activeDesktopScreenshot, setActiveDesktopScreenshot] = useState<{
    [key: string]: number;
  }>({});
  const [activeMobileScreenshot, setActiveMobileScreenshot] = useState<{
    [key: string]: number;
  }>({});
  const [swipeTranslateX, setSwipeTranslateX] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!company) {
    notFound();
  }

  // --- SWIPE LOGIC FUNCTIONS (MODIFIED) ---

  // *** The navigation functions now use a boundary check instead of the modulo operator (%) ***
  const goToNextMobileScreenshot = useCallback(
    (projectTitle: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => {
        const current = prev[projectTitle] || 0;
        // Navigation is ONLY allowed if the current index is NOT the last index
        const nextIndex =
          current < totalScreenshots - 1 ? current + 1 : current;

        return {
          ...prev,
          [projectTitle]: nextIndex,
        };
      });

      setSwipeTranslateX((prev) => ({
        ...prev,
        [projectTitle]: 0,
      }));
    },
    []
  );

  const goToPrevMobileScreenshot = useCallback(
    (projectTitle: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => {
        const current = prev[projectTitle] || 0;
        // Navigation is ONLY allowed if the current index is NOT the first index (0)
        const prevIndex = current > 0 ? current - 1 : current;

        return {
          ...prev,
          [projectTitle]: prevIndex,
        };
      });

      setSwipeTranslateX((prev) => ({
        ...prev,
        [projectTitle]: 0,
      }));
    },
    []
  );

  // --- HANDLERS FOR SWIPE (MODIFIED) ---
  const createSwipeHandlers = (project: Project) => {
    const mobileScreenshots = project.mobileScreenshots;
    if (!mobileScreenshots || mobileScreenshots.length <= 1) {
      return {};
    }
    const total = mobileScreenshots.length;

    // Get the current index for reference in the handlers
    const currentIdx = activeMobileScreenshot[project.title] || 0;

    return useSwipeable({
      // Navigation handlers: Only move if not at the start/end
      onSwipedLeft: () => goToNextMobileScreenshot(project.title, total),
      onSwipedRight: () => goToPrevMobileScreenshot(project.title, total),

      // Smooth Drag Animation: Runs *during* the swipe
      onSwiping: ({ deltaX }) => {
        // *** Boundary Logic for "Stretch and Snap Back" ***

        let newDeltaX = deltaX;

        // Swiping Left (Trying to go past the last image)
        if (currentIdx === total - 1 && deltaX < 0) {
          // Reduce the drag distance past the boundary to create the "stretch" effect
          newDeltaX = deltaX * 0.2; // Apply a damping factor
        }

        // Swiping Right (Trying to go past the first image)
        if (currentIdx === 0 && deltaX > 0) {
          // Reduce the drag distance past the boundary to create the "stretch" effect
          newDeltaX = deltaX * 0.2; // Apply a damping factor
        }

        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: newDeltaX,
        }));
      },

      // Snap-Back: This runs after onSwipedLeft/Right or on short/failed swipes.
      // It ensures the swipeTranslateX is reset to 0 to allow the CSS transition
      // to snap back to the current index.
      onSwiped: () => {
        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: 0,
        }));
      },

      // FIX 2: Set to false to allow vertical scrolling when swiping on the carousel area.
      preventScrollOnSwipe: false,

      trackMouse: true,
      delta: 10,
    });
  };
  // ... (rest of the component) ...

  const handleThumbnailClick = (projectTitle: string, idx: number) => {
    // 1. Set the new index
    setActiveMobileScreenshot((prev) => ({
      ...prev,
      [projectTitle]: idx,
    }));
    // 2. IMPORTANT: Reset the drag offset to 0 to allow the CSS transition to work.
    setSwipeTranslateX((prev) => ({
      ...prev,
      [projectTitle]: 0,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section (No changes here) */}
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

            // Current index state
            const currentIdx = activeMobileScreenshot[project.title] || 0;
            // Current drag offset
            const currentTranslateX = swipeTranslateX[project.title] || 0;
            // The combined transform: -(Index * 100%) + (Drag Offset)
            // The "100%" represents the width of a single screenshot element.
            const carouselTransform = `translateX(calc(${
              currentIdx * -100
            }% + ${currentTranslateX}px))`;

            return (
              <article key={project.title} className="group">
                {/* Project Header (No changes here) */}
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

                    {/* Mobile View - Swipe area expanded to full column */}
                    {project.mobileScreenshots.length > 0 &&
                      (project.platform === "mobile" ||
                        project.platform === "both") && (
                        <div
                          className={
                            project.platform === "both"
                              ? "lg:col-span-4"
                              : "lg:col-span-12"
                          }
                          {...mobileSwipeHandlers} // Swipe handlers applied to the container
                        >
                          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Smartphone className="h-4 w-4" />
                            Mobile Version
                          </div>

                          {/* Simple Floating Image Space (smaller size) */}
                          <div className="relative mx-auto w-full max-w-[200px] lg:max-w-sm">
                            {/* REMOVED bg-muted/20 to show transparency */}
                            <div className="relative aspect-[9/19.5] overflow-hidden rounded-lg">
                              {/* Single Carousel Container holding all images */}
                              {/* The transition is disabled while dragging (currentTranslateX !== 0) to avoid stuttering */}
                              <div
                                className={`h-full w-full whitespace-nowrap ${
                                  currentTranslateX === 0
                                    ? "transition-transform duration-300 ease-out"
                                    : "duration-0"
                                }`}
                                style={{
                                  transform: carouselTransform,
                                }}
                              >
                                {project.mobileScreenshots.map(
                                  (screenshot, idx) => (
                                    // Each screenshot takes up 100% of the parent's width, laid out horizontally
                                    <div
                                      key={`${project.title}-${idx}`}
                                      className="relative inline-block h-full w-full"
                                    >
                                      <Image
                                        src={screenshot}
                                        alt={`${
                                          project.title
                                        } mobile screenshot ${idx + 1}`}
                                        fill
                                        className="object-cover select-none"
                                        draggable="false"
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* Mobile Thumbnails (Fixed logic here) */}
                            {hasMultipleMobileScreenshots && (
                              <div className="mt-4 flex justify-center gap-3">
                                {project.mobileScreenshots.map(
                                  (screenshot: string, idx: number) => (
                                    <button
                                      key={idx}
                                      onClick={() =>
                                        handleThumbnailClick(project.title, idx)
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
                      <p className="leading-relaxed text-muted-foreground whitespace-pre-line text-justify">
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
