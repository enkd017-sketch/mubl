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
        <section className="page-section page-section-wide pt-4 md:pt-6">
          <div className="page-shell-screen">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="max-w-3xl">
                  <div className="eyebrow">Join MUBL</div>
                  <h1 className="page-title mt-4 text-white md:mt-5">
                    Join <span className="text-primary">MUBL</span>
                  </h1>
                  <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                    Become part of our engineering community.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md">
                  <h2 className="mb-6 text-2xl font-semibold text-white">Member Benefits</h2>
                  <ul className="space-y-5">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-lg text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="self-start rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md md:p-8">
                <h2 className="mb-8 text-2xl font-semibold text-white md:text-3xl lg:text-[3rem] lg:leading-none">
                  Application Form
                </h2>
                <form className="space-y-5">
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
                    <Textarea placeholder="Tell us about yourself..." rows={5} className="field-input min-h-40 rounded-2xl" />
                  </div>
                  <Button className="w-full rounded-full bg-primary py-6 text-base text-slate-950 shadow-[0_0_28px_rgba(37,99,235,0.35)] hover:bg-primary/90">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
