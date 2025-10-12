"use client"

import { Navigation } from "@/components/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useEffect } from "react"

const projectDetails = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution built to handle high-traffic retail operations with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    longDescription:
      "This e-commerce platform was designed from the ground up to provide a seamless shopping experience while giving administrators powerful tools to manage their business. The system handles thousands of concurrent users and processes hundreds of transactions daily with 99.9% uptime. I architected the entire stack, from the React frontend with server-side rendering for optimal SEO, to the Node.js backend with PostgreSQL for reliable data storage. The platform includes advanced features like real-time inventory tracking, automated email notifications, abandoned cart recovery, and comprehensive analytics. Payment processing is handled securely through Stripe with support for multiple payment methods and currencies.",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Stripe", "Redis", "AWS S3", "Docker"],
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Admin dashboard with analytics",
      "Automated email notifications",
      "Abandoned cart recovery",
      "Multi-currency support",
      "Product search and filtering",
      "Order tracking system",
    ],
    challenges: [
      "Optimizing database queries for large product catalogs (10,000+ items)",
      "Implementing real-time inventory updates across multiple warehouses",
      "Ensuring PCI compliance for payment processing",
      "Building a responsive admin dashboard with complex data visualizations",
    ],
    impact: [
      "Handles 1000+ daily transactions",
      "99.9% uptime over 12 months",
      "40% increase in conversion rate",
      "Reduced cart abandonment by 25%",
    ],
    screenshots: [
      "/modern-ecommerce-dashboard.png",
      "/ecommerce-product-catalog.jpg",
      "/ecommerce-checkout-process.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  "social-media-automation": {
    title: "Social Media Automation Tool",
    description:
      "An intelligent social media management platform that automates content posting across multiple platforms with AI-powered content suggestions and comprehensive analytics tracking.",
    longDescription:
      "This tool revolutionizes social media management by combining automation with artificial intelligence. Users can schedule posts across Twitter, Facebook, LinkedIn, and Instagram from a single dashboard. The AI integration uses OpenAI's GPT models to suggest engaging content, optimal posting times, and hashtag recommendations based on historical performance data. The analytics engine tracks engagement metrics in real-time and provides actionable insights to improve social media strategy. I built the entire system using Next.js for the frontend, with a Node.js backend and MongoDB for flexible data storage. The platform includes a sophisticated queue system for reliable post scheduling and webhook integrations with all major social media APIs.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS", "Vercel", "Bull Queue"],
    features: [
      "Multi-platform posting (Twitter, Facebook, LinkedIn, Instagram)",
      "AI-powered content suggestions",
      "Optimal posting time recommendations",
      "Hashtag analysis and suggestions",
      "Real-time analytics dashboard",
      "Content calendar with drag-and-drop",
      "Team collaboration features",
      "Performance reports and insights",
    ],
    challenges: [
      "Integrating with multiple social media APIs with different rate limits",
      "Implementing reliable post scheduling across time zones",
      "Training AI models on user-specific content for better suggestions",
      "Building a real-time analytics pipeline for instant insights",
    ],
    impact: [
      "Saves users 10+ hours per week",
      "30% increase in engagement rates",
      "Supports 500+ active users",
      "Processes 5000+ posts monthly",
    ],
    screenshots: [
      "/social-media-automation-interface.jpg",
      "/social-media-calendar-view.jpg",
      "/social-media-analytics-dashboard.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/social-tool",
  },
  "portfolio-template": {
    title: "Developer Portfolio Template",
    description:
      "An open-source, fully customizable portfolio template designed specifically for developers, featuring dark mode, smooth animations, and SEO optimization out of the box.",
    longDescription:
      "This portfolio template was created to help developers quickly build a professional online presence without starting from scratch. It's built with modern web technologies and follows best practices for performance, accessibility, and SEO. The template includes pre-built sections for projects, experience, skills, and contact information, all fully customizable through simple configuration files. I implemented smooth scroll animations using Framer Motion, a beautiful dark mode with system preference detection, and optimized the entire site for Core Web Vitals. The template supports MDX for blog posts, allowing developers to write content in Markdown with embedded React components. It's deployed on Vercel with automatic deployments from GitHub, making it easy to maintain and update.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "MDX",
      "Tailwind CSS",
      "Vercel",
      "GitHub Actions",
    ],
    features: [
      "Fully responsive design",
      "Dark mode with system preference detection",
      "Smooth scroll animations",
      "MDX support for blog posts",
      "SEO optimized with meta tags",
      "Perfect Lighthouse scores",
      "Easy customization through config files",
      "Automatic deployments with Vercel",
    ],
    challenges: [
      "Achieving perfect Lighthouse scores across all metrics",
      "Implementing smooth animations without impacting performance",
      "Creating a flexible configuration system for easy customization",
      "Building an accessible dark mode toggle with proper contrast ratios",
    ],
    impact: [
      "1000+ GitHub stars",
      "Used by 200+ developers",
      "100/100 Lighthouse scores",
      "Featured in web dev newsletters",
    ],
    screenshots: [
      "/developer-portfolio-template.png",
      "/portfolio-template-dark-mode.jpg",
      "/portfolio-template-mobile.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio-template",
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as keyof typeof projectDetails]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault()
              sessionStorage.setItem("homeScrollPosition", sessionStorage.getItem("homeScrollPosition") || "0")
              window.location.href = "/#projects"
            }}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary active:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">{project.title}</h1>
            <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>

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
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg border border-border/50 bg-muted/30">
              <Image
                src={project.screenshots[0] || "/placeholder.svg"}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
              />
            </div>

            {project.screenshots.length > 1 && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {project.screenshots.slice(1).map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video overflow-hidden rounded-lg border border-border/50 bg-muted/30"
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="leading-relaxed text-muted-foreground">{project.longDescription}</p>
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
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">Technologies</h3>
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
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/80">Impact</h3>
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
  )
}
