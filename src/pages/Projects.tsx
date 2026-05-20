import { usePageMeta } from "@/hooks/use-page-meta";
import { Layout } from "@/components/Layout";
import NeuralBackground from "@/components/ui/flow-field-background";
import { NewsCards, type NewsCard } from "@/components/ui/news-cards";

const projectCards: NewsCard[] = [];

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
