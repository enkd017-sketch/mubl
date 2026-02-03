import { ArrowRight, Users, Handshake, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

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

export default function Connect() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to{" "}
              <span className="text-primary">Join Us?</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              If you're a student from New Uzbekistan University, MUBL can support your 
              project by covering necessary expenses using the club's budget.
            </p>
          </div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl">
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {/* Submit Project */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-1 bg-primary/5">
              <div className="h-full bg-card rounded-xl p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Submit a Project</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  Have an idea? Submit your project through our form and we'll help you 
                  refine it, find a team, and prepare for development.
                </p>
              <Button className="bg-primary hover:bg-primary/90 w-full rounded-full" asChild>
                <a href="https://forms.gle/Ts7cKwWE5yxNi4zt9" target="_blank" rel="noopener noreferrer">
                  Submit Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              </div>
            </div>

            {/* Join as Member */}
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Join as Member</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                Become part of our vibrant community with regular technical and social events.
              </p>
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link to="/join">Apply Now</Link>
              </Button>
            </div>

            {/* Collaborate */}
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Collaborate / Partner</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                Interested in partnering with MUBL? We welcome industry collaborations.
              </p>
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link to="/partner">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
