import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group"
        >
          <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse" />
          <span className="font-mono text-sm text-primary">~/portfolio</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              <span className="text-primary/50 mr-1">0{i + 1}.</span>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-mono text-sm px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors rounded"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
