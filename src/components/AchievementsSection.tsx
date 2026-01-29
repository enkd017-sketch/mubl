import { Trophy, Medal, GraduationCap, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    place: "1st Place",
    title: "UzCanSat 2025",
    description: "Won the national CanSat competition with innovative satellite design.",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Medal,
    place: "4th Place",
    title: "Teknofest 2025",
    description: "Competed against international teams at Turkey's largest tech festival.",
    color: "from-primary to-secondary",
  },
  {
    icon: GraduationCap,
    place: "Finalists",
    title: "Young Leaders 2025",
    description: "Selected as finalists for the Young Leaders Symposium in Abu Dhabi.",
    color: "from-secondary to-accent",
  },
  {
    icon: Star,
    place: "Organizer",
    title: "SpaceFest 2025",
    description: "Successfully organized Uzbekistan's premier space technology festival.",
    color: "from-accent to-primary",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Proof of
            <span className="gradient-text"> Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our members consistently excel in national and international competitions, 
            proving that theory combined with practice leads to success.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ icon: Icon, place, title, description, color, index }: {
  icon: any;
  place: string;
  title: string;
  description: string;
  color: string;
  index: number;
}) {
  return (
    <div 
      className="group relative p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 text-center"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:glow group-hover:scale-110 transition-all`}>
        <Icon className="h-8 w-8 text-primary-foreground" />
      </div>
      
      {/* Place Badge */}
      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r ${color} text-primary-foreground`}>
        {place}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
