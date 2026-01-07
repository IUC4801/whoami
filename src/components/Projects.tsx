import { ExternalLink, Github, Folder } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Featured projects - set github/live to undefined or remove to hide the link
const featuredProjects = [
  {
    title: "AI Threat Detection System",
    description: "Real-time security monitoring platform using machine learning to detect and classify network threats. Reduced false positives by 40% using custom-trained anomaly detection models.",
    tags: ["Python", "TensorFlow", "Kafka", "Elasticsearch"],
    github: undefined, // No GitHub link
    live: undefined, // No live link
  },
  {
    title: "Scanax",
    description: "Enterprise-grade security vulnerability scanner with AI-powered detection and automated remediation for 50+ vulnerability types across multiple programming languages.",
    tags: ["Typescript", "Python", "Grok"],
    github: "https://github.com/IUC4801/Scanax",
    live: "https://marketplace.visualstudio.com/items?itemName=AyushiChaudhuri.scanax",
  },
  {
    title: "Smart Pocket",
    description: "A decentralized Ethereum wallet application for on-chain token transfers via Ethereum smart contracts with MetaMask-based signing and transaction traceability.",
    tags: ["Reactjs", "Web3js", "Solidity", "Openzepplin", "Metamask"],
    github: "https://github.com/IUC4801/Smart-Pocket",
    live: undefined, // No live link
  },
];

const otherProjects = [
  // { title: "Flaky Network Simulator", desc: "Command line tool for simulating network conditions", tags: ["Python", "C++"] },
  // { title: "CVE Dashboard", desc: "Real-time vulnerability tracker", tags: ["React", "API"] },
  // { title: "LLM Security Suite", desc: "Prompt injection detector", tags: ["Python", "LLM"] },
  // { title: "Container Scanner", desc: "Docker image vulnerability scanner", tags: ["Go", "Trivy"] },
  { title: "Flaky Network Simulator", desc: "Command line tool for simulating network conditions", tags: ["Python", "C++"] },
  { title: "CVE Dashboard", desc: "Real-time vulnerability tracker", tags: ["React", "API"] },
  { title: "LLM Security Suite", desc: "Prompt injection detector", tags: ["Python", "LLM"] },
  { title: "Container Scanner", desc: "Docker image vulnerability scanner", tags: ["Go", "Trivy"] },
];

const Projects = () => {
  return (
    <AnimatedSection>
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-primary text-sm sm:text-base">04.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border hidden sm:block" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24 mb-16 sm:mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="relative"
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded border border-border relative overflow-hidden mb-4 transition-colors duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground text-xs sm:text-sm">{`<${project.title.split(' ')[0]} />`}</span>
                  </div>
                </div>
                <p className="font-mono text-primary text-xs mb-1">Featured Project</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <div className="p-4 bg-card border border-border rounded shadow-lg mb-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden md:grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}>
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 0 ? "" : "md:col-start-6"}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded border border-border relative overflow-hidden group transition-colors duration-300">
                    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-muted-foreground text-sm">{`<${project.title.split(' ')[0]} />`}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`md:col-span-6 md:absolute ${index % 2 === 0 ? "md:right-0 md:text-right" : "md:left-0 md:text-left"}`}>
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="p-4 lg:p-6 bg-card border border-border rounded shadow-lg mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-4 sm:p-6 border border-border hover:border-primary/30 bg-card rounded transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <div className="flex gap-3">
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Projects;
