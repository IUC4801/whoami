import { Code, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Building robust, scalable applications with modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive, visually stunning interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency to deliver the best possible user experience.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionate about creating
              <span className="text-gradient"> meaningful </span>
              digital products
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development and design, I specialize 
              in creating seamless digital experiences that combine aesthetics with functionality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in the power of thoughtful design and clean code to solve complex 
              problems and create lasting impact for businesses and their users.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
