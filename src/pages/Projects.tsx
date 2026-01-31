import { Satellite, Bot, Brain, Boxes, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const projects = [
  {
    icon: Satellite,
    title: "CanSat Systems",
    description: "Design and build miniature satellites for atmospheric research and space technology competitions.",
    tags: ["Aerospace", "Sensors", "Telemetry"],
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description: "Create intelligent robots and autonomous vehicles for various applications and competitions.",
    tags: ["Hardware", "Control Systems", "IoT"],
  },
  {
    icon: Brain,
    title: "AI-Driven Solutions",
    description: "Develop machine learning models and AI applications to solve real engineering challenges.",
    tags: ["Machine Learning", "Computer Vision", "NLP"],
  },
  {
    icon: Boxes,
    title: "3D Design & CAD",
    description: "Master 3D modeling and CAD-based hardware development for prototyping and manufacturing.",
    tags: ["CAD", "3D Printing", "Prototyping"],
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FolderOpen className="h-4 w-4" />
            <span>Projects</span>
          </div>
        </div>

        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We{" "}
              <span className="text-primary">Build</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At MUBL, projects are the heart of everything we do. Members work on hardware 
              and software systems across multiple domains.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ icon: Icon, title, description, tags }: {
  icon: any;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
            <Icon className="h-7 w-7 text-primary" />
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
