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
      <div className="page-frame">
        <section className="page-section">
          <div className="section-shell max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Achievements</div>
              <h1 className="page-title mt-5">
                Proof of <span className="text-primary">excellence</span>
              </h1>
              <p className="page-copy mt-5">
                Results matter because they show the club can turn learning into performance on national and international stages.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((a, index) => (
                <div key={index} className="glass-card group relative p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-blue-500/15 text-blue-300 transition-all group-hover:scale-110">
                    <a.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{a.place}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
