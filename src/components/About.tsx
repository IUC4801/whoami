import { Shield, Brain, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer passionate about building secure, scalable systems 
              that leverage the power of artificial intelligence. My journey in tech started 
              with a fascination for how things work under the hood—from low-level systems 
              to high-level abstractions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I focus on developing solutions that sit at the intersection of 
              <span className="text-primary"> cybersecurity</span> and 
              <span className="text-primary"> machine learning</span>, helping organizations 
              protect their assets while harnessing data-driven insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not writing code, you'll find me exploring the latest security 
              vulnerabilities, training ML models, or contributing to open-source projects.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Code2, title: "Software Engineering", desc: "Full-stack development, system design, clean architecture" },
              { icon: Shield, title: "Cybersecurity", desc: "Threat analysis, penetration testing, secure coding" },
              { icon: Brain, title: "Artificial Intelligence", desc: "Machine learning, NLP, computer vision" },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-4 border border-border hover:border-primary/50 bg-card rounded transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
