import { Layout } from "@/components/Layout";
import uzcansat2025 from "@/assets/showcase/uzcansat-2025.png";
import teknofest2025 from "@/assets/showcase/teknofest-2025.png";
import youngLeaders2025 from "@/assets/showcase/young-leaders-2025.png";
import spacefest2025 from "@/assets/showcase/spacefest-2025.jpg";

const achievements = [
  {
    place: "1st Place",
    title: "UzCanSat 2025",
    description: "Won the national CanSat competition with innovative satellite design.",
    imageSrc: uzcansat2025,
    imageAlt: "MUBL team at UzCanSat 2025.",
  },
  {
    place: "4th Place",
    title: "Teknofest 2025",
    description: "Competed against international teams at Turkey's largest tech festival.",
    imageSrc: teknofest2025,
    imageAlt: "MUBL team presenting at Teknofest 2025.",
  },
  {
    place: "Finalists",
    title: "Young Leaders 2025",
    description: "Selected as finalists for the Young Leaders Symposium in Abu Dhabi.",
    imageSrc: youngLeaders2025,
    imageAlt: "MUBL finalists at Young Leaders 2025.",
  },
  {
    place: "Organizer",
    title: "SpaceFest 2025",
    description: "Successfully organized Uzbekistan's premier space technology festival.",
    imageSrc: spacefest2025,
    imageAlt: "SpaceFest 2025 event stage and participants.",
  },
];

export default function Achievements() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Achievements</div>
              <h1 className="page-title mt-5">
                Proof of <span className="text-primary">excellence</span>
              </h1>
              <p className="page-copy mt-5">
                Results matter because they show the club can turn learning into performance on national and international stages.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/55 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-5"
                >
                  <div className="overflow-hidden rounded-[1.35rem]">
                    <img
                      src={a.imageSrc}
                      alt={a.imageAlt}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-64"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <div className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {a.place}
                    </div>
                    <h3 className="mb-3 text-[1.8rem] font-semibold leading-tight tracking-tight text-white">
                      {a.title}
                    </h3>
                    <p className="max-w-xl text-base leading-8 text-slate-300">
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
