import { BookOpen } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section flex min-h-[calc(100vh-8rem)] items-center">
          <div className="section-shell mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
              <BookOpen className="h-10 w-10" />
            </div>
            <div className="eyebrow">Blog</div>
            <h1 className="page-title mt-6">
              Publications are <span className="text-primary">coming soon</span>
            </h1>
            <p className="page-copy mx-auto mt-5 max-w-2xl">
              MUBL&apos;s blog will showcase research notes, competition lessons, technical breakdowns, and member writing once the editorial pipeline is live.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
