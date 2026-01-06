import { Briefcase, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of AI-powered security monitoring system reducing threat detection time by 60%",
      "Architected microservices infrastructure handling 10M+ daily requests",
      "Mentored team of 5 engineers on security best practices and ML integration",
    ],
  },
  {
    title: "Security Engineer",
    company: "Cybersecurity Firm",
    location: "Remote",
    period: "2020 - 2022",
    description: [
      "Conducted penetration testing and vulnerability assessments for Fortune 500 clients",
      "Developed automated security scanning tools using Python and Go",
      "Implemented SIEM solutions and incident response procedures",
    ],
  },
  {
    title: "Software Developer",
    company: "Startup Inc.",
    location: "New York, NY",
    period: "2018 - 2020",
    description: [
      "Built full-stack web applications using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines and containerized deployments",
      "Contributed to open-source projects and internal developer tools",
    ],
  },
];

const Experience = () => {
  return (
    <AnimatedSection>
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-primary text-sm sm:text-base">03.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-border hidden sm:block" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background top-6 md:top-8" />

                {/* Content */}
                <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-8 lg:pr-12 md:text-right" : "md:col-start-2 md:pl-8 lg:pl-12"}`}>
                  <div className="p-4 sm:p-6 border border-border hover:border-primary/30 bg-card rounded transition-all duration-300 group">
                    <div className={`flex items-center gap-2 mb-2 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="font-mono text-xs text-muted-foreground">{exp.company}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? "hidden md:block" : "hidden"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Experience;
