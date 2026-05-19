import { ArrowRight, Rocket, Trophy, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";

const bootcampGallery = [
  {
    src: "/Programs/Bootcamp/1.JPG",
    alt: "MUBL Bootcamp closing ceremony participants on stage.",
  },
  {
    src: "/Programs/Bootcamp/2.JPG",
    alt: "Participants presenting their prototypes during the bootcamp closing ceremony.",
  },
  {
    src: "/Programs/Bootcamp/3.JPG",
    alt: "Jury members and guests at the MUBL Bootcamp 2026 closing ceremony.",
  },
  {
    src: "/Programs/Bootcamp/4.JPG",
    alt: "Group photo with bootcamp participants and honored guests.",
  },
];

const jury = [
  {
    name: "Botir Kulliyev",
    role: "Lecturer, New Uzbekistan University",
  },
  {
    name: "Humoyun Raxmonov",
    role: "Representative, UzCosmos Agency",
  },
  {
    name: "Sirojiddin Bozorov",
    role: "Representative, Ziyo Forum Foundation",
  },
  {
    name: "Hilola Nazirova",
    role: "Vice-Rector, New Uzbekistan University",
  },
];

export default function Programs() {
  usePageMeta({
    title: "Programs",
    description:
      "MUBL Programs — cohort-based, hands-on engineering tracks. Starting with the MUBL Bootcamp.",
  });

  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Programs</div>
              <h1 className="page-title mt-5">
                MUBL <span className="text-primary">Programs</span>
              </h1>
              <p className="page-copy mt-5">
                Cohort-based programs that go deeper than one-off events. Selective intake, hands-on prototyping, real mentorship, and outcomes that open doors.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-10">
              <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                <ContainerStagger>
                  <ContainerAnimated className="eyebrow !mb-0">
                    Batch 1 · 2026
                  </ContainerAnimated>
                  <ContainerAnimated className="mt-5 text-3xl font-semibold tracking-tight text-[color:var(--title-color)] md:text-[2.4rem] md:leading-[1.05]">
                    MUBL Bootcamp Closing Ceremony 2026
                  </ContainerAnimated>
                  <ContainerAnimated className="mt-5 text-[color:var(--copy-color)] md:text-lg">
                    Six weeks of intensive learning, creativity, and innovation at New Uzbekistan University. Out of{" "}
                    <span className="font-semibold text-[color:var(--title-color)]">560 applicants</span>, only{" "}
                    <span className="font-semibold text-[color:var(--title-color)]">20 participants</span> were selected — making this the most competitive cohort yet.
                  </ContainerAnimated>
                  <ContainerAnimated className="mt-4 text-[color:var(--copy-muted)] md:text-base">
                    Participants explored Artificial Intelligence, Robotics, and 3D Modeling, then presented working prototypes at the closing ceremony.
                  </ContainerAnimated>

                  <ContainerAnimated className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="glass-card relative overflow-hidden p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[color:var(--title-color)]">
                        UzCosmos Internship
                      </h3>
                      <p className="panel-copy mt-2">
                        Three outstanding students earned Summer Internship offers at UzCosmos for their performance during the bootcamp.
                      </p>
                    </div>
                    <div className="glass-card relative overflow-hidden border-primary/40 p-5 ring-1 ring-primary/30">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[color:var(--title-color)]">
                        Yosh Muhandis · Final Round
                      </h3>
                      <p className="panel-copy mt-2">
                        Bootcamp participants received an invitation to the final round of the Yosh Muhandis national engineering competition — top projects receive sponsor and research-center support.
                      </p>
                    </div>
                  </ContainerAnimated>

                  <ContainerAnimated className="mt-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--copy-muted)]">
                      <Users className="h-4 w-4" />
                      Honored Jury & Guests
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {jury.map((j) => (
                        <li
                          key={j.name}
                          className="rounded-xl border border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] px-4 py-3"
                        >
                          <div className="text-sm font-semibold text-[color:var(--title-color)]">
                            {j.name}
                          </div>
                          <div className="text-xs text-[color:var(--copy-muted)]">
                            {j.role}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ContainerAnimated>

                  <ContainerAnimated className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full bg-primary px-7 hover:bg-primary/90">
                      <a
                        href="https://bootcamp.mubl.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply for next batch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </ContainerAnimated>
                </ContainerStagger>

                <GalleryGrid>
                  {bootcampGallery.map((item, index) => (
                    <GalleryGridCell index={index} key={item.src}>
                      <img
                        className="size-full object-cover object-center"
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                      />
                    </GalleryGridCell>
                  ))}
                </GalleryGrid>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
