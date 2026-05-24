import type { Metadata } from "next";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { players } from "@/data/players";

export const metadata: Metadata = {
  title: "Roster · Steins Gate",
  description:
    "Meet the five-man squad of Steins Gate: Hunter, Toxic, Mahim, Arpon, HeatBlast.",
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
        The Roster
      </div>

      <h1 className="font-display text-6xl mb-4">
        Squad of <span className="text-gradient-fire">five</span>
      </h1>

      <p className="text-muted-foreground max-w-xl mb-16">
        Each role sharpened to a point. Together — unbreakable.
      </p>

      <div className="space-y-10">
        {players.map((p, idx) => (
          <article
            key={p.ign}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden clip-blade border border-primary/30 bg-card group">
              <img
                src={p.img}
                alt={p.ign}
                loading="lazy"
                width={768}
                height={896}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 border border-primary/40">
                <span className="font-display text-xs tracking-widest text-primary">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {p.role}
              </div>

              <h2 className="font-display text-6xl text-gradient-fire mb-4">
                {p.ign}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                {p.bio}
              </p>

              {/* PLAYER INFO */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl">
                {[
                  {
                    l: "Roster ID",
                    v: `P${String(idx + 1).padStart(2, "0")}`,
                  },
                  { l: "Role", v: p.role },
                  { l: "IGN", v: p.ingameName },
                  { l: "UID", v: p.uid },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="border border-primary/20 p-4 clip-blade bg-card/40"
                  >
                    <div className="font-display text-xl text-gradient-fire break-words">
                      {s.v}
                    </div>

                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-4">
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-primary/30 clip-blade hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href={p.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-primary/30 clip-blade hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={p.x}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-primary/30 clip-blade hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}