import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const partnershipBenefits = [
  "Access to top engineering talent at NewUU",
  "Co-branded events, workshops, and hackathons",
  "Joint R&D and competition collaborations",
  "Mentorship and recruiting pipeline",
  "Visibility across MUBL channels and partners",
  "Direct line to a fast-moving student team",
];

const partnershipTypes = [
  "Industry / Corporate",
  "Academic / Research",
  "Government / Agency",
  "Mentorship",
  "Sponsorship",
  "Other",
];

interface FormState {
  organization: string;
  contact: string;
  role: string;
  email: string;
  phone: string;
  website: string;
  type: string;
  interest: string;
}

interface FormErrors {
  organization?: string;
  contact?: string;
  email?: string;
  type?: string;
  interest?: string;
}

const emptyForm: FormState = {
  organization: "",
  contact: "",
  role: "",
  email: "",
  phone: "",
  website: "",
  type: "",
  interest: "",
};

export default function PartnerApply() {
  usePageMeta({
    title: "Apply for Partnership",
    description:
      "Apply to partner with MUBL — industry, academic, and mentorship collaborations with a student-led engineering club at New Uzbekistan University.",
  });

  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.organization.trim()) e.organization = "Organization name is required";
    if (!form.contact.trim()) e.contact = "Contact person is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.type.trim()) e.type = "Select a partnership type";
    if (!form.interest.trim()) e.interest = "Tell us about your partnership interest";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange<K extends keyof FormState>(field: K, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [field as keyof FormErrors]: undefined }));
    }
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
                Application <span className="text-primary">received</span>
              </h1>
              <p className="page-copy mx-auto mt-5 max-w-md">
                Thanks for your interest in partnering with MUBL. Our team will review your application and reach out within a few working days.
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
                  <div className="eyebrow">Partnerships</div>
                  <h1 className="page-title mt-4 text-[color:var(--title-color)] md:mt-5">
                    Apply as a <span className="text-primary">Partner</span>
                  </h1>
                  <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                    Tell us about your organization and how you'd like to collaborate. We work with industry, academic, and mentorship partners across robotics, AI, and space technology.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md">
                  <h2 className="mb-6 text-2xl font-semibold text-[color:var(--title-color)]">What partners get</h2>
                  <ul className="space-y-5">
                    {partnershipBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-lg text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="self-start rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_42px_rgba(2,6,23,0.22)] backdrop-blur-md md:p-8">
                <h2 className="mb-8 text-2xl font-semibold text-[color:var(--title-color)] md:text-3xl lg:text-[3rem] lg:leading-none">
                  Partnership Form
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="field-label">Organization</label>
                      <Input
                        placeholder="Your organization"
                        value={form.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className={`field-input h-14 rounded-2xl ${errors.organization ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                      />
                      {errors.organization && <p className="mt-1.5 text-xs text-red-400">{errors.organization}</p>}
                    </div>
                    <div>
                      <label className="field-label">Website</label>
                      <Input
                        placeholder="https://"
                        value={form.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        className="field-input h-14 rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="field-label">Contact Person</label>
                      <Input
                        placeholder="Full name"
                        value={form.contact}
                        onChange={(e) => handleChange("contact", e.target.value)}
                        className={`field-input h-14 rounded-2xl ${errors.contact ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                      />
                      {errors.contact && <p className="mt-1.5 text-xs text-red-400">{errors.contact}</p>}
                    </div>
                    <div>
                      <label className="field-label">Role</label>
                      <Input
                        placeholder="Your role"
                        value={form.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        className="field-input h-14 rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="field-label">Email</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`field-input h-14 rounded-2xl ${errors.email ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="field-label">Phone</label>
                      <Input
                        placeholder="Optional"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="field-input h-14 rounded-2xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Partnership Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className={`field-input h-14 w-full rounded-2xl bg-transparent px-4 ${errors.type ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    >
                      <option value="" className="bg-slate-900">Select a type</option>
                      {partnershipTypes.map((t) => (
                        <option key={t} value={t} className="bg-slate-900">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.type && <p className="mt-1.5 text-xs text-red-400">{errors.type}</p>}
                  </div>

                  <div>
                    <label className="field-label">Partnership Interest</label>
                    <Textarea
                      placeholder="Tell us what you'd like to collaborate on, scope, timing, and any specifics..."
                      rows={6}
                      value={form.interest}
                      onChange={(e) => handleChange("interest", e.target.value)}
                      className={`field-input min-h-40 rounded-2xl ${errors.interest ? "border-red-500/60 focus-visible:ring-red-500/40" : ""}`}
                    />
                    {errors.interest && <p className="mt-1.5 text-xs text-red-400">{errors.interest}</p>}
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
                      "Submit Partnership Application"
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
