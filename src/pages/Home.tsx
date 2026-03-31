import { ArrowRight, GraduationCap, Rocket, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import HeroSection9 from "@/components/ui/hero-section-9";
import teknofest2025 from "@/assets/showcase/teknofest-2025.png";
import spacefest2025 from "@/assets/showcase/spacefest-2025.jpg";
import uzcansat2025 from "@/assets/showcase/uzcansat-2025.png";

const pathways = [
  {
    title: "Competition pipeline",
    description: "From campus labs to Teknofest and UzCanSat, the club builds under real deadlines and public evaluation.",
    href: "/achievements",
  },
  {
    title: "Applied projects",
    description: "Members ship robotics, aerospace, AI, and CAD work that starts in the lab and matures into portfolio-grade output.",
    href: "/projects",
  },
  {
    title: "Mentorship and events",
    description: "Workshops, bootcamps, and student-led events create the rhythm that keeps technical growth consistent.",
    href: "/events",
  },
];

const homeStats = [
  { value: "50+", label: "Active members", icon: <Users className="h-5 w-5" /> },
  { value: "15+", label: "Projects built", icon: <Rocket className="h-5 w-5" /> },
  { value: "5+", label: "Competition wins", icon: <Trophy className="h-5 w-5" /> },
];

export default function Home() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section pb-6 md:pb-8">
          <HeroSection9
            title={
              <>
                Join <span className="text-primary">MUBL</span> in building the next generation of engineering work.
              </>
            }
            subtitle="From competition hardware to applied research, MUBL gives students a place to turn technical ambition into real systems, public results, and a sharper engineering mindset."
            actions={[
              {
                text: "Join Us",
                href: "/join",
                variant: "default",
              },
              {
                text: "Our Story",
                href: "#about",
                variant: "outline",
              },
            ]}
            stats={homeStats}
            images={[teknofest2025, spacefest2025, uzcansat2025]}
          />
        </section>

        <section className="page-section pt-2">
          <div className="grid gap-4 md:grid-cols-3">
            {pathways.map((pathway) => (
              <Link
                key={pathway.title}
                to={pathway.href}
                className="glass-card group p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-blue-200/70">
                      Explore
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-white">
                      {pathway.title}
                    </h2>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p className="panel-copy mt-4">{pathway.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <AboutSection />

        <section className="page-section pt-0">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <div className="eyebrow">Why students stay</div>
                <h2 className="section-title">
                  A community that rewards curiosity with real momentum
                </h2>
                <p className="page-copy">
                  MUBL is not a passive club. Members prototype, prepare for competitions, study advanced tooling, and get exposed to the standards they will meet in industry and research.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Mentorship pipeline</h3>
                  <p className="panel-copy mt-2">
                    Learn from senior members, invited experts, and competition-driven workflows that push beyond classroom pacing.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Public outcomes</h3>
                  <p className="panel-copy mt-2">
                    The work is designed to leave evidence: prototypes, presentations, event leadership, and competition results.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button className="rounded-full bg-primary px-6 hover:bg-primary/90" asChild>
                <Link to="/join">Apply to MUBL</Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/10 bg-white/[0.04] px-6 text-white hover:bg-white/[0.08] hover:text-white"
                asChild
              >
                <Link to="/projects">See What We Build</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
