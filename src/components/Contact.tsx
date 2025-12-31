import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's work
            <span className="text-gradient"> together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Drop me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-6 py-4 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
