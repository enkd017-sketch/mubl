import { ArrowRight, Mail, Users, Handshake, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    icon: "🛠️",
    title: "Project Support",
    description: "Funding for electronics, components, and materials within budget",
  },
  {
    icon: "💡",
    title: "Idea Refinement",
    description: "Guidance to develop and polish your project concepts",
  },
  {
    icon: "👥",
    title: "Team Building",
    description: "Help finding the right teammates for your projects",
  },
  {
    icon: "🎓",
    title: "Mentorship",
    description: "Turn concepts into working prototypes with expert guidance",
  },
];

export function ConnectSection() {
  return (
    <section id="connect" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm font-medium text-secondary">Get Involved</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to
            <span className="gradient-text"> Join Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're a student from New Uzbekistan University, MUBL can support your 
            project by covering necessary expenses using the club's budget.
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {offerings.map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Submit Project */}
          <div className="relative overflow-hidden rounded-2xl gradient-bg p-1">
            <div className="h-full bg-card rounded-[calc(1rem-4px)] p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Submit a Project</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                Have an idea? Submit your project through our form and we'll help you 
                refine it, find a team, and prepare for development.
              </p>
              <Button className="gradient-bg glow w-full group">
                Submit Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Join as Member */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col card-shadow hover:card-shadow-hover transition-all">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Join as Member</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Become part of our vibrant community with regular technical and social events.
            </p>
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Apply Now
            </Button>
          </div>

          {/* Collaborate */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col card-shadow hover:card-shadow-hover transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Handshake className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Collaborate / Partner</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Interested in partnering with MUBL? We welcome industry collaborations.
            </p>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
