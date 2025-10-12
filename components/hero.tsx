import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center py-20 lg:ml-32">
      <div className="max-w-4xl">
        <div className="mb-6 text-primary">
          <p className="font-mono text-sm">Hi, my name is</p>
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Kenn
        </h1>
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl">
          I build exceptional digital experiences.
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products with cutting-edge
          technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="mt-12 flex gap-6">
          <a
            href="https://github.com/KennMujar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/KennMujar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="gertrude.kenn.mujar@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
