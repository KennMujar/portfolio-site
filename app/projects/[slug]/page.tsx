"use client";

import { Navigation } from "@/components/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState, useCallback } from "react"; // Added useState, useCallback
import { useSwipeable } from "react-swipeable"; // Added useSwipeable

// --- START: Original Project Data Structure ---
// NOTE: I've updated the original data to match the screenshot keys (desktopScreenshots/mobileScreenshots)
// and platforms from your new code for a seamless merge.
const projectDetails = {
  dipcy: {
    title: "Local Disaster Preparedness Chatbot",
    description:
      "An AI-driven chatbot that delivers accurate and localized disaster information using LLM, RAG, and prompt engineering. Designed to help communities prepare for and respond effectively to natural disasters through real-time, conversational updates.",
    longDescription:
      "The Local Disaster Preparedness Chatbot is designed to provide accurate, recent, and localized information to enhance the capability of communities to prepare for and respond to natural disasters. Powered by a large language model (LLM) and leveraging advanced technologies like retrieval-augmented generation (RAG) and prompt engineering, this chatbot accesses and delivers information from local disaster risk reduction agencies within a conversational interface.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "AWS S3",
      "Docker",
    ],
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Admin dashboard with analytics",
    ],
    challenges: [
      "Optimizing database queries for large product catalogs (10,000+ items)",
      "Implementing real-time inventory updates across multiple warehouses",
    ],
    impact: [
      "Handles 1000+ daily transactions",
      "99.9% uptime over 12 months",
      "40% increase in conversion rate",
    ],
    // UPDATED KEYS to match the new component logic
    desktopScreenshots: [
      "/dipcy2.png",
      "/dipcy3.png",
      "/dipcy1.png",
      "/dipcy4.png",
      "/dipcy5.png",
      "/dipcy6.png",
    ],
    mobileScreenshots: ["/dipcy1.png", "/dipcy2.png", "/dipcy3.png"], // Empty for web-only example
    platform: "web", // Added platform key
    liveUrl: "/dipcy.mp4",
    githubUrl: "https://github.com/KennMujar/disaster-prep-chatbot",
  },
  "social-media-automation": {
    title: "Social Media Automation Tool",
    description:
      "An intelligent social media management platform that automates content posting across multiple platforms with AI-powered content suggestions and comprehensive analytics tracking.",
    longDescription:
      "This tool revolutionizes social media management by combining automation with artificial intelligence. Users can schedule posts across Twitter, Facebook, LinkedIn, and Instagram from a single dashboard. The AI integration uses OpenAI's GPT models to suggest engaging content, optimal posting times, and hashtag recommendations based on historical performance data. The analytics engine tracks engagement metrics in real-time and provides actionable insights to improve social media strategy. I built the entire system using Next.js for the frontend, with a Node.js backend and MongoDB for flexible data storage. The platform includes a sophisticated queue system for reliable post scheduling and webhook integrations with all major social media APIs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    features: [
      "Multi-platform posting (Twitter, Facebook, LinkedIn, Instagram)",
      "AI-powered content suggestions",
      "Optimal posting time recommendations",
    ],
    challenges: [
      "Integrating with multiple social media APIs with different rate limits",
      "Implementing reliable post scheduling across time zones",
    ],
    impact: [
      "Saves users 10+ hours per week",
      "30% increase in engagement rates",
      "Supports 500+ active users",
    ],
    // UPDATED KEYS to match the new component logic
    desktopScreenshots: [
      "/social-media-automation-interface.jpg",
      "/social-media-calendar-view.jpg",
      "/social-media-analytics-dashboard.jpg",
    ],
    mobileScreenshots: [
      "/BUApp1.png",
      "/BUApp2.png",
      "/BUApp3.png",
      "/BUApp4.png",
    ],
    platform: "both", // Added platform key
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/social-tool",
  },
  "portfolio-template": {
    title: "Developer Portfolio Template",
    description:
      "An open-source, fully customizable portfolio template designed specifically for developers.",
    longDescription:
      "This portfolio template was created to help developers quickly build a professional online presence without starting from scratch. It's built with modern web technologies and follows best practices for performance, accessibility, and SEO. The template includes pre-built sections for projects, experience, skills, and contact information, all fully customizable through simple configuration files.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "MDX",
      "Tailwind CSS",
    ],
    features: [
      "Fully responsive design",
      "Dark mode with system preference detection",
      "Smooth scroll animations",
    ],
    challenges: [
      "Achieving perfect Lighthouse scores across all metrics",
      "Implementing smooth animations without impacting performance",
    ],
    impact: [
      "1000+ GitHub stars",
      "Used by 200+ developers",
      "100/100 Lighthouse scores",
    ],
    // UPDATED KEYS to match the new component logic
    desktopScreenshots: [
      "/developer-portfolio-template.png",
      "/portfolio-template-dark-mode.jpg",
    ],
    mobileScreenshots: ["/BUApp1.png", "/BUApp2.png"],
    platform: "both", // Added platform key
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio-template",
  },
};

// Define a type for the project structure after key updates
type ProjectDetail = (typeof projectDetails)["dipcy"] & {
  platform: "web" | "mobile" | "both";
  mobileScreenshots: string[];
  desktopScreenshots: string[];
};
// --- END: Original Project Data Structure ---

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectDetails[
    params.slug as keyof typeof projectDetails
  ] as ProjectDetail;
  const projectTitle = project?.title || "";

  // --- START: New State Logic from your shared code ---
  const [activeDesktopScreenshot, setActiveDesktopScreenshot] = useState<{
    [key: string]: number;
  }>({});
  const [activeMobileScreenshot, setActiveMobileScreenshot] = useState<{
    [key: string]: number;
  }>({});
  const [swipeTranslateX, setSwipeTranslateX] = useState<{
    [key: string]: number;
  }>({});
  // --- END: New State Logic from your shared code ---

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!project) {
    notFound();
  }

  // --- START: New Swipe/Carousel Logic from your shared code ---

  const goToNextMobileScreenshot = useCallback(
    (title: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => {
        const current = prev[title] || 0;
        const nextIndex =
          current < totalScreenshots - 1 ? current + 1 : current;

        return {
          ...prev,
          [title]: nextIndex,
        };
      });

      setSwipeTranslateX((prev) => ({
        ...prev,
        [title]: 0,
      }));
    },
    []
  );

  const goToPrevMobileScreenshot = useCallback(
    (title: string, totalScreenshots: number) => {
      setActiveMobileScreenshot((prev) => {
        const current = prev[title] || 0;
        const prevIndex = current > 0 ? current - 1 : current;

        return {
          ...prev,
          [title]: prevIndex,
        };
      });

      setSwipeTranslateX((prev) => ({
        ...prev,
        [title]: 0,
      }));
    },
    []
  );

  const createSwipeHandlers = (project: ProjectDetail) => {
    const mobileScreenshots = project.mobileScreenshots;
    if (!mobileScreenshots || mobileScreenshots.length <= 1) {
      return {};
    }
    const total = mobileScreenshots.length;
    const currentIdx = activeMobileScreenshot[project.title] || 0;

    return useSwipeable({
      onSwipedLeft: () => goToNextMobileScreenshot(project.title, total),
      onSwipedRight: () => goToPrevMobileScreenshot(project.title, total),

      onSwiping: ({ deltaX }) => {
        let newDeltaX = deltaX;

        // Swiping Left (Trying to go past the last image)
        if (currentIdx === total - 1 && deltaX < 0) {
          newDeltaX = deltaX * 0.2; // Apply a damping factor
        }

        // Swiping Right (Trying to go past the first image)
        if (currentIdx === 0 && deltaX > 0) {
          newDeltaX = deltaX * 0.2; // Apply a damping factor
        }

        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: newDeltaX,
        }));
      },

      onSwiped: () => {
        setSwipeTranslateX((prev) => ({
          ...prev,
          [project.title]: 0,
        }));
      },

      preventScrollOnSwipe: false,
      trackMouse: true,
      delta: 10,
    });
  };

  const handleThumbnailClick = (title: string, idx: number) => {
    setActiveMobileScreenshot((prev) => ({
      ...prev,
      [title]: idx,
    }));
    setSwipeTranslateX((prev) => ({
      ...prev,
      [title]: 0,
    }));
  };

  // New handler for desktop thumbnails
  const handleDesktopThumbnailClick = (title: string, idx: number) => {
    setActiveDesktopScreenshot((prev) => ({
      ...prev,
      [title]: idx,
    }));
  };

  // Calculate carousel data (moved outside of return for clarity)
  const mobileSwipeHandlers = createSwipeHandlers(project);
  const hasMultipleMobileScreenshots = project.mobileScreenshots.length > 1;

  const currentMobileIdx = activeMobileScreenshot[projectTitle] || 0;
  const currentTranslateX = swipeTranslateX[projectTitle] || 0;
  const carouselTransform = `translateX(calc(${
    currentMobileIdx * -100
  }% + ${currentTranslateX}px))`;

  // --- END: New Swipe/Carousel Logic from your shared code ---

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem(
                "homeScrollPosition",
                sessionStorage.getItem("homeScrollPosition") || "0"
              );
              window.location.href = "/#projects";
            }}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary active:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground text-justify">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 active:scale-95"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* --- START: MODIFIED SCREENSHOT DISPLAY SECTION --- */}
        <div className="mb-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Desktop View: Full-width if mobile is empty, or 8/12 grid if 'both' */}
            {project.desktopScreenshots.length > 0 &&
              (project.platform === "web" || project.platform === "both") && (
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
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                      </div>
                    </div>
                    {/* Screenshot */}
                    <div className="relative aspect-[16/10] bg-muted/20">
                      <Image
                        src={
                          project.desktopScreenshots[
                            activeDesktopScreenshot[projectTitle] || 0
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
                    <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                      {project.desktopScreenshots.map(
                        (screenshot: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleDesktopThumbnailClick(projectTitle, idx)
                            }
                            className={`relative aspect-video w-24 flex-shrink-0 overflow-hidden rounded border-2 transition-all ${
                              (activeDesktopScreenshot[projectTitle] || 0) ===
                              idx
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

            {/* Mobile View: Swipe Carousel Implementation. Full-width if web is empty, or 4/12 grid if 'both' */}
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
                    <div className="relative aspect-[9/19.5] overflow-hidden rounded-lg">
                      {/* Single Carousel Container holding all images */}
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
                        {project.mobileScreenshots.map((screenshot, idx) => (
                          // Each screenshot takes up 100% of the parent's width, laid out horizontally
                          <div
                            key={`${project.title}-${idx}`}
                            className="relative inline-block h-full w-full"
                          >
                            <Image
                              src={screenshot}
                              alt={`${project.title} mobile screenshot ${
                                idx + 1
                              }`}
                              fill
                              className="object-cover select-none"
                              draggable="false"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Thumbnails/Pill Dots */}
                    {hasMultipleMobileScreenshots && (
                      <div className="mt-4 flex justify-center gap-3">
                        {/* You can use the small thumbnail buttons you provided: */}
                        {/* {project.mobileScreenshots.map((screenshot: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => handleThumbnailClick(projectTitle, idx)}
                          className={`relative aspect-[9/19.5] w-12 overflow-hidden rounded-lg border-2 transition-all ${
                            currentMobileIdx === idx
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
                      ))} */}

                        {/* ...or use simple pill dots for a cleaner look: */}
                        {project.mobileScreenshots.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleThumbnailClick(projectTitle, idx)
                            }
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentMobileIdx === idx
                                ? "w-8 bg-primary"
                                : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
        {/* --- END: MODIFIED SCREENSHOT DISPLAY SECTION --- */}

        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="leading-relaxed text-muted-foreground text-justify">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
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

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">
                Impact
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
          </div>
        </div>
      </main>
    </div>
  );
}
