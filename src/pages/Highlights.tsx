import { useTheme } from "next-themes";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Layout } from "@/components/Layout";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

import teknofest2025 from "@/assets/showcase/teknofest-2025.png";
import uzcansat2025 from "@/assets/showcase/uzcansat-2025.png";
import youngLeaders2025 from "@/assets/showcase/young-leaders-2025.png";

import roboticsImage from "@/assets/events/robotics.jpg";
import roboticsAiImage from "@/assets/events/robotics&ai.jpg";
import quantumImage from "@/assets/events/quantum.jpg";
import cosmicImage from "@/assets/events/cosmic.jpg";
import astronautImage from "@/assets/events/astranout.jpg";
import workshop3dImage from "@/assets/events/3D_workshop.jpg";
import teknofestEventImage from "@/assets/events/teknofest.jpg";

type Testimonial = {
  name: string;
  designation: string;
  quote: string;
  src: string;
};

const spacefestTestimonials: Testimonial[] = [
  {
    name: "Space Fest 2025",
    designation: "Organizer · A day of space exploration",
    quote:
      "Our team Mirzo Ulugh Beg's Legacy, with the support of New Uzbekistan University and Uzcosmos, organized Space Fest 2025 — a day full of science, creativity, and teamwork. More than 200 participants joined Zakovat, Debate, Art Workshop, and Speaker Sessions with scientists and a future astronaut.",
    src: "/Highlights/Spacefest/DSC02688.JPG",
  },
  {
    name: "Full-day Agenda",
    designation: "October 4 · 12:00 → 18:00",
    quote:
      "From registration at noon to the closing awards ceremony — Zakovat Quiz, Cosmo Day Debate, Art Workshop, Board Games, and an interactive coffee break with satellite, telemetry, and robotics stands.",
    src: "/Highlights/Spacefest/DSC02706.JPG",
  },
  {
    name: "Prof. Luciano Rezzolla",
    designation: "Book Presentation · The Irresistible Attraction of Gravity",
    quote:
      "Professor of Relativistic Astrophysics at Goethe University Frankfurt and member of the team that produced the first-ever image of a black hole — author of 300+ papers and several standard astrophysics textbooks.",
    src: "/Highlights/Spacefest/DSC02841.JPG",
  },
  {
    name: "Prof. Bobomurat J. Ahmedov",
    designation: "Guest Talk · Modern Problems in Astrophysics",
    quote:
      "Head of Theoretical Astrophysics at the Ulugh Beg Astronomical Institute and a member of the Uzbekistan Academy of Sciences — Scopus Researcher of the Year (2018), Web of Science Science Leader (2017), Fellow of TWAS.",
    src: "/Highlights/Spacefest/DSC02888.JPG",
  },
  {
    name: "Awards & Community",
    designation: "200+ participants · NewUU",
    quote:
      "An awards ceremony closed the day — celebrating the students, mentors, and partners who turned SpaceFest into Uzbekistan's premier space-tech festival.",
    src: "/Highlights/Spacefest/DSC02942.jpg",
  },
];

const teknofestTestimonials: Testimonial[] = [
  {
    name: "Teknofest 2025",
    designation: "4th Place · International",
    quote:
      "Competing against international teams at Turkey's largest tech festival, MUBL placed 4th — a milestone result on a global engineering stage.",
    src: teknofest2025,
  },
  {
    name: "On the Ground in Türkiye",
    designation: "Team moments · Teknofest 2025",
    quote:
      "From check-in to the competition floor — the MUBL team representing Uzbekistan among the world's top student engineering teams.",
    src: "/Highlights/Teknofest/IMG-20250918-WA0007.jpg",
  },
  {
    name: "Build & Compete",
    designation: "Engineering in action · Teknofest 2025",
    quote:
      "Final tuning, integration checks, and last-minute fixes — the hands-on engineering work behind a 4th-place international result.",
    src: "/Highlights/Teknofest/IMG-20250918-WA0037.jpg",
  },
  {
    name: "Team MUBL",
    designation: "Representing Uzbekistan · Teknofest 2025",
    quote:
      "Standing together at one of the world's largest aerospace and technology festivals — the people who made the result possible.",
    src: "/Highlights/Teknofest/IMG-20250918-WA0057.jpg",
  },
];

const uzcansatTestimonials: Testimonial[] = [
  {
    name: "UzCanSat 2025",
    designation: "1st Place · National CanSat Competition",
    quote:
      "MUBL took first place at the national CanSat competition with an innovative satellite design — the team's prototype, mission profile, and presentation set the standard for the cohort.",
    src: uzcansat2025,
  },
];

const youngLeadersTestimonials: Testimonial[] = [
  {
    name: "Young Leaders 2025",
    designation: "Finalists · Abu Dhabi Symposium",
    quote:
      "Selected as finalists for the Young Leaders Symposium in Abu Dhabi — MUBL represented Uzbekistan among the region's emerging engineering and science leaders.",
    src: youngLeaders2025,
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

type Colors = Parameters<typeof CircularTestimonials>[0]["colors"];

function HighlightSection({
  eyebrow,
  title,
  highlightWord,
  testimonials,
  colors,
}: {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  testimonials: Testimonial[];
  colors: Colors;
}) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const idx = title.indexOf(highlightWord);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="text-primary">{highlightWord}</span>
        {title.slice(idx + highlightWord.length)}
      </>
    );
  };

  return (
    <section className="mt-14">
      <div className="mb-6 max-w-3xl">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title mt-4">{renderTitle()}</h2>
      </div>
      <div className="glass-panel p-4 md:p-8">
        <CircularTestimonials
          testimonials={testimonials}
          autoplay
          colors={colors}
          fontSizes={{
            name: "1.75rem",
            designation: "1rem",
            quote: "1.05rem",
          }}
        />
      </div>
    </section>
  );
}

export default function Highlights() {
  usePageMeta({
    title: "Highlights",
    description:
      "MUBL's combined events and achievements — SpaceFest, Teknofest, UzCanSat, Young Leaders, and lab moments.",
  });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const carouselColors: Colors = isDark
    ? {
        name: "#f8fafc",
        designation: "#cbd5e1",
        testimony: "#e2e8f0",
        arrowBackground: "#0b1224",
        arrowForeground: "#f1f5f9",
        arrowHoverBackground: "#2563eb",
      }
    : {
        name: "#0f172a",
        designation: "#475569",
        testimony: "#1e293b",
        arrowBackground: "#0f172a",
        arrowForeground: "#f8fafc",
        arrowHoverBackground: "#2563eb",
      };

  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section page-section-wide">
          <div className="section-shell page-shell-screen">
            <div className="mb-6 max-w-3xl">
              <div className="eyebrow">Highlights</div>
              <h1 className="page-title mt-5">
                Events & <span className="text-primary">achievements</span>
              </h1>
              <p className="page-copy mt-5">
                Competition wins, organized flagships, and lab moments — the standout moments from MUBL's year, in one place.
              </p>
            </div>

            <HighlightSection
              eyebrow="SpaceFest 2025 · Organizer"
              title="Space Fest 2025"
              highlightWord="Fest"
              testimonials={spacefestTestimonials}
              colors={carouselColors}
            />

            <HighlightSection
              eyebrow="Teknofest 2025 · 4th Place"
              title="Teknofest 2025"
              highlightWord="Teknofest"
              testimonials={teknofestTestimonials}
              colors={carouselColors}
            />

            <HighlightSection
              eyebrow="UzCanSat 2025 · 1st Place"
              title="UzCanSat 2025"
              highlightWord="UzCanSat"
              testimonials={uzcansatTestimonials}
              colors={carouselColors}
            />

            <HighlightSection
              eyebrow="Young Leaders 2025 · Finalists"
              title="Young Leaders 2025"
              highlightWord="Leaders"
              testimonials={youngLeadersTestimonials}
              colors={carouselColors}
            />

            <div className="mt-14">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[color:var(--title-color)]">
                  Past events gallery
                </h2>
                <p className="panel-copy mt-2 max-w-2xl">
                  Lab sessions, talks, and workshops that built the year.
                </p>
              </div>
              <ImageAutoSlider items={galleryPastEvents} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
