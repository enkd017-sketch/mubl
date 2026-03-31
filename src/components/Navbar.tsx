import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mublLogo from "@/assets/mubl-logo.png";

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
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={mublLogo} alt="MUBL Logo" className="h-10 w-auto rounded-full" />
            <span className="hidden text-lg font-semibold tracking-[0.18em] text-white sm:block">
              MUBL
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/6 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="rounded-full bg-primary px-5 text-primary-foreground shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:bg-primary/90" asChild>
              <Link to="/join">Join MUBL</Link>
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="animate-fade-in border-t border-white/10 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/6 hover:text-white"
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
