import type { Metadata } from "next";
import { Mail, Instagram, Youtube, Twitch, MessageCircle, Facebook } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact · Steins Gate",
  description: "Sponsorships, collabs, and fan mail — get in touch with Steins Gate.",
};

export default function ContactPage() {
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
              {
                i: Mail,
                l: "steinsgateesports@gmail.com",
                href: "mailto:steinsgateesports@gmail.com",
              },
              {
                i: Facebook,
                l: "Facebook · Steins Gate Esports",
                href: "https://www.facebook.com/SteinsGateEsports/",
              },
              {
                i: MessageCircle,
                l: "Discord · steinsgate",
                href: "https://discord.gg/gnsRc2nb",
              },
            ].map(({ i: Icon, l, href }) => (
              <a
                key={l}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-primary/20 p-4 clip-blade hover:border-primary/60 transition-colors"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-display tracking-wider text-sm">{l}</span>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
