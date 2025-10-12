"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft, Smartphone, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const gameProjects = [
  {
    title: "Epic Adventure Quest",
    description:
      "An immersive 3D action-adventure game featuring stunning visuals, dynamic combat system, and an engaging storyline. Players explore vast open worlds, solve intricate puzzles, and battle formidable enemies. Built with cutting-edge graphics technology and optimized for smooth 60fps gameplay across all platforms.",
    screenshots: [
      "/epic-adventure-game-screenshot-with-hero-character.jpg",
      "/epic-adventure-game-combat-scene.jpg",
      "/epic-adventure-game-beautiful-landscape.jpg",
    ],
    technologies: ["Unity", "C#", "Blender", "Shader Graph", "Cinemachine"],
    githubUrl: "https://github.com/yourusername/epic-adventure",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.epicadventure",
    appStoreUrl: "https://apps.apple.com/app/epic-adventure-quest/id123456789",
    features: ["Open World Exploration", "Dynamic Combat", "Puzzle Solving", "Epic Boss Battles"],
    platforms: ["iOS", "Android", "PC"],
  },
  {
    title: "Puzzle Master Pro",
    description:
      "A collection of mind-bending puzzles designed to challenge and entertain. Features hundreds of unique levels, daily challenges, and competitive leaderboards. The game includes various puzzle types from logic puzzles to spatial reasoning challenges, all wrapped in a beautiful, minimalist design.",
    screenshots: [
      "/colorful-puzzle-game-interface.jpg",
      "/puzzle-game-level-selection-screen.jpg",
      "/puzzle-game-gameplay-with-geometric-shapes.jpg",
    ],
    technologies: ["Unity", "C#", "Firebase", "PlayFab", "DOTween"],
    githubUrl: "https://github.com/yourusername/puzzle-master",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.puzzlemaster",
    appStoreUrl: "https://apps.apple.com/app/puzzle-master-pro/id987654321",
    features: ["500+ Levels", "Daily Challenges", "Global Leaderboards", "Hint System"],
    platforms: ["iOS", "Android"],
  },
  {
    title: "Space Shooter Infinity",
    description:
      "Fast-paced arcade space shooter with procedurally generated levels and intense boss battles. Collect power-ups, upgrade your ship, and compete for the highest score. Features stunning particle effects, responsive controls, and an epic soundtrack that keeps you engaged for hours.",
    screenshots: [
      "/space-shooter-game-with-spaceship-and-enemies.jpg",
      "/space-shooter-boss-battle-scene.jpg",
      "/space-shooter-power-up-collection.jpg",
    ],
    technologies: ["Unity", "C#", "Particle System", "Audio Mixer", "Input System"],
    githubUrl: "https://github.com/yourusername/space-shooter",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.spaceshooter",
    features: ["Endless Gameplay", "Ship Upgrades", "Epic Boss Fights", "Leaderboards"],
    platforms: ["Android", "PC"],
  },
  {
    title: "Cozy Farm Simulator",
    description:
      "Relax and build your dream farm in this charming simulation game. Plant crops, raise animals, and create a thriving agricultural paradise. Features seasonal changes, weather systems, and a friendly community of NPCs. Perfect for players who enjoy peaceful, creative gameplay experiences.",
    screenshots: [
      "/cute-farm-game-with-crops-and-animals.jpg",
      "/farm-game-cozy-farmhouse-interior.jpg",
      "/farm-game-seasonal-landscape.jpg",
    ],
    technologies: ["Unity", "C#", "Timeline", "Terrain Tools", "Universal RP"],
    githubUrl: "https://github.com/yourusername/cozy-farm",
    appStoreUrl: "https://apps.apple.com/app/cozy-farm-simulator/id456789123",
    features: ["Crop Farming", "Animal Care", "Seasonal Events", "Customization"],
    platforms: ["iOS", "PC"],
  },
]

export default function GameDevelopmentPortfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Link
          href="/#projects"
          onClick={(e) => {
            e.preventDefault()
            sessionStorage.setItem("homeScrollPosition", sessionStorage.getItem("homeScrollPosition") || "0")
            window.location.href = "/#projects"
          }}
          className="group mb-8 inline-flex items-center gap-2 text-muted-foreground transition-all hover:text-primary active:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" />
          Back to Main Portfolio
        </Link>

        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Gamepad2 className="h-4 w-4" />
            Game Development
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
            My Game Projects
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A collection of games I've built, from action-packed adventures to relaxing simulations. Each project
            showcases different aspects of game design, development, and polish.
          </p>
        </div>

        <div className="space-y-16">
          {gameProjects.map((game, index) => (
            <Card
              key={game.title}
              className="group overflow-hidden border-2 border-border/50 bg-card shadow-lg transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99]"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Screenshots Section */}
                <div className="space-y-4 p-6 lg:p-8">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <img
                      src={game.screenshots[0] || "/placeholder.svg"}
                      alt={`${game.title} screenshot 1`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {game.screenshots.slice(1).map((screenshot, idx) => (
                      <div key={idx} className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                        <img
                          src={screenshot || "/placeholder.svg"}
                          alt={`${game.title} screenshot ${idx + 2}`}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Game Info Section */}
                <div className="flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <h2 className="mb-4 text-3xl font-bold text-foreground group-hover:text-primary">{game.title}</h2>
                    <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">{game.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">
                        Key Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {game.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-1.5 text-sm font-medium text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">
                        Built With
                      </h3>
                      <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                        {game.technologies.map((tech) => (
                          <span key={tech} className="rounded bg-muted px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">
                        Available On
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {game.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                          >
                            <Smartphone className="h-3.5 w-3.5" />
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {game.githubUrl && (
                      <a
                        href={game.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-foreground/90 active:scale-95"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    )}
                    {game.playStoreUrl && (
                      <a
                        href={game.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Play Store
                      </a>
                    )}
                    {game.appStoreUrl && (
                      <a
                        href={game.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/90 active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" />
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
