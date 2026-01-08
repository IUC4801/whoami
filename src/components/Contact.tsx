import { Mail, Send, MapPin, Terminal, Shield, Code2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection>
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Get In Touch</h2>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Open to security research collaborations, engineering roles, CTFs and interesting technical challenges. 
          Let's discuss threat modeling, system architecture, or your next security-focused project.
        </p>

        {/* Quick stats for credibility */}
        {/* <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            { icon: Shield, label: "Security Focus", value: "Offensive & Defensive" },
            { icon: Code2, label: "Experience", value: "Full-Stack + ML" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{stat.label}:</span>
              <span className="font-mono text-foreground">{stat.value}</span>
            </div>
          ))}
        </div> */}

        {/* Terminal-style contact */}
        <div className="bg-card border border-border rounded-lg overflow-hidden text-left max-w-xl mx-auto mb-8 sm:mb-12 transition-colors duration-300">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-secondary/50 border-b border-border">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive/70" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent/50" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">contact.sh</span>
          </div>
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <p className="pl-4 text-foreground">Ayushi Chaudhuri - Software Engineer & Security Enthusiast</p>
            
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">cat contact.txt</span>
            </div>
            <div className="pl-4 space-y-1">
              <p className="flex items-center gap-2 flex-wrap">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:ayushichaudhuri50@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                  ayushichaudhuri50@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground">Bangalore, India</span>
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground animate-pulse">_</span>
            </div>
          </div>
        </div>

        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 bg-transparent border border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-sm"
        >
          <Terminal className="w-4 h-4" />
          Send Message
          <Send className="w-4 h-4" />
        </a>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Contact;
