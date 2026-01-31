import { Target, Lightbulb, Users, GraduationCap, Info } from "lucide-react";
import { Layout } from "@/components/Layout";

const features = [
  {
    icon: Target,
    title: "Hands-on Engineering",
    description: "Move from theory to real engineering by working on projects that address real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Applied Research",
    description: "Collaborate in multidisciplinary teams to solve challenges using robotics, AI, and modern tools.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from national and international experts who expose students to global standards.",
  },
  {
    icon: GraduationCap,
    title: "Modern Practices",
    description: "Gain exposure to cutting-edge engineering practices and industry-standard workflows.",
  },
];

const timeline = [
  { year: "2023", title: "Club Founded", description: "MUBL was established at New Uzbekistan University" },
  { year: "2024", title: "First Competition", description: "Participated in UzCanSat and achieved 3rd place" },
  { year: "2024", title: "SpaceFest Launch", description: "Organized the first SpaceFest event" },
  { year: "2025", title: "International Recognition", description: "Competed at Teknofest and Young Leaders Symposium" },
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>About</span>
          </div>
        </div>

        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Tomorrow's{" "}
              <span className="text-primary">Engineers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              MUBL Club is a vibrant community at New Uzbekistan University where students 
              transform innovative ideas into real-world solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mb-20">
            <div className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-card">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help students move from theory to real engineering by working on hands-on 
                projects that address real-world problems. Through mentorship and lectures from 
                national and international experts, we expose students to global standards and 
                modern engineering practices.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our <span className="text-primary">Journey</span>
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-6 border-l border-border pl-6">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function FeatureCard({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
