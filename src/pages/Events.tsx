import { Calendar as CalendarIcon, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

import spacefestImage from "@/assets/showcase/spacefest-2025.jpg";
import bootcampImage from "@/assets/events/stem-bootcamp.png";

const events = [
  {
    title: "SpaceFest 2025", description: "Annual space technology festival organized at New Uzbekistan University.",
    date: "October 4th", location: "New Uzbekistan University", attendees: "200+", featured: true, image: spacefestImage, link: "https://spacefest.newuu.uz",
  },
  {
    title: "MUBL STEM Bootcamp", description: "Intensive training program covering robotics, AI, and 3D printing fundamentals.",
    date: "Ongoing", location: "New Uzbekistan University", attendees: "20", featured: false, image: bootcampImage, link: "https://bootcamp.mubl.uz",
  },
  { title: "Reverse Engineering Sessions", description: "Learn how products work by taking them apart.", date: "Weekly", location: "New Uzbekistan University", attendees: "15", featured: false },
  { title: "Movie Nights", description: "Tech-themed movie screenings to build community bonds.", date: "Monthly", location: "Campus Hub", attendees: "40+", featured: false },
];

export default function Events() {
  return (
    <Layout>
      <div className="page-frame">
        <section className="page-section">
          <div className="max-w-6xl">
            <div className="section-shell mb-8">
              <div className="mb-12 max-w-3xl">
                <div className="eyebrow">Events</div>
                <h1 className="page-title mt-5">
                  Learn, build, <span className="text-primary">connect</span>
                </h1>
                <p className="page-copy mt-5">
                  Workshops, bootcamps, community nights, and flagship events create the environment where members keep showing up and improving together.
                </p>
              </div>

              <div className="mb-12">
                <div className="glass-panel overflow-hidden p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-100/80">Featured Event</div>
                      <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{events[0].title}</h3>
                      <p className="mb-6 leading-relaxed text-slate-300">{events[0].description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-slate-400"><CalendarIcon className="h-4 w-4 text-primary" />{events[0].date}</div>
                        <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4 text-primary" />{events[0].location}</div>
                        <div className="flex items-center gap-2 text-sm text-slate-400"><Users className="h-4 w-4 text-primary" />{events[0].attendees} Attendees</div>
                      </div>
                      <Button className="rounded-full bg-primary hover:bg-primary/90" asChild>
                        <a href={events[0].link} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                    <div className="h-48 w-full overflow-hidden rounded-[1.75rem] border border-white/10 lg:h-64 lg:w-80">
                      <img src={events[0].image} alt={events[0].title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div className="mb-12">
                <div className="glass-panel overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 md:h-auto">
                    <img src={events[1].image} alt={events[1].title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">{events[1].title}</h3>
                    <p className="mb-4 leading-relaxed text-slate-300">{events[1].description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400"><CalendarIcon className="h-4 w-4 text-primary" />{events[1].date}</div>
                      <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4 text-primary" />{events[1].location}</div>
                    </div>
                    <Button variant="outline" className="rounded-full border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white" asChild>
                      <a href={events[1].link} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {events.slice(2).map((event, index) => (
                <div key={index} className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-200">{event.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{event.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1"><CalendarIcon className="h-3 w-3 text-primary" />{event.date}</div>
                    <div className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" />{event.location}</div>
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
