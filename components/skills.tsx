const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "Flask", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB", "Redis", "Vercel"],
  },
  {
    title: "Concepts",
    skills: ["System Design", "Microservices", "REST APIs", "GraphQL", "CI/CD", "Agile", "Testing"],
  },
]

export function Skills() {
  return (
    <section className="py-20 lg:ml-32">
      <div className="mb-12">
        <h2 className="mb-4 flex items-center text-3xl font-bold">
          <span className="mr-4 font-mono text-xl text-primary">04.</span>
          <span className="text-balance">Skills & Technologies</span>
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-lg font-bold text-primary">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-muted-foreground">
                  <span className="mr-2 text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
