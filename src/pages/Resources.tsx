import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileBox, 
  BookOpen, 
  Video, 
  FileText, 
  Cpu, 
  Rocket, 
  Bot, 
  Printer,
  ExternalLink,
  Clock,
  Users
} from "lucide-react";

const cadFiles = [
  {
    title: "CanSat Chassis v2.0",
    description: "Complete 3D printable chassis for CanSat competition satellites",
    category: "Aerospace",
    format: "STEP, STL",
    downloads: 234,
    icon: Rocket,
  },
  {
    title: "Robotic Arm Assembly",
    description: "6-DOF robotic arm with servo mounts and gripper mechanism",
    category: "Robotics",
    format: "STEP, IGES",
    downloads: 189,
    icon: Bot,
  },
  {
    title: "Drone Frame Kit",
    description: "Lightweight quadcopter frame optimized for FPV racing",
    category: "Aerospace",
    format: "STL, F3D",
    downloads: 156,
    icon: Rocket,
  },
  {
    title: "Arduino Shield Template",
    description: "Custom PCB shield template for Arduino Uno projects",
    category: "Electronics",
    format: "STEP, DXF",
    downloads: 312,
    icon: Cpu,
  },
  {
    title: "3D Printer Enclosure",
    description: "Modular enclosure design for Ender 3 series printers",
    category: "3D Printing",
    format: "STL, STEP",
    downloads: 278,
    icon: Printer,
  },
  {
    title: "Sensor Mount Kit",
    description: "Universal mounting brackets for common sensors (IMU, GPS, cameras)",
    category: "Electronics",
    format: "STL, STEP",
    downloads: 145,
    icon: Cpu,
  },
];

const tutorials = [
  {
    title: "Introduction to CanSat Development",
    description: "Complete guide to building your first CanSat from scratch",
    duration: "2h 30min",
    level: "Beginner",
    lessons: 12,
    category: "Aerospace",
  },
  {
    title: "ROS2 for Robotics",
    description: "Learn Robot Operating System 2 for autonomous robot development",
    duration: "4h 15min",
    level: "Intermediate",
    lessons: 18,
    category: "Robotics",
  },
  {
    title: "Machine Learning with TensorFlow",
    description: "Build and deploy ML models for engineering applications",
    duration: "3h 45min",
    level: "Intermediate",
    lessons: 15,
    category: "AI",
  },
  {
    title: "PCB Design with KiCad",
    description: "Design professional PCBs from schematic to manufacturing",
    duration: "2h 00min",
    level: "Beginner",
    lessons: 10,
    category: "Electronics",
  },
  {
    title: "Advanced 3D Printing Techniques",
    description: "Multi-material printing, supports, and post-processing",
    duration: "1h 45min",
    level: "Advanced",
    lessons: 8,
    category: "3D Printing",
  },
  {
    title: "Embedded Systems with STM32",
    description: "Program ARM microcontrollers for real-time applications",
    duration: "5h 00min",
    level: "Advanced",
    lessons: 22,
    category: "Electronics",
  },
];

const learningMaterials = [
  {
    title: "MUBL Engineering Handbook",
    description: "Comprehensive guide covering all MUBL project areas and best practices",
    type: "PDF",
    pages: 156,
    icon: BookOpen,
  },
  {
    title: "Competition Preparation Guide",
    description: "Step-by-step preparation for Teknofest, CanSat, and other competitions",
    type: "PDF",
    pages: 48,
    icon: FileText,
  },
  {
    title: "Research Paper Writing Template",
    description: "LaTeX template and guidelines for publishing technical papers",
    type: "ZIP",
    pages: 12,
    icon: FileText,
  },
  {
    title: "Safety Guidelines for Lab Work",
    description: "Essential safety protocols for electronics and mechanical work",
    type: "PDF",
    pages: 24,
    icon: FileText,
  },
  {
    title: "Project Management Toolkit",
    description: "Templates and tools for managing engineering projects effectively",
    type: "ZIP",
    pages: 35,
    icon: FileText,
  },
  {
    title: "Component Sourcing Guide",
    description: "List of recommended suppliers for electronics and mechanical parts",
    type: "PDF",
    pages: 18,
    icon: BookOpen,
  },
];

const externalResources = [
  {
    title: "Arduino Documentation",
    url: "https://docs.arduino.cc",
    description: "Official Arduino reference and tutorials",
  },
  {
    title: "ROS Wiki",
    url: "https://wiki.ros.org",
    description: "Robot Operating System documentation",
  },
  {
    title: "Fusion 360 Learning",
    url: "https://www.autodesk.com/products/fusion-360/learn",
    description: "Official CAD software tutorials",
  },
  {
    title: "TensorFlow Tutorials",
    url: "https://www.tensorflow.org/tutorials",
    description: "Machine learning guides and examples",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/20 text-green-600 dark:text-green-400";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400";
    case "Advanced":
      return "bg-red-500/20 text-red-600 dark:text-red-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="gradient-bg mb-4">Resources Hub</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn, Build, <span className="gradient-text">Innovate</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Access our collection of CAD files, tutorials, and learning materials 
              created by MUBL members to accelerate your engineering journey.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4">
          <Tabs defaultValue="cad" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="cad" className="flex items-center gap-2">
                <FileBox className="h-4 w-4" />
                <span className="hidden sm:inline">CAD Files</span>
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Tutorials</span>
              </TabsTrigger>
              <TabsTrigger value="materials" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Materials</span>
              </TabsTrigger>
            </TabsList>

            {/* CAD Files Tab */}
            <TabsContent value="cad">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cadFiles.map((file, index) => (
                  <Card key={index} className="group hover:card-shadow-hover transition-all duration-300 border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg gradient-bg">
                          <file.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <Badge variant="secondary">{file.category}</Badge>
                      </div>
                      <CardTitle className="text-lg mt-4">{file.title}</CardTitle>
                      <CardDescription>{file.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>Format: {file.format}</span>
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {file.downloads}
                        </span>
                      </div>
                      <Button className="w-full gradient-bg group-hover:glow transition-all">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className="group hover:card-shadow-hover transition-all duration-300 border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{tutorial.category}</Badge>
                        <Badge className={getLevelColor(tutorial.level)}>{tutorial.level}</Badge>
                      </div>
                      <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {tutorial.lessons} lessons
                        </span>
                      </div>
                      <Button className="w-full gradient-bg group-hover:glow transition-all">
                        <Video className="h-4 w-4 mr-2" />
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Materials Tab */}
            <TabsContent value="materials">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Documents Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents & Guides
                  </h3>
                  <div className="space-y-4">
                    {learningMaterials.map((material, index) => (
                      <Card key={index} className="group hover:card-shadow-hover transition-all duration-300 border-border/50">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-muted">
                            <material.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{material.title}</h4>
                            <p className="text-sm text-muted-foreground">{material.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span>{material.type}</span>
                              <span>{material.pages} pages</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="shrink-0">
                            <Download className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* External Resources Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    External Resources
                  </h3>
                  <div className="space-y-4">
                    {externalResources.map((resource, index) => (
                      <Card key={index} className="group hover:card-shadow-hover transition-all duration-300 border-border/50">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-muted">
                            <ExternalLink className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{resource.title}</h4>
                            <p className="text-sm text-muted-foreground">{resource.description}</p>
                          </div>
                          <Button size="sm" variant="outline" className="shrink-0" asChild>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              Visit
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Contribute CTA */}
                  <Card className="mt-6 gradient-bg text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <Users className="h-10 w-10 mx-auto mb-4 opacity-90" />
                      <h4 className="text-lg font-semibold mb-2">Contribute to Resources</h4>
                      <p className="text-sm opacity-90 mb-4">
                        Share your CAD files, tutorials, or learning materials with the MUBL community.
                      </p>
                      <Button variant="secondary" className="bg-background/20 hover:bg-background/30 text-primary-foreground border-0">
                        Submit Resources
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
