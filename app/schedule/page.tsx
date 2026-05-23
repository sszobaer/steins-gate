import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule · Steins Gate",
  description: "Upcoming matches and tournaments for Steins Gate.",
};

const matches = [
  { date: "TBA", time: "TBA", event: "TBA", venue: "Online", status: "Upcoming" },
  { date: "TBA", time: "TBA", event: "TBA", venue: "Online", status: "Upcoming" },
  { date: "TBA", time: "TBA", event: "TBA", venue: "Online", status: "Upcoming" },
  { date: "TBA", time: "TBA", event: "TBA", venue: "Online", status: "Upcoming" },
  { date: "TBA", time: "TBA", event: "TBA", venue: "Online", status: "Upcoming" },
];

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Up next</div>
      <h1 className="font-display text-6xl mb-4">Match <span className="text-gradient-fire">schedule</span></h1>
      <p className="text-muted-foreground max-w-xl mb-16">Mark your calendar. Catch us on stream. Or pray you're not the opponent.</p>

      <div className="space-y-4">
        {matches.map((m, i) => (
          <div key={i}
            className="grid md:grid-cols-[140px_1fr_auto] gap-6 items-center border border-primary/20 p-6 clip-blade hover:border-primary/60 transition-colors bg-card/40">
            <div className="border-r border-primary/20 pr-6">
              <div className="font-display text-3xl text-gradient-fire">{m.date}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{m.time}</div>
            </div>
            <div>
              <div className="font-display text-xl mb-1">{m.event}</div>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground tracking-wider uppercase">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{m.venue}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{m.status}</span>
              </div>
            </div>
            <button className="bg-gradient-fire px-5 py-2 font-display tracking-widest text-xs text-primary-foreground clip-blade hover:shadow-ember transition-shadow">
              Set reminder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
