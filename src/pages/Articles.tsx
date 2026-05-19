import { BookOpen, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Articles() {
  usePageMeta({
    title: "Articles",
    description:
      "MUBL Articles — long-form writing on engineering, research, and student-built systems. Coming soon.",
  });

  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary">
                <BookOpen className="h-9 w-9" />
              </div>

              <div className="eyebrow justify-center">
                <Clock className="mr-2 inline h-3.5 w-3.5" />
                Coming soon
              </div>

              <h1 className="page-title mt-5">
                MUBL <span className="text-primary">Articles</span>
              </h1>

              <p className="page-copy mx-auto mt-5 max-w-2xl">
                A space for long-form writing from MUBL members — engineering deep-dives, research notes, build logs, and lessons learned from competitions and labs. We're putting the first pieces together now.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button className="rounded-full bg-primary px-6 hover:bg-primary/90" asChild>
                  <Link to="/highlights">Explore highlights</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-6 text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"
                  asChild
                >
                  <Link to="/projects">See projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
