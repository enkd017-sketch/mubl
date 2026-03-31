import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import mublLogo from "@/assets/mubl-logo.png";
import mublWhiteLogo from "@/assets/mubl-white-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Achievements", href: "/achievements" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Ideas", href: "/ideas" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? mublWhiteLogo : mublLogo;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="MUBL Logo" className="h-10 w-auto rounded-full" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-foreground"
                    : "text-foreground/75 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button className="rounded-full bg-primary px-5 text-primary-foreground shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:bg-primary/90" asChild>
              <Link to="/join">Join MUBL</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="animate-fade-in border-t border-border/80 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-foreground"
                      : "text-foreground/75 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/join" onClick={() => setIsOpen(false)}>Join MUBL</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
