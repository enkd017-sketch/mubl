import { Users, Github, Linkedin, Mail } from "lucide-react";
import { Layout } from "@/components/Layout";

const members = [
  {
    name: "Amir Karimov",
    role: "Club President",
    expertise: "Aerospace Engineering",
    avatar: "AK",
  },
  {
    name: "Dilnoza Umarova",
    role: "Vice President",
    expertise: "Robotics & AI",
    avatar: "DU",
  },
  {
    name: "Jasur Toshev",
    role: "Technical Lead",
    expertise: "Machine Learning",
    avatar: "JT",
  },
  {
    name: "Nodira Azimova",
    role: "Design Lead",
    expertise: "CAD & 3D Printing",
    avatar: "NA",
  },
  {
    name: "Sardor Rahimov",
    role: "Project Manager",
    expertise: "Embedded Systems",
    avatar: "SR",
  },
  {
    name: "Gulnora Yusupova",
    role: "Events Coordinator",
    expertise: "Communications",
    avatar: "GY",
  },
];

export default function Members() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Members</span>
          </div>
        </div>

        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our{" "}
              <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The passionate students behind MUBL's projects and achievements.
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MemberCard({ name, role, expertise, avatar }: {
  name: string;
  role: string;
  expertise: string;
  avatar: string;
}) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
          {avatar}
        </div>
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-primary">{role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{expertise}</p>
      <div className="flex gap-2">
        <a 
          href="#" 
          className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
        </a>
        <a 
          href="#" 
          className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a 
          href="#" 
          className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
