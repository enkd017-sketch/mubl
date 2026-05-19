import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, GraduationCap, Rocket, Sparkles, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Button } from "@/components/ui/button";
import HeroSection9 from "@/components/ui/hero-section-9";
import teknofest2025 from "@/assets/showcase/teknofest-2025.png";
import spacefest2025 from "@/assets/showcase/spacefest-2025.jpg";
import uzcansat2025 from "@/assets/showcase/uzcansat-2025.png";
import youngLeaders2025 from "@/assets/showcase/young-leaders-2025.png";

const pathways = [
  {
    title: "Competition pipeline",
    description: "From campus labs to Teknofest and UzCanSat, the club builds under real deadlines and public evaluation.",
    href: "/highlights",
  },
  {
    title: "Applied projects",
    description: "Members ship robotics, aerospace, AI, and CAD work that starts in the lab and matures into portfolio-grade output.",
    href: "/projects",
  },
  {
    title: "Mentorship and events",
    description: "Workshops, bootcamps, and student-led events create the rhythm that keeps technical growth consistent.",
    href: "/highlights",
  },
];

const homeStats = [
  { value: "50+", label: "Active members", icon: <Users className="h-5 w-5" /> },
  { value: "15+", label: "Projects built", icon: <Rocket className="h-5 w-5" /> },
  { value: "5+", label: "Competition wins", icon: <Trophy className="h-5 w-5" /> },
];

const homeHighlights = [
  {
    badge: "Organizer",
    title: "Space Fest 2025",
    image: spacefest2025,
    alt: "SpaceFest 2025 event stage.",
  },
  {
    badge: "1st Place",
    title: "UzCanSat 2025",
    image: uzcansat2025,
    alt: "MUBL team at UzCanSat 2025.",
  },
  {
    badge: "4th Place",
    title: "Teknofest 2025",
    image: teknofest2025,
    alt: "MUBL team at Teknofest 2025.",
  },
  {
    badge: "Finalists",
    title: "Young Leaders 2025",
    image: youngLeaders2025,
    alt: "MUBL finalists at Young Leaders 2025.",
  },
];

const programStats = [
  { value: "560", label: "Applicants" },
  { value: "20", label: "Selected" },
  { value: "6 wk", label: "Bootcamp" },
];

export default function Home() {
  usePageMeta({ title: "Home", description: "MUBL is a student-led engineering club at New Uzbekistan University. We research, build, publish, and lead in robotics, AI, and space technology." });
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

        <PartnersSection />

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
                    <h2 className="mt-3 text-xl font-semibold text-[color:var(--title-color)]">
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
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl space-y-3">
                <div className="eyebrow">Highlights</div>
                <h2 className="section-title">
                  Events & <span className="text-primary">achievements</span>
                </h2>
                <p className="page-copy">
                  Competition wins, organized flagships, and lab moments — the standout year-in-review of MUBL.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-5 text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"
                asChild
              >
                <Link to="/highlights">
                  See all highlights
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {homeHighlights.map((h) => (
                <Link
                  key={h.title}
                  to="/highlights"
                  className="group glass-card overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={h.image}
                      alt={h.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      <Sparkles className="h-3 w-3" />
                      {h.badge}
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-[color:var(--title-color)]">
                      {h.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section pt-0">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-4">
                <div className="eyebrow">Programs</div>
                <h2 className="section-title">
                  MUBL <span className="text-primary">Bootcamp</span> — Batch 1, 2026
                </h2>
                <p className="page-copy">
                  Six weeks of intensive learning, creativity, and innovation at New Uzbekistan University — Artificial Intelligence, Robotics, and 3D Modeling, ending with working prototypes and an invitation to the Yosh Muhandis national final.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {programStats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-4 py-3 text-center"
                    >
                      <div className="text-2xl font-bold text-[color:var(--title-color)]">
                        {s.value}
                      </div>
                      <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--copy-muted)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    className="rounded-full bg-primary px-6 hover:bg-primary/90"
                    asChild
                  >
                    <Link to="/programs">
                      Explore programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-6 text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"
                    asChild
                  >
                    <a
                      href="https://bootcamp.mubl.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply to bootcamp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/Programs/Bootcamp/1.JPG"
                  alt="MUBL Bootcamp closing ceremony."
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <div className="space-y-3">
                  <img
                    src="/Programs/Bootcamp/2.JPG"
                    alt="MUBL Bootcamp prototype presentations."
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <img
                    src="/Programs/Bootcamp/3.JPG"
                    alt="MUBL Bootcamp jury and guests."
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <h3 className="text-lg font-semibold text-[color:var(--title-color)]">Mentorship pipeline</h3>
                  <p className="panel-copy mt-2">
                    Learn from senior members, invited experts, and competition-driven workflows that push beyond classroom pacing.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--title-color)]">Public outcomes</h3>
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
                className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-6 text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"
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
