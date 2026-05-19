import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import mublLogo from "@/assets/mubl-logo.png";
import mublWhiteLogo from "@/assets/mubl-white-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Programs", href: "/programs" },
  { name: "Highlights", href: "/highlights" },
  { name: "Articles", href: "/articles", badge: "Soon" },
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

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const logoSrc = mounted && resolvedTheme === "dark" ? mublWhiteLogo : mublLogo;

  return (
    <>
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
                  className={`relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-foreground"
                      : "text-foreground/75 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {link.badge}
                    </span>
                  )}
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
                className="relative z-50 rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay + slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-background/95 backdrop-blur-xl pt-20 shadow-2xl lg:hidden"
            >
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? "bg-primary/10 text-foreground"
                          : "text-foreground/75 hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.length }}
                  className="mt-4"
                >
                  <Button className="w-full rounded-full bg-primary text-primary-foreground shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:bg-primary/90" asChild>
                    <Link to="/join" onClick={() => setIsOpen(false)}>Join MUBL</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
