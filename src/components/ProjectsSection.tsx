import { Satellite, Bot, Brain, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Satellite,
    title: "CanSat Systems",
    description: "Design and build miniature satellites for atmospheric research and space technology competitions.",
    tags: ["Aerospace", "Sensors", "Telemetry"],
    color: "from-primary to-secondary",
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description: "Create intelligent robots and autonomous vehicles for various applications and competitions.",
    tags: ["Hardware", "Control Systems", "IoT"],
    color: "from-secondary to-accent",
  },
  {
    icon: Brain,
    title: "AI-Driven Solutions",
    description: "Develop machine learning models and AI applications to solve real engineering challenges.",
    tags: ["Machine Learning", "Computer Vision", "NLP"],
    color: "from-accent to-primary",
  },
  {
    icon: Boxes,
    title: "3D Design & CAD",
    description: "Master 3D modeling and CAD-based hardware development for prototyping and manufacturing.",
    tags: ["CAD", "3D Printing", "Prototyping"],
    color: "from-primary to-accent",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm font-medium text-secondary">Our Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We
            <span className="gradient-text"> Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At MUBL, projects are the heart of everything we do. Members work on hardware 
            and software systems across multiple domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gradient-bg glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ icon: Icon, title, description, tags, color }: {
  icon: any;
  title: string;
  description: string;
  tags: string[];
  color: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300">
      {/* Gradient Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
      
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:glow transition-shadow`}>
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
