import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="text-center z-10 max-w-4xl">
        <p 
          className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Creative Developer
        </p>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          I design and build beautiful, functional websites and applications 
          that help brands connect with their audience.
        </p>
        
        <div 
          className="flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
