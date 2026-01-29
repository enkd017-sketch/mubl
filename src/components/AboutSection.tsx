import { Target, Lightbulb, Users, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Hands-on Engineering",
    description: "Move from theory to real engineering by working on projects that address real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Applied Research",
    description: "Collaborate in multidisciplinary teams to solve challenges using robotics, AI, and modern tools.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from national and international experts who expose students to global standards.",
  },
  {
    icon: GraduationCap,
    title: "Modern Practices",
    description: "Gain exposure to cutting-edge engineering practices and industry-standard workflows.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Building Tomorrow's
            <span className="gradient-text"> Engineers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MUBL Club is a vibrant community at New Uzbekistan University where students 
            transform innovative ideas into real-world solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 gradient-bg rounded-3xl opacity-10" />
          <div className="relative p-8 md:p-12 rounded-3xl border border-primary/20 bg-card">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help students move from theory to real engineering by working on hands-on 
                projects that address real-world problems. Through mentorship and lectures from 
                national and international experts, we expose students to global standards and 
                modern engineering practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, index }: { 
  icon: any; 
  title: string; 
  description: string; 
  index: number;
}) {
  return (
    <div 
      className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:glow transition-shadow">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
