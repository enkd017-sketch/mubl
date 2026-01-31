import { Calendar as CalendarIcon, MapPin, Users, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

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

export default function Events() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </div>
        </div>

        <div className="px-6 py-12">
          {/* Section Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn, Build,{" "}
              <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From technical workshops to social gatherings, we organize events that 
              help members grow both professionally and personally.
            </p>
          </div>

          {/* Featured Event */}
          <div className="mb-12 max-w-5xl">
            <FeaturedEventCard event={events[0]} />
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {events.slice(1).map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function FeaturedEventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-1 bg-primary/5">
      <div className="bg-card rounded-xl p-8 md:p-12">
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
                <CalendarIcon className="h-4 w-4 text-primary" />
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
            <Button className="bg-primary hover:bg-primary/90 rounded-full">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full lg:w-80 h-48 lg:h-64 rounded-2xl bg-primary/20 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {event.description}
      </p>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
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
  );
}
