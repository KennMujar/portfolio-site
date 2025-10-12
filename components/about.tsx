export function About() {
  return (
    <section id="about" className="py-20 lg:ml-32">
      <div className="mb-12">
        <h2 className="mb-4 flex items-center text-3xl font-bold">
          <span className="mr-4 font-mono text-xl text-primary">01.</span>
          <span className="text-balance">About Me</span>
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            Hello! I'm a software engineer passionate about creating things that live on the internet. My interest in
            software development started back in college when I decided to try building my first game — turns out
            hacking together custom game mechanics taught me a lot about programming!
          </p>
          <p className="leading-relaxed">
            Fast-forward to today, and I've had the privilege of working at various companies, from startups to large
            corporations. My main focus these days is building accessible, inclusive products and digital experiences
            for a variety of clients.
          </p>
          <p className="leading-relaxed">
            I also recently launched a game development website where I share my passion for creating interactive
            experiences and game mechanics.
          </p>
          <p className="leading-relaxed">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"].map(
              (tech) => (
                <li key={tech} className="flex items-center">
                  <span className="mr-2 text-primary">▹</span>
                  {tech}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-lg border-2 border-primary/20 bg-card">
            <img
              src="/software-engineer-portrait.png"
              alt="Profile"
              className="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
            />
          </div>
          <div className="absolute left-6 top-6 -z-10 h-full w-full rounded-lg border-2 border-primary" />
        </div>
      </div>
    </section>
  )
}
