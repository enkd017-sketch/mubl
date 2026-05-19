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

export function AboutSection() {
  return (
    <section id="about" className="page-section pt-4 md:pt-8">
      <div className="section-shell">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />
        <div className="relative space-y-12">
          <div className="max-w-3xl space-y-5">
            <div className="eyebrow">About MUBL</div>
            <h2 className="section-title">
              Why <span className="text-primary">MUBL</span> exists
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[color:var(--title-color)]">Our Mission</h3>
                  <p className="text-sm text-slate-400">From theory to real engineering</p>
                </div>
              </div>
              <p className="page-copy max-w-3xl">
                To help students move from theory to real engineering by working on hands-on projects that address real-world problems, backed by mentorship and exposure to global standards in robotics, AI, aerospace, and modern engineering practice.
              </p>
              <div className="mt-6 space-y-4">
                <p className="page-copy max-w-3xl">
                  MUBL, short for Mirzo Ulugh Beg&apos;s Legacy, was founded to honor the region&apos;s scientific heritage while preparing a new generation of engineers through real projects, real competitions, and real mentorship.
                </p>
                <p className="panel-copy max-w-3xl">
                  We believe students learn fastest when they build under pressure, collaborate across disciplines, and present their work on real stages.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title} className="glass-card p-5 md:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-blue-300">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-[color:var(--title-color)]">{value.title}</h4>
                  <p className="panel-copy mt-2">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
