import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import gameplay from "@/assets/gameplay.jpg";
import logo from "@/assets/logo.png";
import { players } from "@/data/players";
import { Target, Trophy, Flame, ArrowRight, Crosshair, Zap, Shield, Radio } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steins Gate · PUBG Mobile Esports — Bangladesh" },
      {
        name: "description",
        content: "Bangladesh's most ruthless PUBG Mobile squad. Meet STEINS GATE.",
      },
      { property: "og:title", content: "Steins Gate · PUBG Mobile Esports" },
      { property: "og:description", content: "Bangladesh's most ruthless PUBG Mobile squad." },
    ],
  }),
  component: Home,
});

const weapons = ["AWM", "M416", "GROZA", "AKM", "KAR98K", "MK14", "SCAR-L", "VECTOR"];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        {/* HUD CORNERS */}
        <div className="pointer-events-none absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-primary/60" />
        <div className="pointer-events-none absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-primary/60" />
        <div className="pointer-events-none absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-primary/60" />
        <div className="pointer-events-none absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-primary/60" />

        {/* SCAN LINE */}
        <div className="pointer-events-none absolute inset-0 [background:repeating-linear-gradient(0deg,transparent_0_3px,oklch(0_0_0/0.15)_3px_4px)]" />

        <div className="container relative mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 border border-primary/40 bg-background/60 backdrop-blur px-4 py-1.5 text-xs tracking-[0.3em] uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary">LIVE</span>
              <span className="text-muted-foreground">PUBG MOBILE · BANGLADESH</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.9] mb-6">
              <span className="block">DROP HOT.</span>
              <span className="block text-gradient-fire">LOOT FAST.</span>
              <span className="block">RUN THE LOBBY.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 border-l-2 border-primary pl-4">
              Four players. One system. Steins Gate is a Bangladesh PUBG Mobile team built for
              disciplined rotations, coordinated fights, and tournament pressure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 bg-gradient-fire px-6 py-3 font-display tracking-widest text-sm text-primary-foreground clip-blade shadow-ember hover:shadow-glow transition-shadow"
              >
                <Crosshair className="w-4 h-4" /> Meet the squad
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 border border-primary/40 bg-background/60 backdrop-blur px-6 py-3 font-display tracking-widest text-sm hover:bg-primary/10 transition-colors clip-blade"
              >
                <Radio className="w-4 h-4 text-primary" /> Watch live
              </Link>
            </div>

            {/* MINI HUD STATS */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { l: "REGION", v: "Bangladesh" },
                { l: "DIVISION", v: "PUBG Mobile" },
                { l: "FOCUS", v: "Pro Circuit" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border border-primary/30 bg-background/60 backdrop-blur px-3 py-2"
                >
                  <div className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {s.l}
                  </div>
                  <div className="font-display text-sm text-primary tracking-wider">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-fire blur-3xl opacity-50 animate-pulse" />
              <img
                src={logo}
                alt="Steins Gate logo"
                width={520}
                height={520}
                className="relative w-[460px] h-[460px] object-contain drop-shadow-[0_0_60px_oklch(0.7_0.21_45/0.7)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WEAPON TICKER */}
      <div className="border-y border-primary/30 bg-card/60 overflow-hidden">
        <div className="flex items-center gap-12 py-3 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {[...weapons, ...weapons, ...weapons].map((w, i) => (
            <div key={i} className="flex items-center gap-3 font-display tracking-[0.3em] text-sm">
              <Crosshair className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{w}</span>
              <span className="text-primary">/</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
      </div>

      {/* STATS BAR */}
      <section className="bg-card/30">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {[
            { k: "4", l: "Tournament placements", i: Trophy },
            { k: "2022", l: "Competitive debut", i: Target },
            { k: "South Asia", l: "Regional circuit", i: Shield },
            { k: "5", l: "Active players", i: Zap },
          ].map((s) => {
            const Icon = s.i;
            return (
              <div
                key={s.l}
                className="border border-primary/20 bg-background/40 p-6 clip-blade group hover:border-primary/60 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-5xl text-gradient-fire">{s.k}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GAMEPLAY SHOWCASE */}
      <section className="relative overflow-hidden border-y border-primary/20">
        <img
          src={gameplay}
          alt=""
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto px-6 py-24 max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
            // Battle royale
          </div>
          <h2 className="font-display text-5xl mb-6">
            64 PLAYERS. <span className="text-gradient-fire">1 SQUAD STANDING.</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            PUBG Mobile is the world's most-played battle royale — and we play it like our lives are
            on the line. Every drop is a war. Every circle, a chess match. Every kill, a statement.
          </p>
          <div className="flex flex-wrap gap-3">
            {["ERANGEL", "MIRAMAR", "SANHOK", "VIKENDI", "LIVIK"].map((map) => (
              <span
                key={map}
                className="border border-primary/40 px-3 py-1 text-xs tracking-[0.3em] uppercase text-primary"
              >
                {map}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ROSTER PREVIEW */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-2">The squad</div>
            <h2 className="font-display text-5xl">FIVE PLAYERS, ONE FREQUENCY</h2>
          </div>
          <Link
            to="/team"
            className="font-display tracking-widest text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Full roster <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {players.map((p, i) => (
            <div
              key={p.ign}
              className="group relative overflow-hidden bg-card border border-primary/20 clip-blade"
            >
              <div className="absolute top-2 left-2 z-10 font-display text-xs tracking-widest text-primary bg-background/80 backdrop-blur px-2 py-1 border border-primary/40">
                P0{i + 1}
              </div>
              <img
                src={p.img}
                alt={p.ign}
                loading="lazy"
                width={768}
                height={896}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display text-2xl text-gradient-fire">{p.ign}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {p.role}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <Crosshair className="w-3 h-3 text-primary" />
                  <span className="text-[10px] tracking-widest text-primary">ACTIVE ROSTER</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-card/30 border-y border-primary/20">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
          {[
            {
              i: Target,
              t: "Precision",
              d: "Every bullet has an address. No spray, no waste — surgical headshots only.",
            },
            {
              i: Flame,
              t: "Aggression",
              d: "We push first. We push last. The zone, the loot, the win — all ours.",
            },
            {
              i: Trophy,
              t: "Hardware",
              d: "Trophies don't lie. The shelf keeps growing — and the lobby keeps falling.",
            },
          ].map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="border border-primary/20 bg-background/40 p-8 clip-blade hover:border-primary/60 transition-all hover:translate-y-[-4px]"
            >
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-2xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
