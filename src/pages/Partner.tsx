import { Handshake, Building, GraduationCap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";

const partnershipTypes = [
  { icon: Building, title: "Industry Partners", description: "Collaborate on real-world projects and access emerging talent." },
  { icon: GraduationCap, title: "Academic Partners", description: "Joint research initiatives and knowledge exchange programs." },
  { icon: Lightbulb, title: "Mentorship", description: "Share your expertise and guide the next generation of engineers." },
];

export default function Partner() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Partner With <span className="text-primary">MUBL</span>
              </h1>
              <p className="text-lg text-muted-foreground">We welcome collaborations with industry partners, academic institutions, and mentors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 max-w-lg">
              <h2 className="text-xl font-bold text-foreground mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div><label className="block text-sm font-medium text-foreground mb-2">Organization Name</label><Input placeholder="Your organization" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Contact Person</label><Input placeholder="Your name" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Email</label><Input type="email" placeholder="email@company.com" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Partnership Interest</label><Textarea placeholder="Tell us about your partnership interest..." rows={4} /></div>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
