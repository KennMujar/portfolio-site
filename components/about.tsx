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
            Hello! I'm a software engineer passionate about crafting mobile apps
            and games that blend functionality with creativity. My interest in
            software development started back in highschool when I decided to
            try building my first game — turns out hacking together custom game
            mechanics taught me a lot about programming!
          </p>
          <p className="leading-relaxed">
            Fast-forward to today, and I've had the privilege of working at
            various companies, from startups to large corporations. Currently,
            I’m focused on building accessible, human-centered products and
            exploring how technology and design can create engaging digital
            experiences.
          </p>
          <p className="leading-relaxed">
            I also recently launched a game development website where I share my
            passion for creating interactive experiences and game mechanics.
          </p>
          <p className="leading-relaxed">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="columns-2 gap-2 font-mono text-sm">
            {[
              "Java",
              "C#",
              "C",
              "Dart",
              "Python",
              "Unity",
              "Flutter",
              "React Native",
            ].map((tech) => (
              <li key={tech} className="flex items-center mb-2">
                <span className="mr-2 text-primary">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-lg border-2 border-primary/20 bg-card">
            <img
              src="/me-cutie.JPG"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute left-6 top-6 -z-10 h-full w-full rounded-lg border-2 border-primary" />
        </div>
      </div>
    </section>
  );
}
