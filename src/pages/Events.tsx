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
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Learn, Build, <span className="text-primary">Connect</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From technical workshops to social gatherings.
              </p>
            </div>

            {/* Featured */}
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-1 bg-primary/5">
                <div className="bg-card rounded-xl p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Featured Event</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{events[0].title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{events[0].description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarIcon className="h-4 w-4 text-primary" />{events[0].date}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{events[0].location}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="h-4 w-4 text-primary" />{events[0].attendees} Attendees</div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 rounded-full" asChild>
                        <a href={events[0].link} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                    <div className="w-full lg:w-80 h-48 lg:h-64 rounded-2xl overflow-hidden">
                      <img src={events[0].image} alt={events[0].title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="mb-12">
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 md:h-auto">
                    <img src={events[1].image} alt={events[1].title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{events[1].title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{events[1].description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarIcon className="h-4 w-4 text-primary" />{events[1].date}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{events[1].location}</div>
                    </div>
                    <Button variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10" asChild>
                      <a href={events[1].link} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.slice(2).map((event, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><CalendarIcon className="h-3 w-3 text-primary" />{event.date}</div>
                    <div className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" />{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
