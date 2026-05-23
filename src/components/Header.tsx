"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Roster" },
  { href: "/achievements", label: "Achievements" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Steins Gate" width={56} height={56} className="w-14 h-14 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.21_45/0.6)]" />
          <div className="leading-none">
            <div className="font-display text-xl tracking-widest text-gradient-fire">STEINS GATE ESPORTS</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">PUBG MOBILE · BD</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative font-display tracking-widest text-sm transition-colors ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
              >
                {n.label}
                {active && <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-fire" />}
              </Link>
            );
          })}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/20 bg-background">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display tracking-widest text-sm py-2">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
