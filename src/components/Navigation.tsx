import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-display text-xl font-bold tracking-tight text-gradient"
        >
          Portfolio
        </button>
        
        <div className="flex items-center gap-8">
          {["About", "Work", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
