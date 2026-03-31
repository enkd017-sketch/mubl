import { Building, GraduationCap, Lightbulb } from "lucide-react";
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
      <div className="page-frame">
        <section className="page-section">
          <div className="max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Partnerships</div>
              <h1 className="page-title mt-5">
                Partner with <span className="text-primary">MUBL</span>
              </h1>
              <p className="page-copy mt-5">We welcome collaborations with industry partners, academic institutions, and mentors.</p>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{type.title}</h3>
                  <p className="text-sm text-slate-400">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel max-w-2xl p-6 md:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-white">Get in Touch</h2>
              <form className="space-y-4">
                <div><label className="field-label">Organization Name</label><Input placeholder="Your organization" className="field-input h-14 rounded-2xl" /></div>
                <div><label className="field-label">Contact Person</label><Input placeholder="Your name" className="field-input h-14 rounded-2xl" /></div>
                <div><label className="field-label">Email</label><Input type="email" placeholder="email@company.com" className="field-input h-14 rounded-2xl" /></div>
                <div><label className="field-label">Partnership Interest</label><Textarea placeholder="Tell us about your partnership interest..." rows={5} className="field-input min-h-36 rounded-2xl" /></div>
                <Button className="w-full rounded-full bg-primary py-6 hover:bg-primary/90">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
