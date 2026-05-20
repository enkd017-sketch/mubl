import { usePageMeta } from "@/hooks/use-page-meta";
import { Layout } from "@/components/Layout";
import NeuralBackground from "@/components/ui/flow-field-background";
import { NewsCards, type NewsCard } from "@/components/ui/news-cards";
import cansatProjectImage from "@/assets/showcase/cansat-project.png";
import roboticsCompetitionImage from "@/assets/gallery/robotics-competition.jpg";
import roboticsAiImage from "@/assets/events/robotics&ai.jpg";
import workshop3dImage from "@/assets/events/3D_workshop.jpg";

const projectCards: NewsCard[] = [
  {
    id: "cansat",
    title: "CanSat Systems",
    category: "Aerospace",
    subcategory: "Satellite Systems",
    timeAgo: "Competition track",
    location: "MUBL",
    image: cansatProjectImage,
    gradientColors: ["from-orange-500/30", "to-red-500/20"],
    content: [
      "Design and build miniature satellites for atmospheric research and space technology competitions. Members work end-to-end — from mission profile and structural design to telemetry, recovery, and the final competition presentation.",
      "The track mirrors real space-engineering workflows: defining requirements, integrating sensors and microcontrollers, validating the system under deadline pressure, and defending the design before judges.",
      "It is the same pipeline that took MUBL to a 1st-place finish at the national UzCanSat competition — a proving ground for systems thinking and hands-on hardware skill.",
    ],
  },
  {
    id: "robotics",
    title: "Robotics & Autonomous Systems",
    category: "Robotics",
    subcategory: "Autonomous Systems",
    timeAgo: "Build track",
    location: "MUBL",
    image: roboticsCompetitionImage,
    gradientColors: ["from-blue-500/30", "to-cyan-500/20"],
    content: [
      "Create intelligent robots and autonomous vehicles for a range of applications — from control systems and motion planning to embedded prototyping and sensor fusion.",
      "Members move from breadboard experiments to competition-grade builds, learning the control logic, integration, and debugging discipline that real autonomous systems demand.",
      "This track feeds directly into MUBL's competition work, including its international showing at Teknofest, where the team placed 4th among global student engineering teams.",
    ],
  },
  {
    id: "ai",
    title: "AI-Driven Engineering Solutions",
    category: "Artificial Intelligence",
    subcategory: "Applied Machine Learning",
    timeAgo: "Research track",
    location: "MUBL",
    image: roboticsAiImage,
    gradientColors: ["from-violet-500/30", "to-fuchsia-500/20"],
    content: [
      "Develop machine learning models and AI applications that solve real engineering challenges — spanning computer vision, natural language processing, and deep learning.",
      "Members frame problems, build and train models, and deploy them into working prototypes, learning how AI integrates with the hardware and systems built across the other tracks.",
      "The focus is applied research: turning state-of-the-art techniques into tools that make MUBL's robotics, aerospace, and design work measurably better.",
    ],
  },
  {
    id: "3d-design",
    title: "3D Design & CAD-Based Development",
    category: "Design",
    subcategory: "CAD & Prototyping",
    timeAgo: "Maker track",
    location: "MUBL",
    image: workshop3dImage,
    gradientColors: ["from-emerald-500/30", "to-teal-500/20"],
    content: [
      "Master 3D modeling and CAD-based hardware development for rapid prototyping — translating ideas into printable, testable parts.",
      "Members learn parametric design, tolerancing, and the print-and-iterate loop that turns a sketch into a functional component in hours instead of weeks.",
      "It is the connective tissue of the club: the enclosures, mounts, and mechanisms that make the CanSat, robotics, and AI projects physically real.",
    ],
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

            <NewsCards
              newsCards={projectCards}
              className="relative z-10 mx-0 max-w-none bg-transparent p-0 text-[color:var(--title-color)]"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
