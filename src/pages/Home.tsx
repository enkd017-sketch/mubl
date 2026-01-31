import { ArrowRight, Rocket, Users, Trophy, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

// Import gallery images for showcase
import cansatTeam from "@/assets/gallery/cansat-team.jpg";
import roboticsCompetition from "@/assets/gallery/robotics-competition.jpg";
import printing3d from "@/assets/gallery/3d-printing.jpg";

const showcaseImages = [
  { src: cansatTeam, alt: "CanSat Project" },
  { src: printing3d, alt: "3D Printing" },
  { src: roboticsCompetition, alt: "Robotics Competition" },
];

export default function Home() {
  return (
    <Layout showBackground>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-12 lg:py-20">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Research. Build.{" "}
              <span className="text-primary">Publish.</span>{" "}
              Lead.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From theory to real engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 border border-primary/50 rounded-full px-8"
                asChild
              >
                <Link to="/join">Join Us</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border/50 rounded-full px-8 hover:bg-muted/20"
                asChild
              >
                <Link to="/connect">Get in Touch</Link>
              </Button>
            </div>

            {/* Who We Are */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                MUBL is a student-led engineering club focused on technology 
                competitions, applied research, and building functional prototypes 
                that grow into real products. Our members collaborate in multidisciplinary teams 
                to solve real-world problems using robotics, AI, and modern engineering tools.
              </p>
            </div>

            {/* What We've Done - Image Showcase */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                What We've Done
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {showcaseImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl border border-primary/30 aspect-[4/3]"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary/50 px-8 hover:bg-primary/10"
                  asChild
                >
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <span className="text-primary">Impact</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Our mission is to help students move{" "}
                  <span className="text-foreground font-medium">from theory to real engineering</span>{" "}
                  through{" "}
                  <span className="text-foreground font-medium">hands-on projects</span>{" "}
                  that address real-world problems.
                </p>
                <p>
                  Through{" "}
                  <span className="text-foreground font-medium">mentorship</span>{" "}
                  and lectures from{" "}
                  <span className="text-foreground font-medium">national</span>{" "}
                  and{" "}
                  <span className="text-foreground font-medium">international</span>{" "}
                  experts, we expose members to global engineering standards 
                  and modern practices.
                </p>
              </div>
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary/50 px-8 hover:bg-primary/10"
                  asChild
                >
                  <Link to="/about">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <StatCard icon={Users} value="50+" label="Active Members" />
              <StatCard icon={Rocket} value="15+" label="Projects Built" />
              <StatCard icon={Trophy} value="5+" label="Competition Wins" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="p-3 rounded-lg bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
