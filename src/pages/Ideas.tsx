import { ArrowRight, Lightbulb, Users, Trophy, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const benefits = [
  { icon: Users, title: "Find Your Team", description: "We'll help you connect with motivated teammates who share your vision" },
  { icon: Trophy, title: "Compete & Win", description: "Participate in national and international competitions with club support" },
  { icon: Rocket, title: "Build Something Real", description: "Turn your concept into a functional prototype that solves real problems" },
];

const highlights = [
  "You don't need tools or a team yet",
  "You just need an idea — even a rough one",
  "We will help you find a team and participate in competitions",
];

export default function Ideas() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section">
          <div className="max-w-6xl">
            <div className="section-shell">
              <div className="mb-14 max-w-4xl">
                <div className="eyebrow">
                  <Lightbulb className="h-4 w-4" />
                  Submit Your Idea
                </div>
                <h1 className="page-title mt-5">
                  Have a project idea? <span className="text-primary">Let&apos;s build it together.</span>
                </h1>
                <p className="page-copy mt-5">
                  You do not need a finished plan or a complete team. Bring the raw idea and the club will help shape it into a real engineering path.
                </p>
              </div>

              <div className="mb-12 space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{h}</span>
                </div>
              ))}
            </div>

              <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {benefits.map((b, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-sm text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>

              <div className="glass-panel text-center p-8 md:p-12">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Submit your project idea</h2>
                <p className="mx-auto mb-8 mt-4 max-w-xl text-slate-300">Let&apos;s turn your idea into something real together.</p>
                <Button size="lg" className="rounded-full bg-primary px-8 hover:bg-primary/90" asChild>
                  <a href="https://forms.gle/Ts7cKwWE5yxNi4zt9" target="_blank" rel="noopener noreferrer">
                    Submit Your Idea <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
        </section>
      </div>
    </Layout>
  );
}
