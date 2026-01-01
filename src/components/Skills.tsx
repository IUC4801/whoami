const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "Go", "Rust", "C++", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "FastAPI", "TensorFlow", "PyTorch", "Django"],
  },
  {
    title: "Security",
    skills: ["Penetration Testing", "SIEM", "Cryptography", "OWASP", "Burp Suite", "Wireshark"],
  },
  {
    title: "AI/ML",
    skills: ["Deep Learning", "NLP", "Computer Vision", "MLOps", "LLMs", "RAG"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
  },
  {
    title: "Tools",
    skills: ["Git", "PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-primary text-sm sm:text-base">02.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-border hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-4 sm:p-6 border border-border hover:border-primary/30 bg-card rounded transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-mono text-xs text-primary">{"<"}</span>
                <h3 className="font-mono font-semibold text-primary text-sm sm:text-base">{category.title}</h3>
                <span className="font-mono text-xs text-primary">{"/>"}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
