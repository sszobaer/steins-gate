import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Youtube, Twitch, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Steins Gate" },
      { name: "description", content: "Sponsorships, collabs, and fan mail — get in touch with Steins Gate." },
      { property: "og:title", content: "Contact · Steins Gate" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Get in touch</div>
          <h1 className="font-display text-6xl mb-6">Drop a <span className="text-gradient-fire">message</span></h1>
          <p className="text-muted-foreground mb-10">
            Sponsorships, tournament invites, fan questions — we read everything. Use the form or reach out on socials.
          </p>
          <div className="space-y-4">
            {[
              { i: Mail, l: "team@steinsgate.gg" },
              { i: Instagram, l: "@steinsgate.gg" },
              { i: Youtube, l: "youtube.com/@steinsgate" },
              { i: Twitch, l: "twitch.tv/steinsgate" },
              { i: MessageCircle, l: "Discord · steinsgate" },
            ].map(({ i: Icon, l }) => (
              <div key={l} className="flex items-center gap-4 border border-primary/20 p-4 clip-blade hover:border-primary/60 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-display tracking-wider text-sm">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="border border-primary/30 p-8 bg-card/40 clip-blade space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Message queued. We'll respond after the next match."); }}>
          <h2 className="font-display text-2xl mb-2">Send a message</h2>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Name</label>
            <input required className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
            <input required type="email" className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Subject</label>
            <select className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none">
              <option>Sponsorship</option>
              <option>Tournament invite</option>
              <option>Press / Interview</option>
              <option>Fan mail</option>
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
            <textarea required rows={5} className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="w-full bg-gradient-fire py-3 font-display tracking-widest text-sm text-primary-foreground clip-blade shadow-ember hover:shadow-glow transition-shadow">
            Send transmission
          </button>
        </form>
      </div>
    </div>
  );
}
