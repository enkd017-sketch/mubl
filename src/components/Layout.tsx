import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const hideCtaBanner = pathname === "/join" || pathname === "/partner";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,transparent_75%,rgba(255,255,255,0.02))]" />
      <Navbar />
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        {!hideCtaBanner && <CtaBanner />}
        <Footer />
      </div>
    </div>
  );
}
