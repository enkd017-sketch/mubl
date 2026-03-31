import { FileText, Download, Play, Book, ExternalLink, Users } from "lucide-react";
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
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Learning <span className="text-primary">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground">CAD files, tutorials, and learning materials.</p>
            </div>

            <Tabs defaultValue="cad">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cad">CAD Files</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
              </TabsList>

              <TabsContent value="cad">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cadFiles.map((file, index) => (
                    <div key={index} className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-foreground">{file.name}</h3>
                        <Button size="sm" variant="outline" className="rounded-full flex-shrink-0"><Download className="h-4 w-4" /></Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{file.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{file.format}</span>
                        <span className="text-primary">{file.downloads} downloads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tutorials">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tutorials.map((tutorial, index) => (
                    <div key={index} className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4 text-primary" />
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[tutorial.level]}`}>{tutorial.level}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{tutorial.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{tutorial.description}</p>
                      <span className="text-xs text-muted-foreground">{tutorial.lessons} lessons</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="materials">
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        {material.type === "PDF" ? <Book className="h-5 w-5 text-primary mt-0.5" /> : <ExternalLink className="h-5 w-5 text-primary mt-0.5" />}
                        <div>
                          <h3 className="font-semibold text-foreground">{material.title}</h3>
                          <p className="text-sm text-muted-foreground">{material.description}</p>
                        </div>
                      </div>
                      {material.type === "PDF" ? (
                        <Button size="sm" variant="outline" className="rounded-full flex-shrink-0">Download</Button>
                      ) : (
                        <Button size="sm" variant="outline" className="rounded-full flex-shrink-0" asChild>
                          <a href={material.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-bold text-foreground mb-2">Contribute to Resources</h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">Share your CAD files, tutorials, or learning materials with the MUBL community.</p>
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">Submit Resources</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
