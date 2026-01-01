import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group z-50"
        >
          <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse" />
          <span className="font-mono text-sm text-primary">~/portfolio</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-lg md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-primary/50 mr-2">0{i + 1}.</span>
              {item}
            </button>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors rounded"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
