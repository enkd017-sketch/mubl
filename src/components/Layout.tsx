import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ui/particle-background";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <ParticleBackground />
      <main className="relative z-10 flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
