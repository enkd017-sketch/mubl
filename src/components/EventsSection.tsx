import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "SpaceFest 2025",
    description: "Annual space technology festival organized at New Uzbekistan University featuring workshops, competitions, and expert talks.",
    date: "March 2025",
    location: "New Uzbekistan University",
    attendees: "200+",
    featured: true,
  },
  {
    title: "MUBL STEM Bootcamp",
    description: "Intensive training program covering robotics, AI, and 3D printing fundamentals.",
    date: "Ongoing",
    location: "MUBL Lab",
    attendees: "30",
    featured: false,
  },
  {
    title: "Reverse Engineering Sessions",
    description: "Learn how products work by taking them apart and understanding their design.",
    date: "Weekly",
    location: "MUBL Workshop",
    attendees: "15",
    featured: false,
  },
  {
    title: "Movie Nights",
    description: "Tech-themed movie screenings to make learning fun and build community bonds.",
    date: "Monthly",
    location: "Campus Hub",
    attendees: "40+",
    featured: false,
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Our Events</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Learn, Build,
            <span className="gradient-text"> Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From technical workshops to social gatherings, we organize events that 
            help members grow both professionally and personally.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <FeaturedEventCard event={events[0]} />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {events.slice(1).map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedEventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-bg p-1">
      <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Featured Event
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {event.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {event.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                {event.attendees} Attendees
              </div>
            </div>
            <Button className="gradient-bg glow">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full lg:w-80 h-48 lg:h-64 rounded-2xl gradient-bg opacity-50 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {event.description}
      </p>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3 text-primary" />
          {event.date}
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-3 w-3 text-primary" />
          {event.location}
        </div>
      </div>
    </div>
  );
}
