import { ArrowRight, Lightbulb, Users, Trophy, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const benefits = [
  {
    icon: Users,
    title: "Find Your Team",
    description: "We'll help you connect with motivated teammates who share your vision",
  },
  {
    icon: Trophy,
    title: "Compete & Win",
    description: "Participate in national and international competitions with club support",
  },
  {
    icon: Rocket,
    title: "Build Something Real",
    description: "Turn your concept into a functional prototype that solves real problems",
  },
];

const highlights = [
  "You don't need tools or a team yet",
  "You just need an idea — even a rough one",
  "We will help you find a team and participate in competitions",
];

export default function Ideas() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="px-6 py-12">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Submit Your Idea</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Have a project idea?{" "}
              <span className="text-primary">Let's build it together.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MUBL Engineering Club is a hands-on tech community focused on robotics, AI, and real-world 
              engineering projects. We bring together motivated students who want to move from theory to 
              real engineering by building, testing, and competing.
            </p>
          </div>

          {/* Highlights */}
          <div className="max-w-4xl mb-12">
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* About MUBL */}
          <div className="max-w-4xl mb-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why MUBL?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At MUBL, we actively work on technology competitions, applied research, and functional 
                prototypes that grow into real products. Our members have experience in national and 
                international competitions, workshops, and innovation events, and we believe in learning by doing.
              </p>
              <p className="text-lg text-foreground font-medium">
                💡 If you've ever thought "I have an idea, but I don't know how to start or who to build it with" 
                — this club is for you.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-1 bg-primary/5">
              <div className="bg-card rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  📩 Submit your project idea
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's turn your idea into something real — together. The best projects will be 
                  selected for development support from our team.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 rounded-full px-8"
                  asChild
                >
                  <a href="https://forms.gle/Ts7cKwWE5yxNi4zt9" target="_blank" rel="noopener noreferrer">
                    Submit Your Idea
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We will feature submitted ideas on our website and help bring the best ones to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
