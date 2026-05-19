import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="border-t border-white/6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent py-16">
      <div className="container px-4 text-center">
        <h2 className="text-2xl font-semibold text-[color:var(--title-color)] md:text-3xl">
          Ready to build something real?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-slate-400">
          Join a community of students turning ambition into prototypes, competition results, and real engineering experience.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            className="rounded-full bg-primary px-7 shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:bg-primary/90"
            asChild
          >
            <Link to="/join">
              Apply to MUBL
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-7 text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"
            asChild
          >
            <Link to="/projects">See Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
