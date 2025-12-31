import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useEffect, useState } from "react";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer | Cybersecurity | AI";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(180_100%_50%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(180_100%_50%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-5xl z-10">
        <div className="space-y-6">
          <p className="font-mono text-primary animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>Hello, World! I'm </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            <span className="text-foreground">Ayushi Chaudhuri</span>
          </h1>
          
          <div className="flex items-center gap-2 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {displayText}
            </span>
            <span className="w-3 h-6 bg-primary animate-pulse" />
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            I build secure, intelligent systems and develop cutting-edge solutions 
            at the intersection of software engineering, cybersecurity, and artificial intelligence.
          </p>
          
          <div className="flex items-center gap-6 pt-4 animate-fade-up" style={{
          animationDelay: "0.5s"
        }}>
            <button onClick={scrollToAbout} className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-medium transition-all duration-300 hover:glow-sm hover:scale-105">
              Explore My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a href="/resume.pdf" download="YourName_Resume.pdf" className="group flex items-center gap-2 border border-primary text-primary px-6 py-3 font-mono text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:glow-sm">
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
            
            <div className="flex items-center gap-4">
              {[{
              icon: Github,
              href: "#",
              label: "GitHub"
            }, {
              icon: Linkedin,
              href: "#",
              label: "LinkedIn"
            }, {
              icon: Mail,
              href: "#contact",
              label: "Email"
            }].map(social => <a key={social.label} href={social.href} aria-label={social.label} className="p-2 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30 rounded">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;