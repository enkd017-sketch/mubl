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
      <div className="page-frame">
        <section className="page-section">
          <div className="section-shell max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Projects</div>
              <h1 className="page-title mt-5">
                What we <span className="text-primary">build</span>
              </h1>
              <p className="page-copy mt-5">
                Projects are the operating system of the club. Members learn by designing, testing, presenting, and improving real technical systems.
              </p>
            </div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">Key project areas</h2>
              <p className="hidden text-sm text-slate-400 md:block">
                Aerospace, robotics, AI, and rapid prototyping.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projectAreas.map((project, index) => (
                <div key={index} className="glass-card group relative overflow-hidden p-6 md:p-8">
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition-transform group-hover:scale-110">
                        <project.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">{project.title}</h3>
                        <p className="mb-5 text-sm leading-6 text-slate-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
