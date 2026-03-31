import { Calendar as CalendarIcon, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

import spacefestImage from "@/assets/showcase/spacefest-2025.jpg";
import bootcampImage from "@/assets/events/stem-bootcamp.png";
import roboticsImage from "@/assets/events/robotics.jpg";
import teknofestEventImage from "@/assets/events/teknofest.jpg";
import roboticsAiImage from "@/assets/events/robotics&ai.jpg";
import quantumImage from "@/assets/events/quantum.jpg";
import cosmicImage from "@/assets/events/cosmic.jpg";
import astronautImage from "@/assets/events/astranout.jpg";
import workshop3dImage from "@/assets/events/3D_workshop.jpg";

const featuredPastEvents = [
  {
    title: "SpaceFest 2025",
    description:
      "A flagship space technology festival at New Uzbekistan University that brought students, builders, and space enthusiasts into one live showcase.",
    date: "October 4",
    location: "New Uzbekistan University",
    image: spacefestImage,
    link: "https://spacefest.newuu.uz",
    cta: "View event",
  },
  {
    title: "MUBL STEM Bootcamp",
    description:
      "An intensive bootcamp focused on robotics, AI, and 3D printing fundamentals for students moving from curiosity into hands-on making.",
    date: "Seasonal cohort",
    location: "MUBL Lab",
    image: bootcampImage,
    link: "https://bootcamp.mubl.uz",
    cta: "View program",
  },
];

const galleryPastEvents = [
  {
    title: "Robotics Lab Sessions",
    description:
      "Practical robotics sessions built around prototyping, control logic, and competition-style teamwork in the lab.",
    date: "Workshop series",
    location: "Engineering Lab",
    image: roboticsImage,
    alt: "Students working together during a robotics lab session.",
  },
  {
    title: "Astronaut Inspiration Talk",
    description:
      "A space-focused speaker session designed to connect student ambition with real aerospace stories and long-term technical direction.",
    date: "Guest session",
    location: "Campus Auditorium",
    image: astronautImage,
    alt: "Audience and speaker during the astronaut inspiration talk.",
  },
  {
    title: "3D Design Workshop",
    description:
      "Hands-on CAD and model-building practice that helped members translate ideas into printable, testable parts.",
    date: "Hands-on workshop",
    location: "Prototype Studio",
    image: workshop3dImage,
    alt: "Participants learning 3D design and CAD in a workshop setting.",
  },
  {
    title: "Teknofest Team Moments",
    image: teknofestEventImage,
    alt: "MUBL team moments captured during Teknofest activities.",
  },
  {
    title: "Robotics & AI Session",
    image: roboticsAiImage,
    alt: "Students participating in a robotics and AI event session.",
  },
  {
    title: "Quantum Session",
    image: quantumImage,
    alt: "Students attending a quantum-focused event or lecture.",
  },
  {
    title: "Cosmic Gathering",
    image: cosmicImage,
    alt: "Participants gathered at a space-themed community event.",
  },
];

const upcomingEvents = [
  {
    title: "Reverse Engineering Sessions",
    description: "Learn how products work by taking them apart.",
    date: "Weekly",
    location: "New Uzbekistan University",
  },
  {
    title: "Movie Nights",
    description: "Tech-themed movie screenings to build community bonds.",
    date: "Monthly",
    location: "Campus Hub",
  },
];

export default function Events() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mb-12 max-w-3xl">
              <div className="eyebrow">Events</div>
              <h1 className="page-title mt-5">
                Learn, build, <span className="text-primary">connect</span>
              </h1>
              <p className="page-copy mt-5">
                Workshops, bootcamps, community nights, and flagship events create the environment where members keep showing up and improving together.
              </p>
            </div>

            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="section-title">Upcoming events</h2>
              </div>
              <div className="hidden rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 md:inline-flex">
                {upcomingEvents.length} active formats
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                    Upcoming
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-200">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 mt-14 flex items-end justify-between gap-4">
              <div>
                <h2 className="section-title">Past events</h2>
              </div>
              <div className="hidden rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 md:inline-flex">
                {featuredPastEvents.length + galleryPastEvents.length} archived moments
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {featuredPastEvents.map((event) => (
                <article
                  key={event.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/8 bg-black/30 shadow-[0_24px_80px_rgba(2,6,23,0.28)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-5 p-6 md:p-7">
                    <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
                        <CalendarIcon className="h-3 w-3 text-primary" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        {event.location}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {event.title}
                      </h3>
                      <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-slate-400 md:text-[15px]">
                        {event.description}
                      </p>
                    </div>
                    {event.link ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-white/90"
                      >
                        {event.cta ?? "View event"}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <ImageAutoSlider items={galleryPastEvents} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
