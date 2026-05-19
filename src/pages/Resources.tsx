import { usePageMeta } from "@/hooks/use-page-meta";
import { Download, Play, Book, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/Layout";

const cadFiles = [
  { name: "CanSat Chassis v2.0", description: "Complete 3D printable chassis for CanSat competition satellites", format: "STEP, STL", downloads: 234 },
  { name: "Robotic Arm Assembly", description: "6-DOF robotic arm with servo mounts and gripper mechanism", format: "STEP, IGES", downloads: 189 },
  { name: "Drone Frame Kit", description: "Lightweight quadcopter frame optimized for FPV racing", format: "STL, F3D", downloads: 156 },
  { name: "Arduino Shield Template", description: "Custom PCB shield template for Arduino Uno projects", format: "STEP, DXF", downloads: 312 },
];

const tutorials = [
  { title: "Introduction to CanSat Development", description: "Complete guide to building your first CanSat", duration: "2h 30min", level: "Beginner", lessons: 12 },
  { title: "ROS2 for Robotics", description: "Learn Robot Operating System 2 for autonomous robots", duration: "4h 15min", level: "Intermediate", lessons: 18 },
  { title: "Machine Learning with TensorFlow", description: "Build and deploy ML models for engineering", duration: "3h 45min", level: "Intermediate", lessons: 15 },
  { title: "PCB Design with KiCad", description: "Design professional PCBs from schematic to manufacturing", duration: "2h 00min", level: "Beginner", lessons: 10 },
];

const materials = [
  { title: "MUBL Engineering Handbook", description: "Comprehensive guide covering all MUBL project areas", type: "PDF" as const },
  { title: "Competition Preparation Guide", description: "Tips and strategies for tech competitions", type: "PDF" as const },
  { title: "Arduino Documentation", description: "Official Arduino reference materials", type: "External Link" as const, url: "https://docs.arduino.cc" },
  { title: "ROS Wiki", description: "Robot Operating System documentation", type: "External Link" as const, url: "https://wiki.ros.org" },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-500",
  Intermediate: "bg-yellow-500/10 text-yellow-500",
  Advanced: "bg-red-500/10 text-red-500",
};

export default function Resources() {
  usePageMeta({ title: "Resources", description: "CAD files, tutorials, and learning materials curated for MUBL members." });
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Resources</div>
              <h1 className="page-title mt-5">
                Learning <span className="text-primary">resources</span>
              </h1>
              <p className="page-copy mt-5">CAD files, tutorials, and learning materials curated for members building across multiple disciplines.</p>
            </div>

            <Tabs defaultValue="cad">
              <TabsList className="mb-8 grid w-full grid-cols-3 rounded-2xl border border-white/8 bg-white/[0.04] p-1">
                <TabsTrigger value="cad">CAD Files</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
              </TabsList>

              <TabsContent value="cad">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {cadFiles.map((file, index) => (
                    <div key={index} className="glass-card p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-[color:var(--title-color)]">{file.name}</h3>
                        <Button size="sm" variant="outline" className="flex-shrink-0 rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)]"><Download className="h-4 w-4" /></Button>
                      </div>
                      <p className="mb-3 text-sm text-slate-400">{file.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{file.format}</span>
                        <span className="text-primary">{file.downloads} downloads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tutorials">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {tutorials.map((tutorial, index) => (
                    <div key={index} className="glass-card p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4 text-primary" />
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[tutorial.level]}`}>{tutorial.level}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                      </div>
                      <h3 className="mb-2 font-semibold text-[color:var(--title-color)]">{tutorial.title}</h3>
                      <p className="mb-3 text-sm text-slate-400">{tutorial.description}</p>
                      <span className="text-xs text-slate-400">{tutorial.lessons} lessons</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="materials">
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="glass-card flex items-center justify-between p-4">
                      <div className="flex items-start gap-3">
                        {material.type === "PDF" ? <Book className="h-5 w-5 text-primary mt-0.5" /> : <ExternalLink className="h-5 w-5 text-primary mt-0.5" />}
                        <div>
                          <h3 className="font-semibold text-[color:var(--title-color)]">{material.title}</h3>
                          <p className="text-sm text-slate-400">{material.description}</p>
                        </div>
                      </div>
                      {material.type === "PDF" ? (
                        <Button size="sm" variant="outline" className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)] flex-shrink-0">Download</Button>
                      ) : (
                        <Button size="sm" variant="outline" className="rounded-full border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] text-[color:var(--title-color)] hover:bg-[color:var(--surface-bg-strong)] hover:text-[color:var(--title-color)] flex-shrink-0" asChild>
                          <a href={material.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 glass-panel p-8 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h4 className="mb-2 text-xl font-semibold text-[color:var(--title-color)]">Contribute to Resources</h4>
              <p className="mx-auto mb-6 max-w-md text-slate-300">Share your CAD files, tutorials, or learning materials with the MUBL community.</p>
              <Button className="rounded-full bg-primary px-8 hover:bg-primary/90">Submit Resources</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
