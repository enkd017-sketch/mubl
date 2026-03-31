import { Globe, Heart, Lightbulb, Target, Users } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "Hands-on Engineering",
    description: "Move from theory to real engineering by working on projects that address real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Push boundaries and explore new solutions using modern tools, fast prototyping, and open-ended experimentation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work in multidisciplinary teams where software, hardware, design, and research move together.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "Learn from national and international experts who help students grow into confident builders.",
  },
];

const timeline = [
  { year: "2023", title: "Club Founded", description: "MUBL was established at New Uzbekistan University to bridge theory and practice in engineering education." },
  { year: "2024", title: "First Competition Success", description: "The team entered UzCanSat and secured an early milestone that shaped the club's aerospace direction." },
  { year: "2024", title: "SpaceFest Launch", description: "MUBL organized SpaceFest and brought together students, engineers, and space enthusiasts across Uzbekistan." },
  { year: "2025", title: "UzCanSat Champions", description: "The club earned 1st place at UzCanSat 2025, validating its competition pipeline and engineering rigor." },
  { year: "2025", title: "International Stage", description: "MUBL reached Teknofest in Turkey and the Young Leaders Symposium in Abu Dhabi, expanding its global presence." },
];

export function AboutSection() {
  return (
    <section id="about" className="page-section pt-4 md:pt-8">
      <div className="section-shell">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />
        <div className="relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-5">
              <div className="eyebrow">About MUBL</div>
              <h2 className="section-title">
                Why <span className="text-primary">MUBL</span> exists
              </h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <p className="page-copy">
                MUBL, short for Mirzo Ulugh Beg&apos;s Legacy, was founded to honor the region&apos;s scientific heritage while preparing a new generation of engineers through real projects, real competitions, and real mentorship.
              </p>
              <p className="panel-copy">
                We believe students learn fastest when they build under pressure, collaborate across disciplines, and present their work on real stages.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                  <p className="text-sm text-slate-400">From theory to real engineering</p>
                </div>
              </div>
              <p className="page-copy max-w-3xl">
                To help students move from theory to real engineering by working on hands-on projects that address real-world problems, backed by mentorship and exposure to global standards in robotics, AI, aerospace, and modern engineering practice.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title} className="glass-card p-5 md:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-blue-300">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                  <p className="panel-copy mt-2">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">Journey</div>
                <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                  A timeline of momentum
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-400">
                The club has grown through competitions, campus events, and international exposure rather than static club administration.
              </p>
            </div>

            <div className="relative space-y-5 before:absolute before:left-[1.35rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/10 md:before:left-[1.55rem]">
              {timeline.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid gap-4 pl-12 md:grid-cols-[84px_1fr] md:pl-0"
                >
                  <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/15 text-[0.65rem] font-semibold tracking-[0.2em] text-blue-200 md:left-[1rem]">
                    <span className="h-2 w-2 rounded-full bg-blue-200" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200/70">
                    {item.year}
                  </div>
                  <div className="glass-card p-5">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="panel-copy mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
