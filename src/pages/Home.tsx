import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Button } from "@/components/ui/button";
import HeroSection9 from "@/components/ui/hero-section-9";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

// All event/program photos from the public folder, used for the hero cursor trail.
const heroPhotos = [
  "/Highlights/Spacefest/DSC02688.JPG",
  "/Highlights/Spacefest/DSC02706.JPG",
  "/Highlights/Spacefest/DSC02841.JPG",
  "/Highlights/Spacefest/DSC02888.JPG",
  "/Highlights/Spacefest/DSC02942.jpg",
  "/Highlights/Cosmonautics/participants.jpg",
  "/Highlights/Cosmonautics/robo_zone.jpg",
  "/Highlights/Cosmonautics/VR_zone.jpg",
  "/Highlights/Cosmonautics/Guest_Speaker.jpg",
  "/Highlights/Cosmonautics/discussion.jpg",
  "/Highlights/Cosmonautics/awards.jpg",
  "/Highlights/Teknofest/IMG-20250918-WA0007.jpg",
  "/Highlights/Teknofest/IMG-20250918-WA0037.jpg",
  "/Highlights/Teknofest/IMG-20250918-WA0057.jpg",
  "/Programs/Bootcamp/1.JPG",
  "/Programs/Bootcamp/2.JPG",
  "/Programs/Bootcamp/3.JPG",
  "/Programs/Bootcamp/4.JPG",
];

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
    title: "Mentorship and programs",
    description: "Workshops, bootcamps, and student-led events create the rhythm that keeps technical growth consistent.",
    href: "/programs",
  },
];

const spacefestTestimonials = [
  {
    name: "Space Fest 2025",
    designation: "Organizer · A day of space exploration",
    quote:
      "Our team Mirzo Ulugh Beg's Legacy, with the support of New Uzbekistan University and Uzcosmos, organized Space Fest 2025 — a day full of science, creativity, and teamwork. More than 200 participants joined Zakovat, Debate, Art Workshop, and Speaker Sessions with scientists and a future astronaut.",
    src: "/Highlights/Spacefest/DSC02688.JPG",
  },
  {
    name: "Full-day Agenda",
    designation: "October 4 · 12:00 → 18:00",
    quote:
      "From registration at noon to the closing awards ceremony — Zakovat Quiz, Cosmo Day Debate, Art Workshop, Board Games, and an interactive coffee break with satellite, telemetry, and robotics stands.",
    src: "/Highlights/Spacefest/DSC02706.JPG",
  },
  {
    name: "Prof. Luciano Rezzolla",
    designation: "Book Presentation · The Irresistible Attraction of Gravity",
    quote:
      "Professor of Relativistic Astrophysics at Goethe University Frankfurt and member of the team that produced the first-ever image of a black hole — author of 300+ papers and several standard astrophysics textbooks.",
    src: "/Highlights/Spacefest/DSC02841.JPG",
  },
  {
    name: "Prof. Bobomurat J. Ahmedov",
    designation: "Guest Talk · Modern Problems in Astrophysics",
    quote:
      "Head of Theoretical Astrophysics at the Ulugh Beg Astronomical Institute and a member of the Uzbekistan Academy of Sciences — Scopus Researcher of the Year (2018), Web of Science Science Leader (2017), Fellow of TWAS.",
    src: "/Highlights/Spacefest/DSC02888.JPG",
  },
  {
    name: "Awards & Community",
    designation: "200+ participants · NewUU",
    quote:
      "An awards ceremony closed the day — celebrating the students, mentors, and partners who turned SpaceFest into Uzbekistan's premier space-tech festival.",
    src: "/Highlights/Spacefest/DSC02942.jpg",
  },
];

const programImageVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const programStats = [
  { value: "560", label: "Applicants" },
  { value: "20", label: "Selected" },
  { value: "6 week", label: "Bootcamp" },
];

export default function Home() {
  usePageMeta({ title: "Home", description: "MUBL is a student-led engineering club at New Uzbekistan University. We research, build, publish, and lead in robotics, AI, and space technology." });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const carouselColors = isDark
    ? {
        name: "#f8fafc",
        designation: "#cbd5e1",
        testimony: "#e2e8f0",
        arrowBackground: "#0b1224",
        arrowForeground: "#f1f5f9",
        arrowHoverBackground: "#2563eb",
      }
    : {
        name: "#0f172a",
        designation: "#475569",
        testimony: "#1e293b",
        arrowBackground: "#0f172a",
        arrowForeground: "#f8fafc",
        arrowHoverBackground: "#2563eb",
      };

  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section pb-6 md:pb-8">
          <HeroSection9
            title={
              <>
                Are you an Engineer? <span className="text-primary">Prove it!</span>
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
                text: "Join as Partner",
                href: "/partner/apply",
                variant: "outline",
              },
              {
                text: "Our Story",
                href: "#about",
                variant: "outline",
              },
            ]}
            images={heroPhotos}
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
                    <p className="text-xs uppercase tracking-[0.22em] text-blue-700 dark:text-blue-200/70">
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

            <div className="mb-6 max-w-3xl">
              <h3 className="section-title">
                Space <span className="text-primary">Fest</span> 2025
              </h3>
            </div>
            <div className="glass-panel p-4 md:p-8">
              <CircularTestimonials
                testimonials={spacefestTestimonials}
                autoplay
                colors={carouselColors}
                fontSizes={{
                  name: "1.75rem",
                  designation: "1rem",
                  quote: "1.05rem",
                }}
              />
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

              <motion.div
                className="relative min-h-[420px] sm:min-h-[520px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}
              >
                <motion.div
                  variants={programImageVariants}
                  whileHover={{ scale: 1.035, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="group absolute right-0 top-0 h-[260px] w-[72%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)] sm:h-[320px]"
                >
                  <img
                    src="/Programs/Bootcamp/1.JPG"
                    alt="MUBL Bootcamp closing ceremony."
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  variants={programImageVariants}
                  whileHover={{ scale: 1.035 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="group absolute bottom-0 right-[9%] h-[210px] w-[58%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)] sm:h-[250px]"
                >
                  <img
                    src="/Programs/Bootcamp/2.JPG"
                    alt="MUBL Bootcamp prototype presentations."
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  variants={programImageVariants}
                  whileHover={{ scale: 1.035, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="group absolute left-0 top-[34%] h-[230px] w-[43%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)] sm:h-[280px]"
                >
                  <img
                    src="/Programs/Bootcamp/3.JPG"
                    alt="MUBL Bootcamp jury and guests."
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <div className="pointer-events-none absolute left-10 top-8 h-20 w-20 rounded-full border border-blue-300/15 bg-blue-400/10 blur-2xl" />
                <div className="pointer-events-none absolute bottom-10 left-8 h-px w-28 bg-gradient-to-r from-transparent via-blue-400/45 to-transparent dark:via-blue-300/50" />
              </motion.div>
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
