import { usePageMeta } from "@/hooks/use-page-meta";
import { Brain, Boxes } from "lucide-react";
import { Layout } from "@/components/Layout";
import NeuralBackground from "@/components/ui/flow-field-background";
import { CtaCard } from "@/components/ui/cta-card";
import cansatProjectImage from "@/assets/showcase/cansat-project.png";
import roboticsCompetitionImage from "@/assets/gallery/robotics-competition.jpg";

const featuredProjectAreas = [
  {
    subtitle: "CanSat Systems",
    description:
      "Design and build miniature satellites for atmospheric research and space technology competitions.",
    buttonText: "Explore CanSat Track",
    imageSrc: cansatProjectImage,
    imageAlt: "MUBL CanSat team presenting their competition system.",
  },
  {
    subtitle: "Robotics & Autonomous Systems",
    description:
      "Create intelligent robots and autonomous vehicles for various applications, from control systems to embedded prototyping.",
    buttonText: "Explore Robotics Track",
    imageSrc: roboticsCompetitionImage,
    imageAlt: "MUBL robotics competition team and autonomous systems showcase.",
  },
];

const projectAreas = [
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
  usePageMeta({ title: "Projects", description: "Explore MUBL's project areas: CanSat systems, robotics, AI engineering, and 3D design." });
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen border-white/10 bg-slate-950/70 shadow-[0_40px_120px_rgba(2,6,23,0.46)] backdrop-blur-sm">
            <NeuralBackground
              className="absolute inset-0 opacity-95"
              color="#7dd3fc"
              particleCount={760}
              trailOpacity={0.1}
              speed={0.78}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.4))]" />

            <div className="relative z-10 mb-12 max-w-3xl">
              <div className="eyebrow border-blue-300/20 bg-blue-500/10 text-blue-100/80">Projects</div>
              <h1 className="page-title mt-5 text-[color:var(--title-color)]">
                What we <span className="text-primary">build</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                Projects are the operating system of the club. Members learn by designing, testing, presenting, and improving real technical systems.
              </p>
            </div>

            <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[color:var(--title-color)]">Key project areas</h2>
              <p className="hidden text-sm text-slate-400 md:block">
                Aerospace, robotics, AI, and rapid prototyping.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
              {featuredProjectAreas.map((project) => (
                <CtaCard
                  key={project.subtitle}
                  subtitle={project.subtitle}
                  description={project.description}
                  buttonText={project.buttonText}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  className="h-full xl:h-[360px]"
                />
              ))}
              {projectAreas.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-8"
                >
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition-transform group-hover:scale-110">
                      <project.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold text-[color:var(--title-color)] transition-colors group-hover:text-blue-200">{project.title}</h3>
                      <p className="mb-5 text-sm leading-6 text-slate-300/85">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
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
