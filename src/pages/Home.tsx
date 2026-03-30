import { ArrowRight, Users, Rocket, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HeroSection from "@/components/ui/hero-section";

// Import showcase images
import cansatProject from "@/assets/showcase/cansat-project.png";
import uzcansat2025 from "@/assets/showcase/uzcansat-2025.png";
import teknofest2025 from "@/assets/showcase/teknofest-2025.png";
import spacefest2025 from "@/assets/showcase/spacefest-2025.jpg";
import youngLeaders2025 from "@/assets/showcase/young-leaders-2025.png";
import { Button } from "@/components/ui/button";

const showcaseImages = [
  { src: cansatProject, alt: "CanSat Project", label: "CanSat" },
  { src: uzcansat2025, alt: "UzCanSat 2025 1st Place", label: "UzCanSat 2025" },
  { src: teknofest2025, alt: "Teknofest 2025", label: "Teknofest 2025" },
  { src: spacefest2025, alt: "SpaceFest 2025", label: "SpaceFest 2025" },
  { src: youngLeaders2025, alt: "Young Leaders 2025", label: "Young Leaders 2025" },
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="px-6 py-12 lg:py-20">
          <div className="max-w-6xl">
            <HeroSection
              title={
                <>
                  Research. Build.{" "}
                  <span className="text-primary">Publish.</span>{" "}
                  Lead.
                </>
              }
              subtitle="From theory to real engineering. MUBL Club actively works on technology competitions, applied research, and building functional prototypes that grow into real products."
              actions={[
                {
                  text: "Join Us",
                  href: "/join",
                  variant: "default",
                },
                {
                  text: "Get in Touch",
                  href: "mailto:mubl@newuu.uz",
                  variant: "outline",
                },
              ]}
              stats={[
                { value: "50+", label: "Active Members", icon: <Users className="h-5 w-5" /> },
                { value: "15+", label: "Projects Built", icon: <Rocket className="h-5 w-5" /> },
                { value: "5+", label: "Competition Wins", icon: <Trophy className="h-5 w-5" /> },
              ]}
              images={[
                cansatProject,
                spacefest2025,
                uzcansat2025,
              ]}
            />

            {/* What We've Done - Image Showcase */}
            <div className="mb-16 mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                What We've Done
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
                {showcaseImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl border border-primary/30 aspect-[4/3] group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs font-medium text-foreground">{image.label}</span>
                    </div>
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
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
                <p>
                  Our mission is to help students move{" "}
                  <span className="text-foreground font-medium">from theory to real engineering</span>{" "}
                  by working on{" "}
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
                  experts, we expose students to global standards
                  and modern engineering practices.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-full border-primary/50 px-8 hover:bg-primary/10"
                  asChild
                >
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
