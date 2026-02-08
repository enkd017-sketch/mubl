import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const registrationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").max(255),
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  currentStatus: z.string().min(1, "Please select your current status"),
  universityOrWorkplace: z.string().trim().min(1, "University or workplace is required").max(200),
  questionsForSpeaker: z.string().max(1000).optional(),
});

export function EventRegistrationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    currentStatus: "",
    universityOrWorkplace: "",
    questionsForSpeaker: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = registrationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("event_registrations").insert({
        email: formData.email.trim(),
        full_name: formData.fullName.trim(),
        current_status: formData.currentStatus,
        university_or_workplace: formData.universityOrWorkplace.trim(),
        questions_for_speaker: formData.questionsForSpeaker.trim() || null,
        event_name: "Quantum Machine Learning and Quantum Simulations",
      });

      if (error) throw error;

      toast.success("Registration successful! See you at the event.");
      setFormData({
        email: "",
        fullName: "",
        currentStatus: "",
        universityOrWorkplace: "",
        questionsForSpeaker: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-16">
      <div className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Event Header */}
        <div className="p-6 lg:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            OFFLINE
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            QUANTUM MACHINE LEARNING AND QUANTUM SIMULATIONS
          </h2>
          
          <div className="mb-6">
            <p className="text-primary font-semibold text-lg">Fyodor Amanov</p>
            <p className="text-muted-foreground">UNESCO Quantum 100</p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-primary font-medium">Friday,</p>
                <p className="text-muted-foreground text-sm">11 February, 2025</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Starting at</p>
                <p className="text-muted-foreground text-sm">2 pm</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">New Uzbekistan University, UCA</p>
                <p className="text-muted-foreground text-sm">(2nd floor)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="p-6 lg:p-8 border-t border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Register Now
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Email | Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="bg-background/50"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="bg-background/50"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Row 2: Current Status | University or Workplace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentStatus">Current Status *</Label>
                <Select
                  value={formData.currentStatus}
                  onValueChange={(value) => setFormData({ ...formData, currentStatus: value })}
                >
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university_student">University Student</SelectItem>
                    <SelectItem value="working_professional">Working Professional</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentStatus && (
                  <p className="text-sm text-destructive">{errors.currentStatus}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="universityOrWorkplace">Your University or Workplace *</Label>
                <Input
                  id="universityOrWorkplace"
                  value={formData.universityOrWorkplace}
                  onChange={(e) => setFormData({ ...formData, universityOrWorkplace: e.target.value })}
                  placeholder="Enter your university or workplace"
                  className="bg-background/50"
                />
                {errors.universityOrWorkplace && (
                  <p className="text-sm text-destructive">{errors.universityOrWorkplace}</p>
                )}
              </div>
            </div>

            {/* Row 3: Questions for Speaker */}
            <div className="space-y-2">
              <Label htmlFor="questionsForSpeaker">
                Do you have any specific questions for the speaker beforehand?
              </Label>
              <Textarea
                id="questionsForSpeaker"
                value={formData.questionsForSpeaker}
                onChange={(e) => setFormData({ ...formData, questionsForSpeaker: e.target.value })}
                placeholder="Optional: Enter any questions you'd like to ask"
                className="bg-background/50 min-h-[100px]"
              />
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? "Registering..." : "Register for Event"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
