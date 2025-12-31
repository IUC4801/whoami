import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern online shopping experience with seamless checkout and inventory management.",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for business intelligence and insights.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Social Media App",
    description: "Connect and share with a beautifully designed social networking platform.",
    tags: ["React Native", "Firebase", "GraphQL"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI Content Generator",
    description: "Leverage artificial intelligence to create compelling content at scale.",
    tags: ["Python", "OpenAI", "FastAPI"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projects I'm
            <span className="text-gradient"> proud </span>
            of
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
