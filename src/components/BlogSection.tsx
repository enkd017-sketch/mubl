import { Calendar, User, ArrowRight, BookOpen, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "CanSat Telemetry System Design: From Concept to Competition",
    excerpt: "A comprehensive guide on designing reliable telemetry systems for CanSat projects, including sensor selection, data transmission protocols, and ground station setup.",
    author: "Amir Karimov",
    date: "Jan 15, 2025",
    category: "Research",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Implementing PID Control for Autonomous Line-Following Robots",
    excerpt: "Learn how to tune PID controllers for smooth and accurate line following using affordable components.",
    author: "Dilnoza Umarova",
    date: "Jan 10, 2025",
    category: "Robotics",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Introduction to Computer Vision with OpenCV and Python",
    excerpt: "Getting started with image processing and object detection using OpenCV library.",
    author: "Jasur Toshev",
    date: "Jan 5, 2025",
    category: "AI",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "3D Printing Best Practices for Functional Prototypes",
    excerpt: "Tips and tricks for creating strong, precise 3D printed parts for engineering applications.",
    author: "Nodira Azimova",
    date: "Dec 28, 2024",
    category: "CAD",
    readTime: "4 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Research: "bg-primary/10 text-primary",
  Robotics: "bg-secondary/10 text-secondary",
  AI: "bg-accent/10 text-accent",
  CAD: "bg-primary/10 text-primary",
};

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blog & Research</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Member
              <span className="gradient-text"> Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Research articles, tutorials, and insights from our members on robotics, 
              AI, aerospace, and engineering.
            </p>
          </div>
          <Button variant="outline" className="group self-start md:self-auto">
            <PenTool className="mr-2 h-4 w-4" />
            Write for MUBL
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-8">
          <FeaturedBlogCard post={blogPosts[0]} />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gradient-bg glow group">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedBlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all cursor-pointer">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
      <div className="p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">Featured</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <span className="text-primary font-medium">{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}
