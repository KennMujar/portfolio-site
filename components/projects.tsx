"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Gamepad2, Code2 } from "lucide-react";
import Link from "next/link";

const gameProjects = [
  {
    title: "Mummy Rush",
    description:
      "Dash through ancient tombs, dodge saws, and prove your reflexes!",
    image: "/MummyRush.png",
    technologies: ["Unity", "C#", "Blender"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: "🎮",
    comingSoon: false,
  },
  {
    title: "Puzzle Master",
    description:
      "Brain-teasing puzzles with beautiful minimalist design and relaxing music",
    image: "/colorful-puzzle-game-interface.jpg",
    technologies: ["Unity", "C#", "Photoshop"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "🧩",
    comingSoon: true,
  },
  {
    title: "Space Shooter",
    description:
      "Fast-paced arcade action with retro-inspired graphics and modern mechanics",
    image: "/space-shooter-game-with-spaceship-and-enemies.jpg",
    technologies: ["Godot", "GDScript", "Aseprite"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "🚀",
    comingSoon: true,
  },
];

const personalProjects = [
  {
    title: "Local Disaster Preparedness Chatbot",
    slug: "dipcy",
    description:
      "A smart chatbot that helps communities prepare for natural disasters by providing accurate and localized information. It uses advanced AI technologies like RAG and LLMs to deliver real-time updates and guidance from local disaster agencies through a simple, conversational interface.",
    image: "/dipcy3.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "/dipcy.mp4",
    githubUrl: "https://github.com/KennMujar/disaster-prep-chatbot",
  },
  /*
  {
    title: "Social Media Automation Tool",
    slug: "social-media-automation",
    description:
      "Automate social media posting across multiple platforms with AI-generated content suggestions and analytics tracking.",
    image: "/social-media-automation-interface.jpg",
    technologies: ["Next.js", "OpenAI", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/social-tool",
  },
  {
    title: "Developer Portfolio Template",
    slug: "portfolio-template",
    description:
      "Open-source portfolio template for developers. Fully customizable with dark mode, animations, and SEO optimization.",
    image: "/developer-portfolio-template.png",
    technologies: ["React", "Framer Motion", "MDX", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio-template",
  },
  */
];

export function Projects() {
  const handleNavigation = () => {
    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
  };

  return (
    <section id="projects" className="py-20 lg:ml-32">
      <div className="mb-12">
        <h2 className="mb-4 flex items-center text-3xl font-bold">
          <span className="mr-4 font-mono text-xl text-primary">03.</span>
          <span className="text-balance">Things I've Built</span>
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </div>

      <div className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-2">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Game Development</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gameProjects.map((game) => {
            if (game.comingSoon) {
              return (
                <div key={game.title} className="block cursor-not-allowed">
                  <Card
                    className={`relative overflow-hidden border-2 border-border/50 bg-card transition-all duration-300 ${
                      game.comingSoon
                        ? "opacity-75"
                        : "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98] md:hover:-translate-y-2 group"
                    }`}
                  >
                    {!game.comingSoon && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5 group-active:opacity-10`}
                      />
                    )}

                    <div className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 text-2xl shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-105">
                      {game.icon}
                    </div>

                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className={`h-full w-full object-cover transition-transform duration-500 ${
                          game.comingSoon
                            ? "blur-md"
                            : "group-hover:scale-110 group-active:scale-105"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          game.gradient
                        } ${
                          game.comingSoon
                            ? "opacity-40"
                            : "opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                        }`}
                      />

                      {game.comingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                          <div className="text-center">
                            <div
                              className={`mb-2 inline-block rounded-full bg-gradient-to-r ${game.gradient} px-6 py-2 text-sm font-bold text-white shadow-lg`}
                            >
                              Coming Soon
                            </div>
                            <p className="text-xs text-muted-foreground">
                              In Development
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative p-6">
                      <h4
                        className={`mb-2 text-xl font-bold transition-colors duration-300 ${
                          game.comingSoon
                            ? "text-muted-foreground"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {game.title}
                      </h4>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {game.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {game.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-3 py-1 font-mono text-xs font-medium shadow-sm ${
                              game.comingSoon
                                ? "bg-muted text-muted-foreground"
                                : `bg-gradient-to-r ${game.gradient} text-white`
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {!game.comingSoon && (
                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span>View all games</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      )}
                    </div>

                    {!game.comingSoon && (
                      <div
                        className={`absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-tl ${game.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-15`}
                      />
                    )}
                  </Card>
                </div>
              );
            }

            return (
              <Link
                key={game.title}
                href="/games"
                onClick={handleNavigation}
                className="group block"
              >
                <Card
                  className={`relative overflow-hidden border-2 border-border/50 bg-card transition-all duration-300 ${
                    game.comingSoon
                      ? "opacity-75"
                      : "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98] md:hover:-translate-y-2 group"
                  }`}
                >
                  {!game.comingSoon && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5 group-active:opacity-10`}
                    />
                  )}

                  <div className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 text-2xl shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-105">
                    {game.icon}
                  </div>

                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        game.comingSoon
                          ? "blur-md"
                          : "group-hover:scale-110 group-active:scale-105"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        game.gradient
                      } ${
                        game.comingSoon
                          ? "opacity-40"
                          : "opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                      }`}
                    />

                    {game.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                        <div className="text-center">
                          <div
                            className={`mb-2 inline-block rounded-full bg-gradient-to-r ${game.gradient} px-6 py-2 text-sm font-bold text-white shadow-lg`}
                          >
                            Coming Soon
                          </div>
                          <p className="text-xs text-muted-foreground">
                            In Development
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative p-6">
                    <h4
                      className={`mb-2 text-xl font-bold transition-colors duration-300 ${
                        game.comingSoon
                          ? "text-muted-foreground"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {game.title}
                    </h4>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {game.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full px-3 py-1 font-mono text-xs font-medium shadow-sm ${
                            game.comingSoon
                              ? "bg-muted text-muted-foreground"
                              : `bg-gradient-to-r ${game.gradient} text-white`
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {!game.comingSoon && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span>View all games</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  {!game.comingSoon && (
                    <div
                      className={`absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-tl ${game.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-15`}
                    />
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 p-2">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Personal Projects</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              onClick={handleNavigation}
              className="group block"
            >
              <Card className="h-full overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98] md:hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.githubUrl && (
                      <div className="flex items-center gap-1.5 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm">
                        <Github className="h-3 w-3" />
                        Code
                      </div>
                    )}
                    {project.liveUrl && (
                      <div className="flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h4>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/50 bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
