import { Trophy, Medal, GraduationCap, Star } from "lucide-react";
import { Layout } from "@/components/Layout";

const achievements = [
  {
    icon: Trophy,
    place: "1st Place",
    title: "UzCanSat 2025",
    description: "Won the national CanSat competition with innovative satellite design.",
  },
  {
    icon: Medal,
    place: "4th Place",
    title: "Teknofest 2025",
    description: "Competed against international teams at Turkey's largest tech festival.",
  },
  {
    icon: GraduationCap,
    place: "Finalists",
    title: "Young Leaders 2025",
    description: "Selected as finalists for the Young Leaders Symposium in Abu Dhabi.",
  },
  {
    icon: Star,
    place: "Organizer",
    title: "SpaceFest 2025",
    description: "Successfully organized Uzbekistan's premier space technology festival.",
  },
];

export default function Achievements() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="h-4 w-4" />
            <span>Achievements</span>
          </div>
        </div>

        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proof of{" "}
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our members consistently excel in national and international competitions, 
              proving that theory combined with practice leads to success.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function AchievementCard({ icon: Icon, place, title, description }: {
  icon: any;
  place: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      {/* Place Badge */}
      <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-3 bg-primary text-primary-foreground">
        {place}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
