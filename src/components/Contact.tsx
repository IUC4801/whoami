import { Mail, Send, MapPin, Terminal } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="font-mono text-primary text-sm sm:text-base">06.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get In Touch</h2>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          I'm currently open to new opportunities and collaborations. Whether you have a 
          project in mind, want to discuss security, AI, or just want to say hello—my 
          inbox is always open.
        </p>

        {/* Terminal-style contact */}
        <div className="bg-card border border-border rounded-lg overflow-hidden text-left max-w-xl mx-auto mb-8 sm:mb-12">
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
            <p className="pl-4 text-foreground">Your Name - Software Engineer</p>
            
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">cat contact.txt</span>
            </div>
            <div className="pl-4 space-y-1">
              <p className="flex items-center gap-2 flex-wrap">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@example.com" className="text-foreground hover:text-primary transition-colors break-all">
                  hello@example.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground">San Francisco, CA</span>
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
  );
};

export default Contact;
