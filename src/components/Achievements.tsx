import { Award, FileText, BadgeCheck, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      category: "Academic Excellence",
      title: "Gold Medalist",
      description: "Branch Topper in B.Tech CSE with specialization in Cybersecurity & Digital Forensics",
    },
    {
      icon: FileText,
      category: "Research",
      title: "Published Research Paper",
      description: "Android Malware Detection and Prevention using Machine Learning techniques",
    },
  ];

  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  ];

  return (
    <AnimatedSection>
    <section id="achievements" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-primary text-sm sm:text-base">05.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Achievements</h2>
          <div className="flex-1 h-px bg-border hidden sm:block" />
        </div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group relative p-4 sm:p-6 border rounded-lg transition-all duration-300 border-border hover:border-primary/50 hover:bg-primary/5 bg-card"
            >
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg flex-shrink-0 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary/80 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-primary/70 uppercase tracking-wider">
                    {achievement.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold mt-1 mb-2">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border border-border rounded-lg p-4 sm:p-6 bg-card">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <BadgeCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">Professional Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group relative flex items-center gap-3 p-3 sm:p-4 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 bg-background/50"
              >
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Award className="w-5 h-5 text-primary/70 group-hover:text-primary flex-shrink-0 transition-colors duration-300" />
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm truncate">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Achievements;
