import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";

const benefits = [
  "Access to MUBL lab and equipment",
  "Mentorship from experienced members",
  "Project funding support",
  "Networking with industry professionals",
  "Competition preparation and support",
  "Technical workshops and training",
];

export default function Join() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section">
          <div className="max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="eyebrow">Join MUBL</div>
              <h1 className="page-title mt-5">
                Join <span className="text-primary">MUBL</span>
              </h1>
              <p className="page-copy mt-5">Become part of our engineering community.</p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="order-2 glass-panel p-8 lg:order-1">
                <h2 className="mb-6 text-2xl font-semibold text-white">Member Benefits</h2>
                <ul className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 glass-panel p-6 md:p-8 lg:order-2">
                <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">Application Form</h2>
                <form className="space-y-4">
                  <div>
                    <label className="field-label">Full Name</label>
                    <Input placeholder="Your name" className="field-input h-14 rounded-2xl" />
                  </div>
                  <div>
                    <label className="field-label">Email</label>
                    <Input type="email" placeholder="you@newuu.uz" className="field-input h-14 rounded-2xl" />
                  </div>
                  <div>
                    <label className="field-label">Student ID</label>
                    <Input placeholder="Your student ID" className="field-input h-14 rounded-2xl" />
                  </div>
                  <div>
                    <label className="field-label">Why do you want to join MUBL?</label>
                    <Textarea placeholder="Tell us about yourself..." rows={5} className="field-input min-h-36 rounded-2xl" />
                  </div>
                  <Button className="w-full rounded-full bg-primary py-6 text-base hover:bg-primary/90">Submit Application</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
