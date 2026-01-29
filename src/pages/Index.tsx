import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EventsSection } from "@/components/EventsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { GallerySection } from "@/components/GallerySection";
import { BlogSection } from "@/components/BlogSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <EventsSection />
        <AchievementsSection />
        <BlogSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
