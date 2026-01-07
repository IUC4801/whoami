import { ArrowDown, Github, Linkedin, Mail, FileDown, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 overflow-hidden pt-20 md:pt-0">
      {/* Grid background - theme aware */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] transition-colors duration-300" />
      
      {/* Glow orbs - adjusted for mobile */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px] transition-colors duration-300" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/5 rounded-full blur-[100px] sm:blur-[150px] transition-colors duration-300" />

      <div className="container mx-auto max-w-5xl z-10">
        <div className="space-y-4 sm:space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-primary text-sm sm:text-xl"
            //className="flex items-center gap-2"
          >
            Hello, World! I'm
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-foreground">Ayushi Chaudhuri</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="font-mono text-base sm:text-xl md:text-2xl text-muted-foreground">
              {displayText}
            </span>
            <span className="w-2 sm:w-3 h-5 sm:h-6 bg-primary animate-pulse" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Building secure, intelligent systems at the intersection of <span className="text-primary font-medium">offensive security</span>, 
            <span className="text-primary font-medium"> machine learning</span>, and <span className="text-primary font-medium">distributed systems</span>. 
            Passionate about breaking things to make them stronger.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4"
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button 
                onClick={scrollToAbout} 
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-medium transition-all duration-300 hover:glow-sm hover:scale-105 rounded"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a 
                href="https://drive.google.com/file/d/1pPinzs7001aeWXPGFvRnHSkU7LkoUT31/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-primary text-primary px-4 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:glow-sm rounded"
              >
                <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Resume
              </a>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
              {[
                { icon: Github, href: "https://github.com/IUC4801", label: "GitHub", external: true },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ayushichaudhuri/", label: "LinkedIn", external: true },
                { icon: Mail, href: "#contact", label: "Email", external: false },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30 rounded"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
