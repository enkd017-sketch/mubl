import { BookOpen } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coming <span className="text-primary">Soon</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Our member publications and research articles are on the way. Stay tuned!
          </p>
        </div>
      </div>
    </Layout>
  );
}
