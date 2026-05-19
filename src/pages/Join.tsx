import { useState } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { CheckCircle, Loader2 } from "lucide-react";
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

interface FormErrors {
  name?: string;
  email?: string;
  studentId?: string;
  reason?: string;
}

export default function Join() {
  usePageMeta({ title: "Join MUBL", description: "Apply to join MUBL — Uzbekistan's student-led engineering club at New Uzbekistan University." });
  const [form, setForm] = useState({ name: "", email: "", studentId: "", reason: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.studentId.trim()) e.studentId = "Student ID is required";
    if (!form.reason.trim()) e.reason = "Please tell us why you want to join";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  if (submitted) {
    return (
      <Layout>
        <div className="page-frame">
          <section className="page-section flex min-h-[calc(100vh-8rem)] items-center">
            <div className="section-shell mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h1 className="page-title">
                Application <span className="text-primary">submitted</span>
              </h1>
              <p className="page-copy mx-auto mt-5 max-w-md">
                Thanks for applying to MUBL! We'll review your application and get back to you soon.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide pt-4 md:pt-6">
          <div className="page-shell-screen">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="max-w-3xl">
                  <div className="eyebrow">Join MUBL</div>
                  <h1 className="page-title mt-4 text-[color:var(--title-color)] md:mt-5">
                    Join <span className="text-primary">MUBL</span>
                  </h1>
                  <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                    Become part of our engineering community.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md">
                  <h2 className="mb-6 text-2xl font-semibold text-[color:var(--title-color)]">Member Benefits</h2>
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
                <h2 className="mb-8 text-2xl font-semibold text-[color:var(--title-color)] md:text-3xl lg:text-[3rem] lg:leading-none">
                  Application Form
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="field-label">Full Name</label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`field-input h-14 rounded-2xl ${errors.name ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="field-label">Email</label>
                    <Input
                      type="email"
                      placeholder="you@newuu.uz"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`field-input h-14 rounded-2xl ${errors.email ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="field-label">Student ID</label>
                    <Input
                      placeholder="Your student ID"
                      value={form.studentId}
                      onChange={(e) => handleChange("studentId", e.target.value)}
                      className={`field-input h-14 rounded-2xl ${errors.studentId ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    />
                    {errors.studentId && <p className="mt-1.5 text-xs text-red-400">{errors.studentId}</p>}
                  </div>
                  <div>
                    <label className="field-label">Why do you want to join MUBL?</label>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      rows={5}
                      value={form.reason}
                      onChange={(e) => handleChange("reason", e.target.value)}
                      className={`field-input min-h-40 rounded-2xl ${errors.reason ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    />
                    {errors.reason && <p className="mt-1.5 text-xs text-red-400">{errors.reason}</p>}
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary py-6 text-base text-slate-950 shadow-[0_0_28px_rgba(37,99,235,0.35)] hover:bg-primary/90 disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
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
