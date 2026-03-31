import { Satellite, Bot, Brain, Boxes } from "lucide-react";
import { Layout } from "@/components/Layout";

const projectAreas = [
  {
    icon: Satellite, title: "CanSat Systems",
    description: "Design and build miniature satellites for atmospheric research and space technology competitions.",
    tags: ["Aerospace", "Sensors", "Telemetry", "Data Analysis"],
  },
  {
    icon: Bot, title: "Robotics & Autonomous Systems",
    description: "Create intelligent robots and autonomous vehicles for various applications.",
    tags: ["Hardware", "Control Systems", "IoT", "Embedded"],
  },
  {
    icon: Brain, title: "AI-Driven Engineering Solutions",
    description: "Develop machine learning models and AI applications to solve real engineering challenges.",
    tags: ["Machine Learning", "Computer Vision", "NLP", "Deep Learning"],
  },
  {
    icon: Boxes, title: "3D Design & CAD-Based Development",
    description: "Master 3D modeling and CAD-based hardware development for rapid prototyping.",
    tags: ["CAD", "3D Printing", "Prototyping", "Manufacturing"],
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What We <span className="text-primary">Build</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At MUBL, projects are the heart of everything we do.
              </p>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-8">Key Project Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectAreas.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <project.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
