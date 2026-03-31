import { Trophy, Medal, GraduationCap, Star } from "lucide-react";
import { Layout } from "@/components/Layout";

const achievements = [
  { icon: Trophy, place: "1st Place", title: "UzCanSat 2025", description: "Won the national CanSat competition with innovative satellite design." },
  { icon: Medal, place: "4th Place", title: "Teknofest 2025", description: "Competed against international teams at Turkey's largest tech festival." },
  { icon: GraduationCap, place: "Finalists", title: "Young Leaders 2025", description: "Selected as finalists for the Young Leaders Symposium in Abu Dhabi." },
  { icon: Star, place: "Organizer", title: "SpaceFest 2025", description: "Successfully organized Uzbekistan's premier space technology festival." },
];

export default function Achievements() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proof of <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Our members consistently excel in national and international competitions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((a, index) => (
                <div key={index} className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                    <a.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-3 bg-primary text-primary-foreground">{a.place}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
