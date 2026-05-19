import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements · Steins Gate" },
      { name: "description", content: "Tournament wins and milestones earned by Steins Gate." },
      { property: "og:title", content: "Achievements · Steins Gate" },
    ],
  }),
  component: Page,
});

const achievements = [
  { year: "2022", title: "BGIS Finalist", prize: "৳10,0000", icon: Trophy },
  { year: "2022", title: "BDSL Monthly Battle Mania", prize: "৳20,000", icon: Trophy },
  { year: "2022", title: "PUBG Mobile Entity Championship Finalist", prize: "$5,000", icon: Medal },
  { year: "2022", title: "CXK Weekly Scrim", place: "2nd", prize: "$5", icon: Medal },
];

function Page() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Trophy room</div>
      <h1 className="font-display text-6xl mb-4">
        Hardware <span className="text-gradient-fire">earned</span>
      </h1>
      <p className="text-muted-foreground max-w-xl mb-16">
        Every trophy carries a story of pressure, precision, and the final circle.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a) => {
          const Icon = a.icon;
          const isFirst = a.place === "1st";
          const hasPlace = Boolean(a.place);

          return (
            <div
              key={a.title}
              className={`relative border p-8 clip-blade transition-all hover:translate-y-[-4px] ${
                isFirst
                  ? "border-primary/60 bg-gradient-to-br from-primary/10 to-transparent shadow-ember"
                  : "border-primary/20 bg-card"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <Icon
                  className={`w-12 h-12 ${isFirst ? "text-primary" : "text-muted-foreground"}`}
                />
                <span className="font-display text-sm tracking-widest text-muted-foreground">
                  {a.year}
                </span>
              </div>

              {hasPlace ? (
                <div
                  className={`font-display text-5xl mb-2 ${isFirst ? "text-gradient-fire" : "text-foreground"}`}
                >
                  {a.place}
                </div>
              ) : (
                <div className="mb-4 inline-flex border border-primary/20 px-3 py-1 text-xs uppercase tracking-[0.28em] text-primary">
                  Achievement
                </div>
              )}

              <h2 className={`font-display mb-3 ${hasPlace ? "text-2xl" : "text-3xl"}`}>
                {a.title}
              </h2>
              <div className="text-sm text-muted-foreground tracking-wider">Prize · {a.prize}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
