import { UserPlus, CheckCircle } from "lucide-react";
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
      <div className="min-h-screen bg-background">
        <div className="px-6 py-12">
          <div className="max-w-4xl">
            {/* Section Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join{" "}
                <span className="text-primary">MUBL</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Become part of our engineering community and start building amazing projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Member Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Application Form
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="you@newuu.uz" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Student ID
                    </label>
                    <Input placeholder="Your student ID" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Why do you want to join MUBL?
                    </label>
                    <Textarea placeholder="Tell us about yourself and your interests..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
