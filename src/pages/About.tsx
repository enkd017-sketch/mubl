import { Target, Lightbulb, Users, Heart, Globe } from "lucide-react";
import { Layout } from "@/components/Layout";

const coreValues = [
  {
    icon: Target,
    title: "Hands-on Engineering",
    description: "Move from theory to real engineering by working on projects that address real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Push boundaries and explore new solutions using cutting-edge technology.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work in multidisciplinary teams to combine diverse skills and perspectives.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "Learn from national and international experts who guide students to excellence.",
  },
];

const timeline = [
  { year: "2023", title: "Club Founded", description: "MUBL was established at New Uzbekistan University with a vision to bridge theory and practice in engineering education." },
  { year: "2024", title: "First Competition Success", description: "Participated in UzCanSat competition and achieved 3rd place, marking our first milestone in aerospace." },
  { year: "2024", title: "SpaceFest Launch", description: "Successfully organized the first SpaceFest event, bringing together space enthusiasts from across Uzbekistan." },
  { year: "2025", title: "UzCanSat Champions", description: "Won 1st place at UzCanSat 2025, demonstrating our growth in satellite technology." },
  { year: "2025", title: "International Stage", description: "Competed at Teknofest in Turkey and presented at Young Leaders Symposium in Abu Dhabi." },
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why <span className="text-primary">MUBL</span> Exists
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                MUBL (Mirzo Ulugh Beg's Legacy) was founded to honor the scientific heritage of 
                Central Asia while preparing the next generation of engineers and innovators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that students learn best by doing. That's why we focus on real projects, 
                real competitions, and real mentorship from industry experts.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Our <span className="text-primary">History</span>
              </h2>
              <div className="relative">
                <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-6 relative">
                      <div className="flex-shrink-0 w-20 h-10 rounded-full bg-primary/20 flex items-center justify-center z-10">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="flex-1 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Core <span className="text-primary">Values</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help students move from theory to real engineering by working on hands-on 
                projects that address real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
